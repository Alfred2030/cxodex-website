export type RiskLevel = "low" | "medium" | "high" | "review";

export type QuestionKind = "score" | "text" | "number" | "choice";

export type DimensionId =
  | "market"
  | "strategy"
  | "finance"
  | "operations"
  | "organization"
  | "growth"
  | "future";

export type Question = {
  id: number;
  dimension: DimensionId;
  kind: QuestionKind;
  title: string;
  help: string;
  conclusion?: string;
  required?: boolean;
  options?: string[];
  threshold?: ThresholdRule;
};

export type ThresholdRule =
  | { type: "score"; highBelow: number; mediumBelow?: number }
  | { type: "negativeIsHigh" }
  | { type: "greaterThanHigh"; value: number }
  | { type: "lessThanHigh"; value: number }
  | { type: "lessThanMedium"; high: number; medium: number }
  | { type: "approvalFlow" }
  | { type: "needsIndustryBenchmark" };

export type MetricInput = {
  receivables?: number;
  payables?: number;
  inventory?: number;
  netCashFlow?: number;
  revenueLastYear?: number;
  revenueThisYear?: number;
  netProfitLastYear?: number;
  netProfitThisYear?: number;
  managementExpense?: number;
  manufacturingExpense?: number;
  grossMarginPct?: number;
  revenuePerEmployee?: number;
  breakEvenPoint?: number;
  onTimeDeliveryPct?: number;
  capacityUtilizationPct?: number;
  oeePct?: number;
  inventoryTurnover?: number;
  variableCostPct?: number;
};

export type AnswerValue = string | number | null;

export type DiagnosisAnswers = Record<string, AnswerValue>;

export type CompanyProfile = {
  industry?: string;
  mainProduct?: string;
  annualRevenue?: string;
  employees?: string;
};

export type LeadInfo = {
  name: string;
  company: string;
  email?: string;
  phone?: string;
  role?: string;
};

export type Finding = {
  questionId: number;
  dimension: DimensionId;
  title: string;
  level: RiskLevel;
  scoreImpact: number;
  message: string;
  recommendation: string;
  sourceConclusion?: string;
};

export type DimensionScore = {
  id: DimensionId;
  label: string;
  score: number;
  maxScore: number;
  percent: number;
  riskLevel: RiskLevel;
  findings: Finding[];
};

export type DiagnosisResult = {
  overallScore: number;
  riskLevel: RiskLevel;
  dimensions: DimensionScore[];
  topRisks: Finding[];
  reviewItems: Finding[];
  generatedAt: string;
};
