"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CalendarCheck, Check, Download, Lock, Mail, RotateCcw, Send } from "lucide-react";
import { ReportView } from "@/components/ReportView";
import { diagnosisSteps, questions } from "@/lib/diagnosis/questions";
import { evaluateDiagnosis } from "@/lib/diagnosis/engine";
import type { CompanyProfile, DiagnosisAnswers, DiagnosisResult, LeadInfo, MetricInput, Question } from "@/lib/diagnosis/types";

const STORAGE_KEY = "cxodex-diagnosis-draft-v1";
const consentVersion = "2026-06-11";

const metricFields: Array<{ key: keyof MetricInput; label: string; suffix?: string }> = [
  { key: "revenueLastYear", label: "去年销售额", suffix: "千人民币" },
  { key: "revenueThisYear", label: "今年销售额（实际+预测）", suffix: "千人民币" },
  { key: "netProfitLastYear", label: "去年净利润", suffix: "千人民币" },
  { key: "netProfitThisYear", label: "今年净利润", suffix: "千人民币" },
  { key: "netCashFlow", label: "净现金流", suffix: "千人民币" },
  { key: "grossMarginPct", label: "毛利率", suffix: "%" },
  { key: "revenuePerEmployee", label: "人均产值", suffix: "万元/人" },
  { key: "capacityUtilizationPct", label: "产能利用率", suffix: "%" },
  { key: "inventoryTurnover", label: "库存周转率", suffix: "次" },
  { key: "onTimeDeliveryPct", label: "订单准交率", suffix: "%" },
  { key: "oeePct", label: "OEE 全流程效率", suffix: "%" },
  { key: "variableCostPct", label: "变动成本率", suffix: "%" },
];

