import Image from "next/image";
import { about } from "../../content/site";

export const metadata = { title: "关于我" };

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="section-inner grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="max-w-5xl text-4xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">{about.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">{about.subtitle}</p>
          </div>
          <div className="w-full max-w-sm overflow-hidden border border-neutral-200 bg-neutral-100 lg:justify-self-end">
            <Image
              src="/wang-shuguang-avatar.jpg"
              alt="王曙光头像"
              width={1602}
              height={1921}
              className="aspect-[4/5] w-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner grid gap-10 lg:grid-cols-3">
          {about.sections.map((section) => (
            <article key={section.title} className="border-t border-neutral-950 pt-6">
              <h2 className="text-2xl font-semibold text-neutral-950">{section.title}</h2>
              <p className="mt-5 text-base leading-8 text-neutral-600">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="max-w-4xl text-2xl font-semibold leading-relaxed sm:text-3xl">{about.statement}</p>
        </div>
      </section>
    </>
  );
}
