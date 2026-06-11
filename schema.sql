create table if not exists diagnosis_submissions (
  id uuid primary key default gen_random_uuid(),
  lead jsonb not null,
  company_profile jsonb not null,
  answers jsonb not null,
  metrics jsonb not null,
  result jsonb not null,
  report_token text not null unique,
  consent_version text not null,
  created_at timestamptz not null default now()
);

create index if not exists diagnosis_submissions_created_at_idx
  on diagnosis_submissions (created_at desc);

create index if not exists diagnosis_submissions_report_token_idx
  on diagnosis_submissions (report_token);