export function DiagnosisApp() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<DiagnosisAnswers>(() => getInitialDraft().answers);
  const [metrics, setMetrics] = useState<MetricInput>(() => getInitialDraft().metrics);
  const [companyProfile, setCompanyProfile] = useState<CompanyProfile>(() => getInitialDraft().companyProfile);
  const [lead, setLead] = useState<LeadInfo>({ name: "", company: "", email: "", phone: "", role: "" });
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [reportToken, setReportToken] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const result = useMemo(() => evaluateDiagnosis(answers, metrics), [answers, metrics]);
  const activeStep = diagnosisSteps[stepIndex];
  const activeQuestions = questions.filter((question) => activeStep.questionIds.includes(question.id));
  const answeredCount = questions.filter((question) => {
    const value = answers[String(question.id)];
    return value !== undefined && value !== null && value !== "";
  }).length;
  const progress = Math.round((answeredCount / questions.length) * 100);
  const isLastStep = stepIndex === diagnosisSteps.length - 1;

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, metrics, companyProfile }));
  }, [answers, metrics, companyProfile]);

  function setAnswer(questionId: number, value: string | number) {
    setAnswers((current) => ({ ...current, [String(questionId)]: value }));
  }

  function setMetric(key: keyof MetricInput, value: string) {
    setMetrics((current) => {
      const next = { ...current };
      if (value === "") {
        delete next[key];
      } else {
        next[key] = Number(value);
      }
      return next;
    });
  }

  function resetDraft() {
    setAnswers({});
    setMetrics({});
    setCompanyProfile({});
    setReportToken(null);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  async function submitLead() {
    setServerError(null);

    if (!lead.name || !lead.company || (!lead.email && !lead.phone)) {
      setServerError("请填写姓名、公司，并至少留下邮箱或手机号。");
      return;
    }

    if (!consent) {
      setServerError("请勾选隐私同意后获取完整报告。");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/diagnosis/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers,
          metrics,
          companyProfile,
          lead,
          consent,
          consentVersion,
          website,
        }),
      });
      const payload = (await response.json()) as { reportToken?: string; result?: DiagnosisResult; error?: string };

      if (!response.ok || !payload.reportToken) {
        throw new Error(payload.error || "提交失败，请稍后再试。");
      }

      setReportToken(payload.reportToken);
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "提交失败，请稍后再试。");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen px-4 py-4 md:px-8 md:py-6">
      <div className="mx-auto grid max-w-7xl gap-5 xl:grid-cols-[minmax(0,1fr)_420px]">
        <section className="rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm md:p-6">
          <header className="flex flex-col gap-4 border-b border-[var(--line)] pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--accent)]">CXODEX CEO Advisory</p>
              <h1 className="mt-2 text-2xl font-semibold md:text-4xl">企业经营健康诊断</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)]">
                面向 CEO 的免费经营问题体检。填写后先查看摘要，留资后解锁完整报告和 PDF 下载。
              </p>
            </div>
            <button
              type="button"
              onClick={resetDraft}
              className="inline-flex w-fit items-center gap-2 rounded-[8px] border border-[var(--line)] bg-white px-3 py-2 text-sm font-medium"
            >
              <RotateCcw size={16} />
              清空
            </button>
          </header>

          <div className="mt-5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">完成度 {progress}%</span>
              <span className="text-[var(--muted)]">
                {answeredCount}/{questions.length} 个问题
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e5ece8]">
              <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <nav className="no-print mt-5 grid grid-cols-2 gap-2 md:grid-cols-7">
            {diagnosisSteps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setStepIndex(index)}
                className={`rounded-[8px] border px-3 py-2 text-left text-sm ${
                  index === stepIndex
                    ? "border-[var(--accent)] bg-[#edf7f5] text-[var(--accent-strong)]"
                    : "border-[var(--line)] bg-white"
                }`}
              >
                {step.label}
              </button>
            ))}
          </nav>

          <section className="mt-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">{activeStep.label}</h2>
              <span className="rounded-full bg-white px-3 py-1 text-sm text-[var(--muted)]">
                第 {stepIndex + 1} / {diagnosisSteps.length} 步
              </span>
            </div>

            {activeStep.id === "profile" && (
              <CompanyProfileForm
                companyProfile={companyProfile}
                setCompanyProfile={setCompanyProfile}
                setAnswer={setAnswer}
                answer={answers["1"]}
              />
            )}

            <div className="grid gap-4">
              {activeQuestions
                .filter((question) => !(activeStep.id === "profile" && question.id === 1))
                .map((question) => (
                  <QuestionField key={question.id} question={question} value={answers[String(question.id)]} setAnswer={setAnswer} />
                ))}
            </div>

            {activeStep.id === "finance" && (
              <MetricPanel metrics={metrics} setMetric={setMetric} title="财务绩效模块数据表" />
            )}

            {activeStep.id === "operations" && (
              <MetricPanel metrics={metrics} setMetric={setMetric} title="管理效能模块数据收集表" />
            )}

            <div className="no-print mt-6 flex flex-wrap justify-between gap-3">
              <button
                type="button"
                disabled={stepIndex === 0}
                onClick={() => setStepIndex((index) => Math.max(0, index - 1))}
                className="inline-flex items-center gap-2 rounded-[8px] border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium disabled:opacity-50"
              >
                <ArrowLeft size={16} />
                上一步
              </button>
              <button
                type="button"
                onClick={() => (isLastStep ? document.getElementById("preview")?.scrollIntoView() : setStepIndex((index) => index + 1))}
                className="inline-flex items-center gap-2 rounded-[8px] bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
              >
                {isLastStep ? "查看摘要" : "下一步"}
                <ArrowRight size={16} />
              </button>
            </div>
          </section>
        </section>

        <aside id="preview" className="xl:sticky xl:top-6 xl:self-start">
          <div className="grid gap-4">
            <ReportView result={result} answers={answers} compact />

            <section className="rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <Lock size={18} className="text-[var(--accent)]" />
                <h2 className="font-semibold">解锁完整报告</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                完整报告包含每个维度的风险解释、Excel 原始结论、优先改善建议、答案摘要和 PDF 下载。
              </p>

              <div className="mt-4 grid gap-3">
                <input className="sr-only" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
                <TextInput label="姓名" value={lead.name} onChange={(value) => setLead((current) => ({ ...current, name: value }))} />
                <TextInput label="公司" value={lead.company} onChange={(value) => setLead((current) => ({ ...current, company: value }))} />
                <TextInput label="职务" value={lead.role ?? ""} onChange={(value) => setLead((current) => ({ ...current, role: value }))} />
                <TextInput label="邮箱" value={lead.email ?? ""} onChange={(value) => setLead((current) => ({ ...current, email: value }))} />
                <TextInput label="手机号" value={lead.phone ?? ""} onChange={(value) => setLead((current) => ({ ...current, phone: value }))} />
              </div>

              <label className="mt-4 flex items-start gap-3 text-sm leading-6">
                <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-1 h-4 w-4" />
                <span>我同意 CXODEX 保存本次企业诊断信息，用于报告生成和后续咨询沟通。</span>
              </label>

              {serverError && <p className="mt-3 rounded-[8px] bg-[#fff1f0] p-3 text-sm text-[var(--danger)]">{serverError}</p>}

              <button
                type="button"
                disabled={submitting}
                onClick={submitLead}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
              >
                {submitting ? <Check size={16} /> : <Send size={16} />}
                {submitting ? "正在生成" : "生成完整报告"}
              </button>

              {reportToken && (
                <div className="mt-4 grid gap-2 rounded-[8px] bg-[#edf7f5] p-3 text-sm">
                  <a className="inline-flex items-center gap-2 font-semibold text-[var(--accent-strong)]" href={`/diagnosis/report/${reportToken}`}>
                    <Download size={16} />
                    打开完整报告
                  </a>
                  <a className="inline-flex items-center gap-2 text-[var(--accent-strong)]" href="mailto:wang.alf@gmail.com?subject=CXODEX 企业诊断报告沟通">
                    <Mail size={16} />
                    联系 CXODEX
                  </a>
                  <a className="inline-flex items-center gap-2 text-[var(--accent-strong)]" href="https://www.cxodex.com/#contact">
                    <CalendarCheck size={16} />
                    预约一次沟通
                  </a>
                </div>
              )}
            </section>
          </div>
        </aside>
      </div>
    </main>
  );
}

