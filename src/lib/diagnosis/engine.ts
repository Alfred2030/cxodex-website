import { dimensionLabels, questions } from "./questions";
import type {
  AnswerValue,
  DiagnosisAnswers,
  DiagnosisResult,
  DimensionId,
  DimensionScore,
  Finding,
  MetricInput,
  Question,
  RiskLevel,
} from "./types";

const DIMENSION_IDS = Object.keys(dimensionLabels) as DimensionId[];

export function evaluateDiagnosis(
  answers: DiagnosisAnswers,
  metrics: MetricInput = {},
): DiagnosisResult {
  const findings = questions
    .map((question) => evaluateQuestion(question, answers[String(question.id)]))
    .filter((finding): finding is Finding => Boolean(finding));

  const metricFindings = evaluateMetrics(metrics);
  const allFindings = [...findings, ...metricFindings];

  const dimensions = DIMENSION_IDS.map((id) => buildDimensionScore(id, allFindings, answers));
  const overallScore = Math.round(
    dimensions.reduce((sum, dimension) => sum + dimension.percent, 0) / dimensions.length,
  );

  const topRisks = allFindings
    .filter((finding) => finding.level === "high" || finding.level === "medium")
    .sort((a, b) => b.scoreImpact - a.scoreImpact)
    .slice(0, 3);

  const reviewItems = allFindings.filter((finding) => finding.level === "review");

  return {
    overallScore,
    riskLevel: riskFromPercent(overallScore),
    dimensions,
    topRisks,
    reviewItems,
    generatedAt: new Date().toISOString(),
  };
}

function evaluateQuestion(question: Question, value: AnswerValue): Finding | null {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  if (question.kind === "choice") {
    const text = String(value);
    if (text.includes("没有") || text.includes("小于 20%")) {
      return makeFinding(question, "high", question.conclusion ?? "该项显示存在明显改善空间。");
    }
    if (text.includes("部分") || text.includes("稳定生存") || text.includes("存活")) {
      return makeFinding(question, "medium", question.conclusion ?? "该项需要进一步拆解。");
    }
    return null;
  }

  if (!question.threshold) {
    return null;
  }

  if (question.threshold.type === "needsIndustryBenchmark") {
    return makeFinding(question, "review", "该项需要结合行业数据复核，当前报告不伪造行业基准。");
  }

  const numberValue = Number(value);
  if (!Number.isFinite(numberValue)) {
    return null;
  }

  switch (question.threshold.type) {
    case "score": {
      if (numberValue < question.threshold.highBelow) {
        return makeFinding(question, "high", question.conclusion ?? "该项评分偏低，需要优先改善。");
      }
      if (question.threshold.mediumBelow && numberValue < question.threshold.mediumBelow) {
        return makeFinding(question, "medium", question.conclusion ?? "该项仍有提升空间。");
      }
      return null;
    }
    case "negativeIsHigh":
      return numberValue < 0
        ? makeFinding(question, "high", question.conclusion ?? "该项为负值，需尽快复核。")
        : null;
    case "greaterThanHigh":
      return numberValue > question.threshold.value
        ? makeFinding(question, "high", question.conclusion ?? "该指标高于预警阈值。")
        : null;
    case "lessThanHigh":
      return numberValue < question.threshold.value
        ? makeFinding(question, "high", question.conclusion ?? "该指标低于预警阈值。")
        : null;
    case "lessThanMedium":
      if (numberValue < question.threshold.high) {
        return makeFinding(question, "high", question.conclusion ?? "该指标低于高风险阈值。");
      }
      if (numberValue < question.threshold.medium) {
        return makeFinding(question, "medium", question.conclusion ?? "该指标低于优秀水平。");
      }
      return null;
    case "approvalFlow":
      return numberValue > 3
        ? makeFinding(question, "high", question.conclusion ?? "审批流程偏长。")
        : null;
    default:
      return null;
  }
}

