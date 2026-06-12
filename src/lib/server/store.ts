import fs from "node:fs/promises";
import path from "node:path";
import type { Sql } from "postgres";
import type { DiagnosisAnswers, DiagnosisResult, LeadInfo, MetricInput, CompanyProfile } from "@/lib/diagnosis/types";

export type SubmissionRecord = {
  lead: LeadInfo;
  companyProfile: CompanyProfile;
  answers: DiagnosisAnswers;
  metrics: MetricInput;
  result: DiagnosisResult;
  reportToken: string;
  consentVersion: string;
  createdAt: string;
};

let sqlClient: Sql | null = null;

async function getSql() {
  if (!process.env.DATABASE_URL) {
    return null;
  }

  if (!sqlClient) {
    const postgres = (await import("postgres")).default;
    sqlClient = postgres(process.env.DATABASE_URL, { ssl: "require" });
  }

  return sqlClient;
}

export async function saveSubmission(record: SubmissionRecord) {
  const sql = await getSql();
  if (sql) {
    await sql`
      insert into diagnosis_submissions
        (lead, company_profile, answers, metrics, result, report_token, consent_version, created_at)
      values
        (${sql.json(record.lead)}, ${sql.json(record.companyProfile)}, ${sql.json(record.answers)},
         ${sql.json(record.metrics)}, ${sql.json(record.result)}, ${record.reportToken},
         ${record.consentVersion}, ${record.createdAt})
    `;
    return;
  }

  const file = await localStorePath();
  await fs.appendFile(file, `${JSON.stringify(record)}\n`, "utf8");
}

export async function findSubmissionByToken(reportToken: string) {
  const sql = await getSql();
  if (sql) {
    const rows = await sql`
      select lead, company_profile, answers, metrics, result, report_token, consent_version, created_at
      from diagnosis_submissions
      where report_token = ${reportToken}
      limit 1
    `;
    const row = rows[0];
    if (!row) return null;

    return {
      lead: row.lead,
      companyProfile: row.company_profile,
      answers: row.answers,
      metrics: row.metrics,
      result: row.result,
      reportToken: row.report_token,
      consentVersion: row.consent_version,
      createdAt: row.created_at,
    } satisfies SubmissionRecord;
  }

  try {
    const file = await localStorePath();
    const text = await fs.readFile(file, "utf8");
    for (const line of text.trim().split("\n").reverse()) {
      if (!line) continue;
      const parsed = JSON.parse(line) as SubmissionRecord;
      if (parsed.reportToken === reportToken) {
        return parsed;
      }
    }
  } catch {
    return null;
  }

  return null;
}

async function localStorePath() {
  const dir = path.join(process.cwd(), ".local");
  await fs.mkdir(dir, { recursive: true });
  return path.join(dir, "diagnosis-submissions.jsonl");
}