function getInitialDraft() {
  const emptyDraft = {
    answers: {} as DiagnosisAnswers,
    metrics: {} as MetricInput,
    companyProfile: {} as CompanyProfile,
  };

  if (typeof window === "undefined") {
    return emptyDraft;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return emptyDraft;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<typeof emptyDraft>;
    return {
      answers: parsed.answers ?? {},
      metrics: parsed.metrics ?? {},
      companyProfile: parsed.companyProfile ?? {},
    };
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return emptyDraft;
  }
}

function CompanyProfileForm({
  companyProfile,
  setCompanyProfile,
  answer,
  setAnswer,
}: {
  companyProfile: CompanyProfile;
  setCompanyProfile: (value: CompanyProfile) => void;
  answer: unknown;
  setAnswer: (questionId: number, value: string | number) => void;
}) {
  function update(key: keyof CompanyProfile, value: string) {
    const next = { ...companyProfile, [key]: value };
    setCompanyProfile(next);
    if (key === "industry" || key === "mainProduct") {
      setAnswer(1, `行业：${next.industry ?? ""}；主要产品：${next.mainProduct ?? ""}`);
    }
  }

  return (
    <div className="mb-4 rounded-[8px] border border-[var(--line)] bg-white p-4">
      <div className="mb-4">
        <div className="text-sm font-semibold text-[var(--accent)]">Q1</div>
        <h3 className="mt-1 font-semibold">请给出您公司所在的产业类别，贵公司占 80% 销售收入的产品是什么？</h3>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <TextInput label="产业类别" value={companyProfile.industry ?? ""} onChange={(value) => update("industry", value)} />
        <TextInput label="占 80% 销售收入的产品" value={companyProfile.mainProduct ?? ""} onChange={(value) => update("mainProduct", value)} />
        <TextInput label="年销售规模" value={companyProfile.annualRevenue ?? ""} onChange={(value) => update("annualRevenue", value)} />
        <TextInput label="员工人数" value={companyProfile.employees ?? ""} onChange={(value) => update("employees", value)} />
      </div>
      <p className="mt-3 text-sm text-[var(--muted)]">当前记录：{answer ? String(answer) : "未填写"}</p>
    </div>
  );
}

