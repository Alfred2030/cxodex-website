import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { evaluateDiagnosis } from "@/lib/diagnosis/engine";
import { submitRequestSchema } from "@/lib/diagnosis/schema";
import { notifyLeadSubmission } from "@/lib/server/email";
import { isRateLimited } from "@/lib/server/rate-limit";
import { saveSubmission } from "@/lib/server/store";

export async function POST(request: NextRequest) {
  if (isRateLimited(request)) {
    return NextResponse.json({ error: "请求过于频繁，请稍后再试。" }, { status: 429 });
  }

  const body = await request.json();
  const parsed = submitRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "提交信息不完整。", details: parsed.error.flatten() }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ error: "提交被拦截。" }, { status: 400 });
  }

  const result = evaluateDiagnosis(parsed.data.answers, parsed.data.metrics);
  const reportToken = crypto.randomBytes(24).toString("base64url");
  const record = {
    lead: parsed.data.lead,
    companyProfile: parsed.data.companyProfile,
    answers: parsed.data.answers,
    metrics: parsed.data.metrics,
    result,
    reportToken,
    consentVersion: parsed.data.consentVersion,
    createdAt: new Date().toISOString(),
  };

  await saveSubmission(record);

  try {
    await notifyLeadSubmission(record);
  } catch (error) {
    console.error("Failed to send diagnosis lead notification", error);
  }

  return NextResponse.json({ reportToken, result });
}
