import { notFound } from "next/navigation";
import { ReportPageClient } from "@/components/ReportPageClient";
import { findSubmissionByToken } from "@/lib/server/store";

export default async function ReportPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const record = await findSubmissionByToken(token);

  if (!record) {
    notFound();
  }

  return <ReportPageClient record={record} />;
}
