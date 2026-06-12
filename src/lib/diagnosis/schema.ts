import { z } from "zod";

const answerValueSchema = z.union([z.string(), z.number(), z.null()]);

export const metricInputSchema = z.object({
  receivables: z.number().optional(),
  payables: z.number().optional(),
  inventory: z.number().optional(),
  netCashFlow: z.number().optional(),
  revenueLastYear: z.number().optional(),
  revenueThisYear: z.number().optional(),
  netProfitLastYear: z.number().optional(),
  netProfitThisYear: z.number().optional(),
  managementExpense: z.number().optional(),
  manufacturingExpense: z.number().optional(),
  grossMarginPct: z.number().optional(),
  revenuePerEmployee: z.number().optional(),
  breakEvenPoint: z.number().optional(),
  onTimeDeliveryPct: z.number().optional(),
  capacityUtilizationPct: z.number().optional(),
  oeePct: z.number().optional(),
  inventoryTurnover: z.number().optional(),
  variableCostPct: z.number().optional(),
});

export const companyProfileSchema = z.object({
  industry: z.string().max(120).optional(),
  mainProduct: z.string().max(160).optional(),
  annualRevenue: z.string().max(80).optional(),
  employees: z.string().max(80).optional(),
});

export const previewRequestSchema = z.object({
  answers: z.record(answerValueSchema),
  metrics: metricInputSchema.default({}),
  companyProfile: companyProfileSchema.default({}),
});

export const leadInfoSchema = z
  .object({
    name: z.string().trim().min(1).max(80),
    company: z.string().trim().min(1).max(120),
    email: z.string().trim().email().optional().or(z.literal("")),
    phone: z.string().trim().min(6).max(40).optional().or(z.literal("")),
    role: z.string().trim().max(80).optional(),
  })
  .refine((lead) => Boolean(lead.email || lead.phone), {
    message: "请至少填写邮箱或手机号。",
    path: ["email"],
  });

export const submitRequestSchema = previewRequestSchema.extend({
  lead: leadInfoSchema,
  consent: z.literal(true),
  consentVersion: z.string().default("2026-06-11"),
  website: z.string().max(0).optional(),
});