function evaluateMetrics(metrics: MetricInput): Finding[] {
  const metricRules: Array<{
    key: keyof MetricInput;
    questionId: number;
    dimension: DimensionId;
    title: string;
    evaluate: (value: number) => RiskLevel | null;
    message: string;
    recommendation: string;
  }> = [
    {
      key: "netCashFlow",
      questionId: 24,
      dimension: "finance",
      title: "净现金流",
      evaluate: (value) => (value < 0 ? "high" : null),
      message: "净现金流为负，企业现金短缺风险上升。",
      recommendation: "优先限制非必要投资，复核回款、毛利、库存和固定支出。",
    },
    {
      key: "grossMarginPct",
      questionId: 13,
      dimension: "finance",
      title: "毛利率",
      evaluate: (value) => (value < 11 ? "high" : value < 21 ? "medium" : null),
      message: "毛利率低于健康区间，盈利质量承压。",
      recommendation: "拆解产品结构、价格、材料成本和制造费用，优先改善低毛利业务。",
    },
    {
      key: "inventoryTurnover",
      questionId: 26,
      dimension: "operations",
      title: "库存周转率",
      evaluate: (value) => (value < 4 ? "high" : value < 6 ? "medium" : null),
      message: "库存周转偏低，现金和存货跌价风险增加。",
      recommendation: "复核安全库存、呆滞料、预测准确率和生产计划节奏。",
    },
    {
      key: "capacityUtilizationPct",
      questionId: 28,
      dimension: "operations",
      title: "产能利用率",
      evaluate: (value) => (value < 50 ? "high" : value < 70 ? "medium" : null),
      message: "产能利用率偏低，固定成本吸收能力不足。",
      recommendation: "评估产线整合、班次安排、外协策略和销售订单结构。",
    },
    {
      key: "revenuePerEmployee",
      questionId: 27,
      dimension: "operations",
      title: "人均产值",
      evaluate: (value) => (value < 20 ? "high" : null),
      message: "人均产值低于 20 万/人，组织效率可能偏低。",
      recommendation: "复核组织层级、间接人员比例和关键流程自动化机会。",
    },
  ];

  return metricRules.flatMap((rule) => {
    const rawValue = metrics[rule.key];
    if (rawValue === undefined || rawValue === null || !Number.isFinite(Number(rawValue))) {
      return [];
    }

    const level = rule.evaluate(Number(rawValue));
    if (!level) {
      return [];
    }

    return [
      {
        questionId: rule.questionId,
        dimension: rule.dimension,
        title: rule.title,
        level,
        scoreImpact: scoreImpact(level),
        message: rule.message,
        recommendation: rule.recommendation,
        sourceConclusion: rule.message,
      },
    ];
  });
}

function buildDimensionScore(
  id: DimensionId,
  findings: Finding[],
  answers: DiagnosisAnswers,
): DimensionScore {
  const dimensionQuestions = questions.filter((question) => question.dimension === id);
  const scoreValues = dimensionQuestions
    .filter((question) => question.kind === "score")
    .map((question) => Number(answers[String(question.id)]))
    .filter(Number.isFinite);

  const basePercent =
    scoreValues.length > 0
      ? Math.round((scoreValues.reduce((sum, value) => sum + value, 0) / (scoreValues.length * 10)) * 100)
      : 78;

  const dimensionFindings = findings.filter((finding) => finding.dimension === id);
  const penalty = dimensionFindings.reduce((sum, finding) => sum + finding.scoreImpact, 0);
  const percent = clamp(basePercent - penalty, 0, 100);

  return {
    id,
    label: dimensionLabels[id],
    score: Math.round(percent / 10),
    maxScore: 10,
    percent,
    riskLevel: riskFromPercent(percent),
    findings: dimensionFindings,
  };
}

function makeFinding(question: Question, level: RiskLevel, message: string): Finding {
  return {
    questionId: question.id,
    dimension: question.dimension,
    title: question.title,
    level,
    scoreImpact: scoreImpact(level),
    message,
    recommendation: recommendationFor(level, question.dimension),
    sourceConclusion: question.conclusion,
  };
}

function scoreImpact(level: RiskLevel) {
  if (level === "high") return 18;
  if (level === "medium") return 9;
  if (level === "review") return 3;
  return 0;
}

function riskFromPercent(percent: number): RiskLevel {
  if (percent < 55) return "high";
  if (percent < 75) return "medium";
  return "low";
}

function recommendationFor(level: RiskLevel, dimension: DimensionId) {
  if (level === "review") {
    return "补充行业基准、历史趋势或财务明细后再做最终判断。";
  }

  const map: Record<DimensionId, string> = {
    market: "先复核客户价值、竞争护城河和订单转化率，明确差异化来源。",
    strategy: "把年度目标拆成可测量 KPI，并建立周/月/季度复盘节奏。",
    finance: "优先看现金流、毛利、回款和固定支出，避免用收入增长掩盖盈利质量问题。",
    operations: "从交付、质量、库存、产能和审批流程中选 1-2 个瓶颈先做改善闭环。",
    organization: "明确关键岗位继任、管理者反馈和价值观沟通机制。",
    growth: "拆解增长来源，区分市场需求、价格、客户结构和销售体系问题。",
    future: "把未来 5 年意图转化为资源配置、人才和经营节奏选择。",
  };

  return map[dimension];
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}
