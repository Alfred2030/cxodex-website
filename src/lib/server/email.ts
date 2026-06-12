import type { SubmissionRecord } from "./store";

type ResendLike = {
  emails: {
    send: (payload: {
      from: string;
      to: string;
      subject: string;
      text: string;
    }) => Promise<unknown>;
  };
};

let resendClient: ResendLike | null = null;

async function getResend() {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }

  if (!resendClient) {
    const { Resend } = await import("resend");
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }

  return resendClient;
}

export async function notifyLeadSubmission(record: SubmissionRecord) {
  const resend = await getResend();
  if (!resend) {
    return { skipped: true };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cxodex.com";
  const reportUrl = `${siteUrl.replace(/\/$/, "")}/diagnosis/report/${record.reportToken}`;

  await resend.emails.send({
    from: process.env.REPORT_FROM_EMAIL || "CXODEX <diagnosis@cxodex.com>",
    to: process.env.LEAD_NOTIFY_EMAIL || "wang.alf@gmail.com",
    subject: `新的企业诊断线索：${record.lead.company}`,
    text: [
      `姓名：${record.lead.name}`,
      `公司：${record.lead.company}`,
      `职务：${record.lead.role || "-"}`,
      `邮箱：${record.lead.email || "-"}`,
      `手机：${record.lead.phone || "-"}`,
      `总分：${record.result.overallScore}`,
      `Top 风险：${record.result.topRisks.map((risk) => risk.title).join("；") || "-"}`,
      `报告：${reportUrl}`,
    ].join("\n"),
  });

  return { skipped: false };
}
