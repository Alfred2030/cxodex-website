import Link from "next/link";

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  problemsTitle: string;
  problems: string[];
  bookingTitle: string;
  bookingBody: string;
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  problemsTitle,
  problems,
  bookingTitle,
  bookingBody,
  primaryHref = "/contact",
  secondaryHref = "/services",
  primaryLabel = "预约一次沟通",
  secondaryLabel = "查看服务方向"
}: HeroProps) {
  return (
    <section className="hero-photo border-b border-neutral-900 text-white">
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-end px-5 py-10 sm:px-8 sm:py-12 lg:py-16">
        <div className="grid w-full gap-10 lg:grid-cols-[1.08fr_0.72fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">{eyebrow}</p>
            <h1 className="max-w-5xl text-3xl font-semibold tracking-normal sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-200 sm:text-lg">{subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={primaryHref} className="button-dark border-white bg-white text-neutral-950 hover:border-blue-900 hover:bg-blue-900 hover:text-white">
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} className="button-light border-white/35 bg-transparent text-white hover:border-white hover:text-white">
                {secondaryLabel}
              </Link>
            </div>
          </div>
          <div className="grid gap-7 border-t border-white/25 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <h2 className="text-sm font-semibold tracking-[0.16em] text-blue-200">{problemsTitle}</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-neutral-100">
                {problems.map((problem) => (
                  <li key={problem} className="border-l border-white/35 pl-4">{problem}</li>
                ))}
              </ul>
            </div>
            <div className="border-t border-white/25 pt-6">
              <h2 className="text-sm font-semibold tracking-[0.16em] text-blue-200">{bookingTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-100">{bookingBody}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
