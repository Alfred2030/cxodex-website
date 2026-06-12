import { NextResponse } from "next/server";
import { findSubmissionByToken } from "@/lib/server/store";

export async function GET(_: Request, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const record = await findSubmissionByToken(token);

  if (!record) {
    return NextResponse.json({ error: "报告不存在或已失效。" }, { status: 404 });
  }

  return NextResponse.json({ record });
}
