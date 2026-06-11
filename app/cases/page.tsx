import { CaseCard } from "../../components/CaseCard";
import { cases } from "../../content/cases";

export const metadata = { title: "匿名案例场景" };

export default function CasesPage() {
  return (
    <>
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Cases</p>
          <h1 className="max-w-5xl text-4xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">匿名案例场景</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">以下为匿名化场景描述，用于说明典型咨询议题，不代表具体客户名单或可承诺结果。</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner grid gap-6">
          {cases.map((item, index) => (
            <CaseCard key={item.title} index={index + 1} title={item.title} context={item.context} focus={item.focus} />
          ))}
        </div>
      </section>
    </>
  );
}
