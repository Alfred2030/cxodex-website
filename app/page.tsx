import Link from "next/link";
import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import { home, services } from "../content/site";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={home.eyebrow}
        title={home.title}
        subtitle={home.subtitle}
        problemsTitle={home.problemsTitle}
        problems={home.problems}
        bookingTitle={home.bookingTitle}
        bookingBody={home.bookingBody}
        primaryLabel={home.primaryCta}
        secondaryLabel={home.secondaryCta}
      />
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:py-10">
          <div>
            <p className="eyebrow">Free Diagnosis</p>
            <h2 className="mt-3 text-2xl font-semibold text-neutral-950 sm:text-3xl">免费在线经营健康诊断</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-600">
              用 5-8 分钟完成企业经营自测，获得围绕增长、财务、运营、组织和风险的初步诊断报告。
            </p>
          </div>
          <Link href="/diagnosis" className="button-dark w-full justify-center sm:w-auto">
            开始免费诊断
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <div className="metric-grid border-y border-neutral-200">
            {home.proof.map((item) => (
              <div key={item.label} className="border-neutral-200 py-6 pr-5 lg:border-r">
                <strong className="block text-3xl font-semibold text-neutral-950">{item.value}</strong>
                <span className="mt-2 block text-sm leading-6 text-neutral-600">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Positioning</p>
              <h2 className="text-3xl font-semibold tracking-normal text-neutral-950 sm:text-4xl">{home.introTitle}</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-neutral-600">{home.introBody}</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {home.pillars.map((pillar) => (
                  <div key={pillar} className="border-l-2 border-blue-900 bg-neutral-50 px-5 py-4 text-sm font-semibold text-neutral-800">{pillar}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="text-3xl font-semibold text-neutral-950 sm:text-4xl">服务方向</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-600">每个模块都明确适合谁、处理什么核心问题，以及合作中会沉淀哪些可跟进成果。</p>
            </div>
            <Link href="/services" className="button-light self-start">查看服务细节</Link>
          </div>
          <div className="grid gap-px bg-neutral-200 lg:grid-cols-2 xl:grid-cols-3">
            {services.items.map((item, index) => (
              <ServiceCard
                key={item.title}
                index={index + 1}
                title={item.title}
                body={item.body}
                target={item.target}
                problem={item.problem}
                deliverables={item.deliverables}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
