import { AlertTriangle, CheckCircle2, CircleGauge, FileText } from "lucide-react";
import { questions } from "@/lib/diagnosis/questions";
import type { DiagnosisAnswers, DiagnosisResult, LeadInfo } from "@/lib/diagnosis/types";

type ReportViewProps = {
  result: DiagnosisResult;
  answers: DiagnosisAnswers;
  lead?: LeadInfo;
  compact?: boolean;
};

const riskLabel = {
  low: "健康",
  medium: "需关注",
  high: "高风险",
  review: "待复核",
};

export function ReportView({ result, answers, lead, compact = false }: ReportViewProps) {
  return (
    <article className="print-report rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm md:p-8">
      <header className="grid gap-4 border-b border-[var(--line)] pb-5 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-semibold text-[var(--accent)]">CXODEX 企业经营健康诊断</p>
          <h1 className="mt-2 text-2xl font-semibold md:text-4xl">
            {lead?.company ? `${lead.company} 诊断报告` : "免费诊断预览"}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)]">
            评分基于当前问卷和财务/运营输入生成，适合作为 CEO 初步识别经营风险和咨询沟通议题的起点。
          </p>
        </div>
        <div className="rounded-[8px] border border-[var(--line)] bg-white p-4 text-center">
          <div className="text-5xl font-semibold text-[var(--accent-strong)]">{result.overallScore}</div>
          <div className="mt-1 text-sm text-[var(--muted)]">综合健康分</div>
          <div className="mt-2 text-sm font-medium">{riskLabel[result.riskLevel]}</div>
        </div>
      </header>

      <section className="mt-6 grid gap-3 md:grid-cols-7">
        {result.dimensions.map((dimension) => (
          <div key={dimension.id} className="rounded-[8px] border border-[var(--line)] bg-white p-3">
            <div className="flex items-center justify-between gap-2 text-sm font-medium">
              <span>{dimension.label}</span>
              <span>{dimension.percent}</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e5ece8]">
              <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${dimension.percent}%` }} />
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <SummaryPanel
          icon={<AlertTriangle size={18} />}
          title="Top 风险"
          lines={result.topRisks.map((risk) => risk.title)}
          empty="当前没有高优先级风险。"
        />
        <SummaryPanel
          icon={<FileText size={18} />}
          title="需复核项"
          lines={result.reviewItems.map((risk) => risk.title)}
          empty="暂无需行业基准复核项。"
        />
        <SummaryPanel
          icon={<CheckCircle2 size={18} />}
          title="建议下一步"
          lines={result.topRisks.map((risk) => risk.recommendation)}
          empty="保持现有复盘节奏，持续跟踪关键指标。"
        />
      </section>

      {!compact && (
        <>
          <section className="mt-8">
            <div className="mb-4 flex items-center gap-2">
              <CircleGauge size={20} className="text-[var(--accent)]" />
              <h2 className="text-xl font-semibold">维度诊断</h2>
            </div>
            <div className="grid gap-4">
              {result.dimensions.map((dimension) => (
                <div key={dimension.id} className="rounded-[8px] border border-[var(--line)] bg-white p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-semibold">{dimension.label}</h3>
                    <span className="rounded-full bg-[#edf7f5] px-3 py-1 text-sm text-[var(--accent-strong)]">
                      {dimension.percent} / 100
                    </span>
                  </div>
                  {dimension.findings.length > 0 ? (
                    <div className="mt-4 grid gap-3">
                      {dimension.findings.map((finding, index) => (
                        <div key={`${finding.questionId}-${index}`} className="rounded-[8px] bg-[#f4f8f6] p-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-semibold">Q{finding.questionId}</span>
                            <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-xs">
                              {riskLabel[finding.level]}
                            </span>
                          </div>
                          <p className="mt-2 text-sm font-medium">{finding.title}</p>
                          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{finding.message}</p>
                          {finding.sourceConclusion && (
                            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                              Excel 结论：{finding.sourceConclusion}
                            </p>
                          )}
                          <p className="mt-2 text-sm leading-6">建议：{finding.recommendation}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-sm text-[var(--muted)]">当前输入未触发该维度的明显预警。</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">答案摘要</h2>
            <div className="mt-4 grid gap-3">
              {questions.map((question) => (
                <div key={question.id} className="grid gap-2 rounded-[8px] border border-[var(--line)] bg-white p-3 md:grid-cols-[80px_1fr_220px]">
                  <div className="text-sm font-semibold text-[var(--accent)]">Q{question.id}</div>
                  <div className="text-sm">{question.title}</div>
                  <div className="break-words text-sm text-[var(--muted)]">
                    {answers[String(question.id)] === undefined || answers[String(question.id)] === ""
                      ? "未填写"
                      : String(answers[String(question.id)])}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </article>
  );
}

function SummaryPanel({
  icon,
  title,
  lines,
  empty,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  empty: string;
}) {
  const visibleLines = lines.filter(Boolean).slice(0, 3);

  return (
    <div className="rounded-[8px] border border-[var(--line)] bg-white p-4">
      <div className="flex items-center gap-2 font-semibold">
        <span className="text-[var(--accent)]">{icon}</span>
        {title}
      </div>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
        {visibleLines.length > 0 ? visibleLines.map((line) => <li key={line}>{line}</li>) : <li>{empty}</li>}
      </ul>
    </div>
  );
}
