# CXODEX 企业经营健康诊断 App 文档

## 1. 产品定位

CXODEX 企业经营健康诊断 App 是放在 CXODEX 官网上的免费诊断工具，面向创始人、董事长、CEO、总经理和一号位经营者。

它的目标不是替代正式咨询，而是帮助用户快速识别企业在市场竞争力、战略与 KPI、财务现金流、运营效率、组织人才、增长质量和未来计划上的主要风险，并把高意向用户转化为咨询线索。

## 2. 核心用户流程

1. 用户打开 `/diagnosis`。
2. 用户分步骤填写企业诊断问卷。
3. 系统实时生成免费摘要预览，包括综合健康分、7 个维度得分、Top 风险和待复核项。
4. 用户填写姓名、公司、邮箱或手机号，并勾选隐私同意。
5. 系统生成完整报告链接。
6. 用户可打开完整报告、打印或保存为 PDF。
7. 系统将线索和诊断结果保存到数据库，并通过邮件通知 `hello@cxodex.com`。

## 3. 功能范围

已实现：

- 38 个企业诊断问题。
- 7 个诊断维度。
- 分步填写、进度显示、本地暂存。
- 0-10 分题的低/中/高风险判断。
- 数值题阈值判断，例如现金流为负、毛利率低、存货周转低、产能利用率低、审批层级过多。
- 对需要行业数据的问题标记为“待复核”，不伪造行业基准。
- 免费摘要预览。
- 留资解锁完整报告。
- 浏览器打印/PDF 下载。
- Supabase 数据库存储。
- Resend 邮件通知。
- 基础频率限制和 honeypot 防滥用。

第一版未包含：

- 用户账号系统。
- 后台管理系统。
- CRM 深度集成。
- 自动行业基准数据库。
- 多语言版本。

## 4. 页面结构

### `/diagnosis`

诊断填写页面。

主要区域：

- 左侧或主区域：分步问卷。
- 右侧或下方：实时摘要预览。
- 留资模块：姓名、公司、职务、邮箱、手机号、隐私同意。

### `/diagnosis/report/[token]`

完整报告页面。

主要内容：

- 综合健康分。
- 7 个维度评分。
- Top 3 风险。
- 需行业基准复核项。
- 每个维度的风险解释。
- Excel 原始结论。
- 改善建议。
- 用户答案摘要。
- PDF 下载按钮。
- 预约沟通和邮件联系入口。

## 5. API

### `POST /api/diagnosis/preview`

用途：生成免费摘要，不落库。

输入：

```json
{
  "answers": {},
  "metrics": {},
  "companyProfile": {}
}
```

输出：

```json
{
  "result": {
    "overallScore": 72,
    "riskLevel": "medium",
    "dimensions": [],
    "topRisks": [],
    "reviewItems": [],
    "generatedAt": "2026-06-11T00:00:00.000Z"
  }
}
```

### `POST /api/diagnosis/submit`

用途：提交留资，生成完整报告，写入数据库，发送邮件通知。

输入：

```json
{
  "answers": {},
  "metrics": {},
  "companyProfile": {},
  "lead": {
    "name": "张三",
    "company": "某制造企业",
    "email": "ceo@example.com",
    "phone": "",
    "role": "CEO"
  },
  "consent": true,
  "consentVersion": "2026-06-11",
  "website": ""
}
```

输出：

```json
{
  "reportToken": "secure-token",
  "result": {}
}
```

### `GET /api/diagnosis/report/[token]`

用途：读取完整报告数据。

输出：

```json
{
  "record": {
    "lead": {},
    "companyProfile": {},
    "answers": {},
    "metrics": {},
    "result": {},
    "reportToken": "secure-token",
    "consentVersion": "2026-06-11",
    "createdAt": "2026-06-11T00:00:00.000Z"
  }
}
```

## 6. 关键文件

- `src/components/DiagnosisApp.tsx`：诊断填写页面和留资交互。
- `src/components/ReportView.tsx`：报告展示组件。
- `src/components/ReportPageClient.tsx`：完整报告页操作按钮。
- `src/lib/diagnosis/questions.ts`：38 个问题、维度、步骤。
- `src/lib/diagnosis/engine.ts`：评分和风险判断引擎。
- `src/lib/diagnosis/schema.ts`：API 输入校验。
- `src/lib/server/store.ts`：数据库保存和读取。
- `src/lib/server/email.ts`：邮件通知。
- `supabase/schema.sql`：生产数据库表结构。

## 7. 成功标准

- CEO 用户可以在 10-20 分钟内完成诊断。
- 用户完成后能看到清晰的经营风险摘要。
- 留资后能打开完整报告并保存为 PDF。
- CXODEX 能收到线索邮件。
- 数据库中能保存用户信息和诊断结果。
