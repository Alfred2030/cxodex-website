import Link from "next/link";
import Image from "next/image";
import { navigation, site } from "../content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden border border-neutral-200 bg-white">
            <Image src="/cxodex-logo.png" alt={`${site.brand} logo`} width={44} height={44} className="h-full w-full object-contain" priority />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-[0.95rem] font-semibold tracking-[0.22em] text-neutral-950">{site.brand}</span>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-neutral-500 sm:block">CEO Advisory</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-neutral-600 transition hover:text-neutral-950">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button-dark hidden lg:inline-flex">预约沟通</Link>
        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/contact" className="button-dark min-h-10 px-3 py-2 text-xs sm:px-4 sm:text-sm">预约</Link>
          <details className="group relative">
            <summary className="flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 border border-neutral-300" aria-label="打开导航菜单">
              <span className="h-px w-5 bg-neutral-950" />
              <span className="h-px w-5 bg-neutral-950" />
              <span className="h-px w-5 bg-neutral-950" />
            </summary>
            <div className="absolute right-0 mt-3 w-72 max-w-[calc(100vw-2.5rem)] border border-neutral-200 bg-white p-4 shadow-2xl shadow-neutral-950/10">
              <div className="grid gap-1">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href} className="px-3 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950">
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 border-t border-neutral-200 pt-4">
                <Link href="/contact" className="button-dark w-full">预约沟通</Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
