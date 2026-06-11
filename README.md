# CXODEX 企业经营健康诊断 App

独立 Next.js App Router 应用，用于部署到 CXODEX.com 的 `/diagnosis` 路径。第一版忠实数字化 Excel 中的 38 个企业诊断问题、财务/运营输入项、7 个输出维度和已有初步结论。

## 功能

- `/diagnosis`：分步中文问卷、进度条、本地暂存、免费摘要预览。
- 留资解锁完整报告：姓名、公司、邮箱/手机号、隐私同意、honeypot 防滥用。
- 完整报告：综合健康分、7 个维度评分、Top 3 风险、Excel 原始结论、改善建议、答案摘要、浏览器 PDF 下载。
- API：`POST /api/diagnosis/preview`、`POST /api/diagnosis/submit`、`GET /api/diagnosis/report/[token]`。
- Supabase Postgres 存储；Resend 邮件通知到 `hello@cxodex.com`。

## 本地运行

当前机器 PATH 里未安装 `node`/`npm`。安装 Node.js 后执行：

```bash
npm install
npm run dev
```

打开 `http://localhost:3000/diagnosis`。

## 环境变量

复制 `.env.example` 为 `.env.local` 并填写：

```bash
DATABASE_URL="postgresql://postgres:password@db.project.supabase.co:5432/postgres"
RESEND_API_KEY="re_..."
REPORT_FROM_EMAIL="CXODEX <diagnosis@cxodex.com>"
LEAD_NOTIFY_EMAIL="hello@cxodex.com"
NEXT_PUBLIC_SITE_URL="https://www.cxodex.com"
```

如果未配置 `DATABASE_URL`，本地开发会把提交写入 `.local/diagnosis-submissions.jsonl`。生产环境应配置 Supabase。

## 数据库

在 Supabase SQL editor 中执行 [supabase/schema.sql](supabase/schema.sql)。

## 测试

安装依赖后：

```bash
npm test
```

当前已用 Codex 捆绑 Node 直接验证核心诊断引擎：

```powershell
& 'C:\Users\alfwa\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --experimental-transform-types --loader ./tests/ts-extension-loader.mjs --test tests/*.test.ts
```
