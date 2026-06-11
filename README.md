# CXODEX 企业经营健康诊断 App

这是一个独立的 Next.js 企业诊断网页应用，计划部署到 `www.cxodex.com/diagnosis` 或独立子域名，用于 CEO 免费完成企业经营健康体检，并通过留资解锁完整报告。

## 快速入口

- App 主文档：[docs/APP文档.md](docs/APP文档.md)
- 运营使用手册：[docs/运营使用手册.md](docs/运营使用手册.md)
- 部署上线指南：[docs/部署上线指南.md](docs/部署上线指南.md)
- 技术维护说明：[docs/技术维护说明.md](docs/技术维护说明.md)
- 数据与隐私说明：[docs/数据与隐私说明.md](docs/数据与隐私说明.md)
- 数据库脚本：[supabase/schema.sql](supabase/schema.sql)

## 本地运行

```bash
npm install
npm run dev
```

打开：

```text
http://localhost:3000/diagnosis
```

## 验证

```bash
npm test
npm run build
npm audit --audit-level=moderate
```

## 生产环境变量

复制 `.env.example` 为 `.env.local` 或在部署平台中配置：

```bash
DATABASE_URL="postgresql://postgres:password@db.project.supabase.co:5432/postgres"
RESEND_API_KEY="re_..."
REPORT_FROM_EMAIL="CXODEX <diagnosis@cxodex.com>"
LEAD_NOTIFY_EMAIL="hello@cxodex.com"
NEXT_PUBLIC_SITE_URL="https://www.cxodex.com"
```
