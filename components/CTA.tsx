import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">Private Conversation</p>
          <h2 className="max-w-3xl text-2xl font-semibold leading-tight sm:text-4xl">从一次具体经营议题开始。</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-300">
            建议简要说明企业阶段、当前核心挑战、希望讨论的经营议题，以及是否需要 CEO 一对一陪跑或高管团队工作坊。
          </p>
        </div>
        <Link href="/contact" className="button-dark w-full border-white bg-white text-neutral-950 hover:border-blue-900 hover:bg-blue-900 hover:text-white sm:w-auto">
          预约沟通
        </Link>
      </div>
    </section>
  );
}