function QuestionField({
  question,
  value,
  setAnswer,
}: {
  question: Question;
  value: unknown;
  setAnswer: (questionId: number, value: string | number) => void;
}) {
  return (
    <div className="rounded-[8px] border border-[var(--line)] bg-white p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-[var(--accent)]">Q{question.id}</div>
          <h3 className="mt-1 font-semibold leading-6">{question.title}</h3>
        </div>
        {question.required && <span className="rounded-full bg-[#edf7f5] px-2 py-1 text-xs text-[var(--accent-strong)]">必填</span>}
      </div>
      <p className="mt-3 whitespace-pre-line text-sm leading-6 text-[var(--muted)]">{question.help}</p>

      <div className="mt-4">
        {question.kind === "score" && (
          <div>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={typeof value === "number" ? value : 5}
              onChange={(event) => setAnswer(question.id, Number(event.target.value))}
              className="w-full accent-[var(--accent)]"
            />
            <div className="mt-2 flex items-center justify-between text-sm text-[var(--muted)]">
              <span>0 高风险</span>
              <span className="rounded-[8px] bg-[#edf7f5] px-3 py-1 font-semibold text-[var(--accent-strong)]">
                {typeof value === "number" ? value : 5} 分
              </span>
              <span>10 优秀</span>
            </div>
          </div>
        )}

        {question.kind === "number" && (
          <input
            type="number"
            value={typeof value === "number" ? value : ""}
            onChange={(event) => setAnswer(question.id, event.target.value === "" ? "" : Number(event.target.value))}
            className="w-full rounded-[8px] border border-[var(--line)] bg-white px-3 py-2 outline-none focus:border-[var(--accent)]"
            placeholder="请输入数字"
          />
        )}

        {question.kind === "text" && (
          <textarea
            value={typeof value === "string" ? value : ""}
            onChange={(event) => setAnswer(question.id, event.target.value)}
            className="min-h-28 w-full rounded-[8px] border border-[var(--line)] bg-white px-3 py-2 outline-none focus:border-[var(--accent)]"
            placeholder="请如实填写"
          />
        )}

        {question.kind === "choice" && (
          <div className="grid gap-2 md:grid-cols-3">
            {question.options?.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setAnswer(question.id, option)}
                className={`rounded-[8px] border px-3 py-2 text-left text-sm ${
                  value === option
                    ? "border-[var(--accent)] bg-[#edf7f5] text-[var(--accent-strong)]"
                    : "border-[var(--line)] bg-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MetricPanel({
  metrics,
  setMetric,
  title,
}: {
  metrics: MetricInput;
  setMetric: (key: keyof MetricInput, value: string) => void;
  title: string;
}) {
  return (
    <section className="mt-5 rounded-[8px] border border-[var(--line)] bg-[#f4f8f6] p-4">
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {metricFields.map((field) => (
          <label key={field.key} className="grid gap-1 text-sm">
            <span className="font-medium">{field.label}</span>
            <div className="flex overflow-hidden rounded-[8px] border border-[var(--line)] bg-white">
              <input
                type="number"
                value={metrics[field.key] ?? ""}
                onChange={(event) => setMetric(field.key, event.target.value)}
                className="min-w-0 flex-1 px-3 py-2 outline-none"
              />
              {field.suffix && <span className="border-l border-[var(--line)] px-3 py-2 text-[var(--muted)]">{field.suffix}</span>}
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}

function TextInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-[8px] border border-[var(--line)] bg-white px-3 py-2 outline-none focus:border-[var(--accent)]"
      />
    </label>
  );
}
