"use client";

import { CalendarCheck, Download, Mail } from "lucide-react";
import { ReportView } from "@/components/ReportView";
import type { SubmissionRecord } from "@/lib/server/store";

export function ReportPageClient({ record }: { record: SubmissionRecord }) {
  return (
    <main className="min-h-screen px-4 py-5 md:px-8 md:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3 rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-3">
          <a className="text-sm font-semibold text-[var(--accent-strong)]" href="/diagnosis">
            CXODEX 诊断工具
          </a>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-[8px] border border-[var(--line)] bg-white px-3 py-2 text-sm font-medium"
            >
              <Download size={16} />
              下载 PDF
            </button>
            <a
              href="mailto:wang.alf@gmail.com?subject=CXODEX 企业诊断报告沟通"
              className="inline-flex items-center gap-2 rounded-[8px] border border-[var(--line)] bg-white px-3 py-2 text-sm font-medium"
            >
              <Mail size={16} />
              邮件联系
            </a>
            <a
              href="https://www.cxodex.com/#contact"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[var(--accent)] px-3 py-2 text-sm font-medium text-white"
            >
              <CalendarCheck size={16} />
              预约一次沟通
            </a>
          </div>
        </div>
        <ReportView result={record.result} answers={record.answers} lead={record.lead} />
      </div>
    </main>
  );
}
