import { NextRequest } from "next/server";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 20;
const buckets = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwardedFor || request.headers.get("x-real-ip") || "local";
  const now = Date.now();
  const current = buckets.get(ip);

  if (!current || current.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > MAX_REQUESTS;
}
