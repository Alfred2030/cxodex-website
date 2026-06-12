import { NextRequest, NextResponse } from "next/server";
import { evaluateDiagnosis } from "@/lib/diagnosis/engine";
import { previewRequestSchema } from "@/lib/diagnosis/schema";
import { isRateLimited } from "@/lib/server/rate-limit";

export async function POST(request: NextRequest) {
  if (isRateLimited(request)) {
    return NextResponse.json({ error: "请求过于频繁，请稍后再试。" }, { status: 429 });
  }

  const body = await request.json();
  const parsed = previewRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "诊断数据格式不正确。", details: parsed.error.flatten() }, { status: 400 });
  }

  const result = evaluateDiagnosis(parsed.data.answers, parsed.data.metrics);
  return NextResponse.json({ result });
}
