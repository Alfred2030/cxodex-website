import { contact, site } from "../../content/site";

export const metadata = { title: "联系方式" };

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Contact</p>
          <h1 className="max-w-5xl text-4xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">{contact.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">{contact.subtitle}</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">邮箱</p>
            <a className="text-2xl font-semibold text-neutral-950 hover:text-blue-900" href={`mailto:${site.email}`}>{site.email}</a>
            <p className="mt-8 max-w-md text-base leading-8 text-neutral-600">{contact.messageHint}</p>
          </div>
          <form className="grid gap-5 border border-neutral-200 bg-neutral-50 p-6 sm:p-8" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <h2 className="text-2xl font-semibold text-neutral-950">{contact.formTitle}</h2>
            <label className="grid gap-2"><span className="text-sm font-semibold text-neutral-700">姓名</span><input className="h-12 border border-neutral-300 bg-white px-4 text-base outline-none focus:border-blue-900" name="name" required /></label>
            <label className="grid gap-2"><span className="text-sm font-semibold text-neutral-700">公司</span><input className="h-12 border border-neutral-300 bg-white px-4 text-base outline-none focus:border-blue-900" name="company" /></label>
            <label className="grid gap-2"><span className="text-sm font-semibold text-neutral-700">邮箱</span><input className="h-12 border border-neutral-300 bg-white px-4 text-base outline-none focus:border-blue-900" name="email" type="email" required /></label>
            <label className="grid gap-2"><span className="text-sm font-semibold text-neutral-700">你希望讨论的经营议题</span><textarea className="min-h-36 resize-y border border-neutral-300 bg-white px-4 py-3 text-base outline-none focus:border-blue-900" name="message" /></label>
            <button className="button-dark justify-self-start" type="submit">发送咨询邮件</button>
          </form>
        </div>
      </section>
    </>
  );
}
