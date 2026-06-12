(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/diagnosis/questions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "diagnosisSteps",
    ()=>diagnosisSteps,
    "dimensionLabels",
    ()=>dimensionLabels,
    "questions",
    ()=>questions
]);
const dimensionLabels = {
    market: "市场竞争力",
    strategy: "战略与 KPI",
    finance: "财务现金流",
    operations: "运营效率",
    organization: "组织人才",
    growth: "增长质量",
    future: "未来计划"
};
const questions = [
    {
        id: 1,
        dimension: "market",
        kind: "text",
        title: "请给出您公司所在的产业类别，贵公司占 80% 销售收入的产品是什么？",
        help: "自由填写，用于后续行业和产品定位对比。",
        conclusion: "便于后续对比",
        required: true
    },
    {
        id: 2,
        dimension: "market",
        kind: "score",
        title: "对于同行的竞争对手，主要的护城河是什么？",
        help: "0-5 分表示竞争对手可能在一年内形成重要威胁；6-8 分表示有一定障碍但两年内可能形成竞争；9-10 分表示接近垄断。",
        conclusion: "0-5 分竞争力弱，超过 6 分竞争力强",
        required: true,
        threshold: {
            type: "score",
            highBelow: 6
        }
    },
    {
        id: 3,
        dimension: "market",
        kind: "score",
        title: "在您的工业领域，怎样来确定您的竞争力？",
        help: "9-10 分代表占市场顶部 25% 的竞争力且订单转化率大于 70%；6-8 分代表有一定市场竞争力；0-5 分代表碎片化市场且订单转化率低。",
        conclusion: "如果问题 2 和问题 3 都得 6 分以上，基本判断市场竞争力强",
        required: true,
        threshold: {
            type: "score",
            highBelow: 6
        }
    },
    {
        id: 4,
        dimension: "market",
        kind: "score",
        title: "客户如何评价你们的独特价值？",
        help: "9-10 分代表企业闻名并制定工业标准；6-8 分代表被行业广泛认可；0-5 分代表订单严重依赖市场和销售活动。",
        conclusion: "客户认可价值在 6 分以上可认定为著名企业，在行业有话语权",
        required: true,
        threshold: {
            type: "score",
            highBelow: 6
        }
    },
    {
        id: 5,
        dimension: "growth",
        kind: "score",
        title: "比较贵司综合年销售增长率在行业中的地位？",
        help: "8-10 分高于平均值；6-7 分和行业水平相同；0-5 分低于行业水平。",
        threshold: {
            type: "score",
            highBelow: 6
        }
    },
    {
        id: 6,
        dimension: "finance",
        kind: "score",
        title: "你们企业挣钱吗？运营产生正现金流？",
        help: "8-10 分盈利并产生运营净现金流；6-7 分盈利但不产生正净现金流；0-5 分亏损。",
        conclusion: "5 分以下的企业为亏损企业，需要进行改善和精益指导",
        required: true,
        threshold: {
            type: "score",
            highBelow: 5,
            mediumBelow: 8
        }
    },
    {
        id: 7,
        dimension: "strategy",
        kind: "score",
        title: "企业战略如何？",
        help: "8-10 分有书面正规战略并层层解码；6-7 分有战略但未层层落实；0-5 分战略没有被团队了解，缺少书面化和战略解码。",
        conclusion: "5 分以下，企业战略不清晰是企业失败的重要原因之一，需要进行战略咨询",
        required: true,
        threshold: {
            type: "score",
            highBelow: 6,
            mediumBelow: 8
        }
    },
    {
        id: 8,
        dimension: "strategy",
        kind: "score",
        title: "公司有明确的 KPI 或 OKR 吗？这些指标和公司战略紧密结合吗？",
        help: "9-10 分 KPI/OKR 清晰且每周讨论；7-8 分 KPI 影响团队行为；5-6 分团队知道但未指导行为；0-4 分团队不知道 KPI。",
        conclusion: "4 分以下的企业基本不可能是规范管理企业，需要进行 KPI 落地咨询",
        required: true,
        threshold: {
            type: "score",
            highBelow: 5,
            mediumBelow: 8
        }
    },
    {
        id: 9,
        dimension: "strategy",
        kind: "score",
        title: "公司有季度复盘吗？如何给你的企业打分？",
        help: "8-10 分每季度使用 KISS 方法复盘并形成行动计划；6-7 分每月运营会议讨论结果；0-5 分没有正式运营会议。",
        conclusion: "5 分以下企业被认为管理需要提高，需要进行复盘咨询",
        required: true,
        threshold: {
            type: "score",
            highBelow: 6,
            mediumBelow: 8
        }
    },
    {
        id: 10,
        dimension: "organization",
        kind: "score",
        title: "高层有没有对下层员工的职业发展规划，或者采取行动使团队发挥最大效能？",
        help: "9-10 分员工知道强弱项且有发展计划；6-8 分团队知道上级看法且有书面计划；0-5 分没有书面计划。",
        conclusion: "5 分以下的企业中层管理层不稳定",
        threshold: {
            type: "score",
            highBelow: 6
        }
    },
    {
        id: 11,
        dimension: "strategy",
        kind: "score",
        title: "KPI 是否可测量，并和公司具体目标挂钩？",
        help: "8-10 分每个人都知道今年三大目标，KPI 具体到日常管理；5-7 分部分实施；0-4 分基本没有。",
        conclusion: "7 分以下企业都有空间提升 KPI 的落地执行",
        threshold: {
            type: "score",
            highBelow: 5,
            mediumBelow: 8
        }
    },
    {
        id: 12,
        dimension: "finance",
        kind: "score",
        title: "你们公司每月按时关账，获得趋势分析报告，并且有详尽的财务分析吗？",
        help: "9-10 分财务团队强且数据可靠；7-8 分有财务报告但分析不深；4-6 分报表不准或不及时；0-3 分不能按时关账。",
        conclusion: "6 分以下的公司财务管理差，需要改善",
        threshold: {
            type: "score",
            highBelow: 6,
            mediumBelow: 8
        }
    },
    {
        id: 13,
        dimension: "finance",
        kind: "number",
        title: "毛利率是衡量企业的重要指标，你们的毛利率如何？",
        help: "请输入毛利率百分比。Excel 规则：9-10 大于 46%，8 为 31%-45%，6-7 为 21%-30%，4-5 为 11%-20%，0-3 为 0-10%。",
        conclusion: "3 分以下为不合格，需要改善毛利率，实施精益管理",
        threshold: {
            type: "lessThanHigh",
            value: 11
        }
    },
    {
        id: 14,
        dimension: "finance",
        kind: "number",
        title: "过去 12 个月平均水平，你们公司产生自由现金流吗（FCF）？",
        help: "自由现金流定义为运营活动产生的现金流减去资本投资支出。请输入 FCF 金额。",
        conclusion: "3 分以下企业现金流出现问题，需要限制投资，或者增加毛利，或者增加销售收入",
        threshold: {
            type: "negativeIsHigh"
        }
    },
    {
        id: 15,
        dimension: "operations",
        kind: "score",
        title: "销售团队可以独立自主地获得订单并按时完成交货吗？",
        help: "7-10 分销售获得足够订单且运营协作良好；4-6 分获得一定订单且大部分可交货；0-3 分销售和运营配合不好。",
        conclusion: "3 分以下需要采取行动，生产计划和销售计划脱节，内部管理层次太多，生产效率低下",
        threshold: {
            type: "score",
            highBelow: 4,
            mediumBelow: 7
        }
    },
    {
        id: 16,
        dimension: "organization",
        kind: "score",
        title: "企业有没有人才后备计划？",
        help: "9-10 分关键岗位都有后备计划；5-8 分有正式人才后备计划；0-4 分没有计划。",
        conclusion: "4 分以下企业对于关键岗位没有备选人才，会出现人才断层和运营中断风险",
        threshold: {
            type: "score",
            highBelow: 5,
            mediumBelow: 9
        }
    },
    {
        id: 17,
        dimension: "organization",
        kind: "score",
        title: "您的员工如何评价您的交流能力、远景目标和价值观沟通？",
        help: "9-10 分远景目标价值观清晰并用于高管考核；7-8 分清晰但缺乏一贯性；4-6 分不清晰；0-4 分什么也没有。",
        conclusion: "6 分以下企业没有清晰企业远景目标价值观，需要进行改善",
        threshold: {
            type: "score",
            highBelow: 6,
            mediumBelow: 8
        }
    },
    {
        id: 18,
        dimension: "growth",
        kind: "choice",
        title: "贵公司过去三年复合年增长率是多少？",
        help: "请选择增长区间。",
        options: [
            "大于 40%",
            "20%-30%",
            "小于 20%"
        ],
        conclusion: "小于 20% 说明三个问题：产品进入成熟期、竞争力下降、市场营销乏力",
        threshold: {
            type: "needsIndustryBenchmark"
        }
    },
    {
        id: 19,
        dimension: "growth",
        kind: "number",
        title: "贵公司滚动 12 个月营收相比去年增加或减少比例？",
        help: "请输入增长率百分比，减少请输入负数。",
        conclusion: "如果减少超过 10% 说明企业增长乏力或者有什么突发情况，需要调研",
        threshold: {
            type: "lessThanHigh",
            value: -10
        }
    },
    {
        id: 20,
        dimension: "finance",
        kind: "number",
        title: "贵公司滚动 12 个月毛利相比去年增加或减少比例？",
        help: "请输入毛利变化率百分比，减少请输入负数。",
        conclusion: "毛利如果出现减少，需要看看产品的结构或者固定成本",
        threshold: {
            type: "lessThanHigh",
            value: 0
        }
    },
    {
        id: 21,
        dimension: "finance",
        kind: "number",
        title: "贵公司滚动 12 个月净利润相比去年增加或减少比例？",
        help: "请输入净利润变化率百分比，减少请输入负数。",
        conclusion: "净利代表企业盈利能力和现金流增加能力",
        threshold: {
            type: "lessThanHigh",
            value: 0
        }
    },
    {
        id: 22,
        dimension: "finance",
        kind: "number",
        title: "贵公司滚动 12 个月资本投入相比去年增加或减少比例？",
        help: "请输入资本投入变化率百分比。",
        conclusion: "资本投入需要看项目是否有发展前景，或者产能扩展是否有销售增加来支撑",
        threshold: {
            type: "needsIndustryBenchmark"
        }
    },
    {
        id: 23,
        dimension: "finance",
        kind: "number",
        title: "贵公司可以获得的总资本是多少？",
        help: "总资本 = 贷款增加 - 每月总支出 + 净现金流。请输入金额。",
        conclusion: "出现负数或者贷款金额过大就亮红灯",
        threshold: {
            type: "negativeIsHigh"
        }
    },
    {
        id: 24,
        dimension: "finance",
        kind: "number",
        title: "过去 12 个月平均净现金流是多少？",
        help: "请输入平均净现金流金额。",
        conclusion: "出现负数亮红灯，企业现金短缺，需要减少支出",
        threshold: {
            type: "negativeIsHigh"
        }
    },
    {
        id: 25,
        dimension: "finance",
        kind: "number",
        title: "贵公司应收账款占销售收入的比例是多少？",
        help: "请输入百分比。Excel 规则：大于 100%、大于 50%、小于 50%。",
        conclusion: "大于 100% 说明滞销可能，风险增加",
        threshold: {
            type: "greaterThanHigh",
            value: 100
        }
    },
    {
        id: 26,
        dimension: "operations",
        kind: "number",
        title: "贵公司存货周转次数是多少？",
        help: "和同行业平均数据对比：8-10 分大于 6 次；6-8 分 4-6 次；0-6 分小于 4 次。",
        conclusion: "小于 4 次企业可能面临现金短缺、利润下降风险、存货坏账",
        threshold: {
            type: "lessThanMedium",
            high: 4,
            medium: 6
        }
    },
    {
        id: 27,
        dimension: "operations",
        kind: "number",
        title: "人均产值是多少？",
        help: "请输入万元/人。该指标需要和同行业数据对比。",
        conclusion: "低于 20 万/人说明机构臃肿，减人机会至少 20%",
        threshold: {
            type: "lessThanHigh",
            value: 20
        }
    },
    {
        id: 28,
        dimension: "operations",
        kind: "number",
        title: "产能利用率是多少？",
        help: "请输入实际产能利用率百分比。",
        conclusion: "利用率低于 50% 说明产能严重浪费，需要进行整合",
        threshold: {
            type: "lessThanHigh",
            value: 50
        }
    },
    {
        id: 29,
        dimension: "operations",
        kind: "number",
        title: "固定成本占销售额比例是多少？",
        help: "请输入百分比，该指标需要与同行业数据对比。",
        conclusion: "大于 40% 说明人浮于事",
        threshold: {
            type: "greaterThanHigh",
            value: 40
        }
    },
    {
        id: 30,
        dimension: "operations",
        kind: "number",
        title: "ERP 和 MES 管理系统实施情况？",
        help: "请输入实施覆盖百分比。",
        conclusion: "低于 50% 说明数据准确性有问题，生产计划管理会很差，经常出现断货",
        threshold: {
            type: "lessThanHigh",
            value: 50
        }
    },
    {
        id: 31,
        dimension: "operations",
        kind: "number",
        title: "公司整体产品质量合格率是多少，和行业对比什么水平？",
        help: "请输入质量合格率百分比。该题需要结合行业资料复核。",
        conclusion: "质量合格率低说明精益生产管理水平低下",
        threshold: {
            type: "needsIndustryBenchmark"
        }
    },
    {
        id: 32,
        dimension: "operations",
        kind: "choice",
        title: "公司有质量过程控制体系吗？SPC 控制或者其他防呆措施？",
        help: "请选择质量过程控制覆盖情况。",
        options: [
            "有",
            "部分有",
            "没有"
        ],
        conclusion: "没有代表质量可靠性差，完全靠人为点检或者全检，有非常大改善空间"
    },
    {
        id: 33,
        dimension: "operations",
        kind: "score",
        title: "公司有没有精益管理组织？每天是否有精益活动？",
        help: "8-10 分有组织且每天或每周活动；6-8 分有组织每月活动；4-6 分无组织偶尔活动或培训；0-4 分无组织无培训无活动。",
        conclusion: "4 分以下有非常多的机会，质量不稳定，批量退货，不能按时交货",
        threshold: {
            type: "score",
            highBelow: 4,
            mediumBelow: 7
        }
    },
    {
        id: 34,
        dimension: "operations",
        kind: "number",
        title: "公司有几级审批？OA 系统完整审批流程几天？",
        help: "请输入审批层级。超过 3 级审批为流程臃肿；OA 审批流超过 24 小时说明流程不畅通。",
        conclusion: "超过 3 级审批为流程臃肿，OA 审批流超过 24 小时，说明流程不畅通",
        threshold: {
            type: "approvalFlow"
        }
    },
    {
        id: 35,
        dimension: "future",
        kind: "choice",
        title: "公司未来 5 年打算？",
        help: "通过这个信息了解公司未来打算。",
        options: [
            "上市",
            "出售",
            "稳定生存",
            "存活"
        ],
        conclusion: "通过这个信息可以了解公司未来打算"
    },
    {
        id: 36,
        dimension: "future",
        kind: "text",
        title: "公司 AI 计划，目前使用 AI 状况？",
        help: "如实填写当前 AI 使用场景、工具、团队准备和下一步计划。"
    },
    {
        id: 37,
        dimension: "future",
        kind: "choice",
        title: "公司聘请外部顾问计划？",
        help: "请选择是否有外部顾问计划。",
        options: [
            "有",
            "没有"
        ]
    },
    {
        id: 38,
        dimension: "organization",
        kind: "text",
        title: "公司之前有没有大规模系统培训？",
        help: "如实填写培训主题、对象、周期和效果。"
    }
];
const diagnosisSteps = [
    {
        id: "profile",
        label: "公司画像",
        questionIds: [
            1
        ]
    },
    {
        id: "market",
        label: "市场竞争力",
        questionIds: [
            2,
            3,
            4,
            5
        ]
    },
    {
        id: "strategy",
        label: "战略与 KPI",
        questionIds: [
            7,
            8,
            9,
            11
        ]
    },
    {
        id: "finance",
        label: "财务现金流",
        questionIds: [
            6,
            12,
            13,
            14,
            19,
            20,
            21,
            22,
            23,
            24,
            25
        ]
    },
    {
        id: "operations",
        label: "运营效率",
        questionIds: [
            15,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34
        ]
    },
    {
        id: "organization",
        label: "组织人才",
        questionIds: [
            10,
            16,
            17,
            38
        ]
    },
    {
        id: "future",
        label: "未来计划",
        questionIds: [
            18,
            35,
            36,
            37
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ReportView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportView",
    ()=>ReportView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleGauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-gauge.js [app-client] (ecmascript) <export default as CircleGauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/diagnosis/questions.ts [app-client] (ecmascript)");
;
;
;
const riskLabel = {
    low: "健康",
    medium: "需关注",
    high: "高风险",
    review: "待复核"
};
function ReportView({ result, answers, lead, compact = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "print-report rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "grid gap-4 border-b border-[var(--line)] pb-5 md:grid-cols-[1fr_auto]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-[var(--accent)]",
                                children: "CXODEX 企业经营健康诊断"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReportView.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-2 text-2xl font-semibold md:text-4xl",
                                children: lead?.company ? `${lead.company} 诊断报告` : "免费诊断预览"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReportView.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)]",
                                children: "评分基于当前问卷和财务/运营输入生成，适合作为 CEO 初步识别经营风险和咨询沟通议题的起点。"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReportView.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReportView.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[8px] border border-[var(--line)] bg-white p-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-5xl font-semibold text-[var(--accent-strong)]",
                                children: result.overallScore
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReportView.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-sm text-[var(--muted)]",
                                children: "综合健康分"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReportView.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm font-medium",
                                children: riskLabel[result.riskLevel]
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReportView.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReportView.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReportView.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-6 grid gap-3 md:grid-cols-7",
                children: result.dimensions.map((dimension)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[8px] border border-[var(--line)] bg-white p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-2 text-sm font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: dimension.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReportView.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: dimension.percent
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReportView.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReportView.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 h-2 overflow-hidden rounded-full bg-[#e5ece8]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-full bg-[var(--accent)]",
                                    style: {
                                        width: `${dimension.percent}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReportView.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReportView.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, dimension.id, true, {
                        fileName: "[project]/src/components/ReportView.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ReportView.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-8 grid gap-4 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryPanel, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReportView.tsx",
                            lineNumber: 55,
                            columnNumber: 17
                        }, this),
                        title: "Top 风险",
                        lines: result.topRisks.map((risk)=>risk.title),
                        empty: "当前没有高优先级风险。"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReportView.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryPanel, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReportView.tsx",
                            lineNumber: 61,
                            columnNumber: 17
                        }, this),
                        title: "需复核项",
                        lines: result.reviewItems.map((risk)=>risk.title),
                        empty: "暂无需行业基准复核项。"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReportView.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryPanel, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReportView.tsx",
                            lineNumber: 67,
                            columnNumber: 17
                        }, this),
                        title: "建议下一步",
                        lines: result.topRisks.map((risk)=>risk.recommendation),
                        empty: "保持现有复盘节奏，持续跟踪关键指标。"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReportView.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReportView.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleGauge$3e$__["CircleGauge"], {
                                        size: 20,
                                        className: "text-[var(--accent)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReportView.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold",
                                        children: "维度诊断"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReportView.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReportView.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4",
                                children: result.dimensions.map((dimension)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[8px] border border-[var(--line)] bg-white p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold",
                                                        children: dimension.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ReportView.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-[#edf7f5] px-3 py-1 text-sm text-[var(--accent-strong)]",
                                                        children: [
                                                            dimension.percent,
                                                            " / 100"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ReportView.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ReportView.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this),
                                            dimension.findings.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 grid gap-3",
                                                children: dimension.findings.map((finding, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[8px] bg-[#f4f8f6] p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-semibold",
                                                                        children: [
                                                                            "Q",
                                                                            finding.questionId
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ReportView.tsx",
                                                                        lineNumber: 95,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full border border-[var(--line)] px-2 py-0.5 text-xs",
                                                                        children: riskLabel[finding.level]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ReportView.tsx",
                                                                        lineNumber: 96,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ReportView.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-sm font-medium",
                                                                children: finding.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ReportView.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-sm leading-6 text-[var(--muted)]",
                                                                children: finding.message
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ReportView.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 27
                                                            }, this),
                                                            finding.sourceConclusion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-sm leading-6 text-[var(--muted)]",
                                                                children: [
                                                                    "Excel 结论：",
                                                                    finding.sourceConclusion
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ReportView.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-sm leading-6",
                                                                children: [
                                                                    "建议：",
                                                                    finding.recommendation
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ReportView.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, `${finding.questionId}-${index}`, true, {
                                                        fileName: "[project]/src/components/ReportView.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ReportView.tsx",
                                                lineNumber: 91,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm text-[var(--muted)]",
                                                children: "当前输入未触发该维度的明显预警。"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ReportView.tsx",
                                                lineNumber: 112,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, dimension.id, true, {
                                        fileName: "[project]/src/components/ReportView.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReportView.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReportView.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: "答案摘要"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReportView.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid gap-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questions"].map((question)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-2 rounded-[8px] border border-[var(--line)] bg-white p-3 md:grid-cols-[80px_1fr_220px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold text-[var(--accent)]",
                                                children: [
                                                    "Q",
                                                    question.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ReportView.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm",
                                                children: question.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ReportView.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "break-words text-sm text-[var(--muted)]",
                                                children: answers[String(question.id)] === undefined || answers[String(question.id)] === "" ? "未填写" : String(answers[String(question.id)])
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ReportView.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, question.id, true, {
                                        fileName: "[project]/src/components/ReportView.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReportView.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReportView.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReportView.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = ReportView;
function SummaryPanel({ icon, title, lines, empty }) {
    const visibleLines = lines.filter(Boolean).slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-[8px] border border-[var(--line)] bg-white p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 font-semibold",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--accent)]",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReportView.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReportView.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]",
                children: visibleLines.length > 0 ? visibleLines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: line
                    }, line, false, {
                        fileName: "[project]/src/components/ReportView.tsx",
                        lineNumber: 161,
                        columnNumber: 63
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: empty
                }, void 0, false, {
                    fileName: "[project]/src/components/ReportView.tsx",
                    lineNumber: 161,
                    columnNumber: 93
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ReportView.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReportView.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_c1 = SummaryPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReportView");
__turbopack_context__.k.register(_c1, "SummaryPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/diagnosis/engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluateDiagnosis",
    ()=>evaluateDiagnosis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/diagnosis/questions.ts [app-client] (ecmascript)");
;
const DIMENSION_IDS = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dimensionLabels"]);
function evaluateDiagnosis(answers, metrics = {}) {
    const findings = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questions"].map((question)=>evaluateQuestion(question, answers[String(question.id)])).filter((finding)=>Boolean(finding));
    const metricFindings = evaluateMetrics(metrics);
    const allFindings = [
        ...findings,
        ...metricFindings
    ];
    const dimensions = DIMENSION_IDS.map((id)=>buildDimensionScore(id, allFindings, answers));
    const overallScore = Math.round(dimensions.reduce((sum, dimension)=>sum + dimension.percent, 0) / dimensions.length);
    const topRisks = allFindings.filter((finding)=>finding.level === "high" || finding.level === "medium").sort((a, b)=>b.scoreImpact - a.scoreImpact).slice(0, 3);
    const reviewItems = allFindings.filter((finding)=>finding.level === "review");
    return {
        overallScore,
        riskLevel: riskFromPercent(overallScore),
        dimensions,
        topRisks,
        reviewItems,
        generatedAt: new Date().toISOString()
    };
}
function evaluateQuestion(question, value) {
    if (value === null || value === undefined || value === "") {
        return null;
    }
    if (question.kind === "choice") {
        const text = String(value);
        if (text.includes("没有") || text.includes("小于 20%")) {
            return makeFinding(question, "high", question.conclusion ?? "该项显示存在明显改善空间。");
        }
        if (text.includes("部分") || text.includes("稳定生存") || text.includes("存活")) {
            return makeFinding(question, "medium", question.conclusion ?? "该项需要进一步拆解。");
        }
        return null;
    }
    if (!question.threshold) {
        return null;
    }
    if (question.threshold.type === "needsIndustryBenchmark") {
        return makeFinding(question, "review", "该项需要结合行业数据复核，当前报告不伪造行业基准。");
    }
    const numberValue = Number(value);
    if (!Number.isFinite(numberValue)) {
        return null;
    }
    switch(question.threshold.type){
        case "score":
            {
                if (numberValue < question.threshold.highBelow) {
                    return makeFinding(question, "high", question.conclusion ?? "该项评分偏低，需要优先改善。");
                }
                if (question.threshold.mediumBelow && numberValue < question.threshold.mediumBelow) {
                    return makeFinding(question, "medium", question.conclusion ?? "该项仍有提升空间。");
                }
                return null;
            }
        case "negativeIsHigh":
            return numberValue < 0 ? makeFinding(question, "high", question.conclusion ?? "该项为负值，需尽快复核。") : null;
        case "greaterThanHigh":
            return numberValue > question.threshold.value ? makeFinding(question, "high", question.conclusion ?? "该指标高于预警阈值。") : null;
        case "lessThanHigh":
            return numberValue < question.threshold.value ? makeFinding(question, "high", question.conclusion ?? "该指标低于预警阈值。") : null;
        case "lessThanMedium":
            if (numberValue < question.threshold.high) {
                return makeFinding(question, "high", question.conclusion ?? "该指标低于高风险阈值。");
            }
            if (numberValue < question.threshold.medium) {
                return makeFinding(question, "medium", question.conclusion ?? "该指标低于优秀水平。");
            }
            return null;
        case "approvalFlow":
            return numberValue > 3 ? makeFinding(question, "high", question.conclusion ?? "审批流程偏长。") : null;
        default:
            return null;
    }
}
function evaluateMetrics(metrics) {
    const metricRules = [
        {
            key: "netCashFlow",
            questionId: 24,
            dimension: "finance",
            title: "净现金流",
            evaluate: (value)=>value < 0 ? "high" : null,
            message: "净现金流为负，企业现金短缺风险上升。",
            recommendation: "优先限制非必要投资，复核回款、毛利、库存和固定支出。"
        },
        {
            key: "grossMarginPct",
            questionId: 13,
            dimension: "finance",
            title: "毛利率",
            evaluate: (value)=>value < 11 ? "high" : value < 21 ? "medium" : null,
            message: "毛利率低于健康区间，盈利质量承压。",
            recommendation: "拆解产品结构、价格、材料成本和制造费用，优先改善低毛利业务。"
        },
        {
            key: "inventoryTurnover",
            questionId: 26,
            dimension: "operations",
            title: "库存周转率",
            evaluate: (value)=>value < 4 ? "high" : value < 6 ? "medium" : null,
            message: "库存周转偏低，现金和存货跌价风险增加。",
            recommendation: "复核安全库存、呆滞料、预测准确率和生产计划节奏。"
        },
        {
            key: "capacityUtilizationPct",
            questionId: 28,
            dimension: "operations",
            title: "产能利用率",
            evaluate: (value)=>value < 50 ? "high" : value < 70 ? "medium" : null,
            message: "产能利用率偏低，固定成本吸收能力不足。",
            recommendation: "评估产线整合、班次安排、外协策略和销售订单结构。"
        },
        {
            key: "revenuePerEmployee",
            questionId: 27,
            dimension: "operations",
            title: "人均产值",
            evaluate: (value)=>value < 20 ? "high" : null,
            message: "人均产值低于 20 万/人，组织效率可能偏低。",
            recommendation: "复核组织层级、间接人员比例和关键流程自动化机会。"
        }
    ];
    return metricRules.flatMap((rule)=>{
        const rawValue = metrics[rule.key];
        if (rawValue === undefined || rawValue === null || !Number.isFinite(Number(rawValue))) {
            return [];
        }
        const level = rule.evaluate(Number(rawValue));
        if (!level) {
            return [];
        }
        return [
            {
                questionId: rule.questionId,
                dimension: rule.dimension,
                title: rule.title,
                level,
                scoreImpact: scoreImpact(level),
                message: rule.message,
                recommendation: rule.recommendation,
                sourceConclusion: rule.message
            }
        ];
    });
}
function buildDimensionScore(id, findings, answers) {
    const dimensionQuestions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questions"].filter((question)=>question.dimension === id);
    const scoreValues = dimensionQuestions.filter((question)=>question.kind === "score").map((question)=>Number(answers[String(question.id)])).filter(Number.isFinite);
    const basePercent = scoreValues.length > 0 ? Math.round(scoreValues.reduce((sum, value)=>sum + value, 0) / (scoreValues.length * 10) * 100) : 78;
    const dimensionFindings = findings.filter((finding)=>finding.dimension === id);
    const penalty = dimensionFindings.reduce((sum, finding)=>sum + finding.scoreImpact, 0);
    const percent = clamp(basePercent - penalty, 0, 100);
    return {
        id,
        label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dimensionLabels"][id],
        score: Math.round(percent / 10),
        maxScore: 10,
        percent,
        riskLevel: riskFromPercent(percent),
        findings: dimensionFindings
    };
}
function makeFinding(question, level, message) {
    return {
        questionId: question.id,
        dimension: question.dimension,
        title: question.title,
        level,
        scoreImpact: scoreImpact(level),
        message,
        recommendation: recommendationFor(level, question.dimension),
        sourceConclusion: question.conclusion
    };
}
function scoreImpact(level) {
    if (level === "high") return 18;
    if (level === "medium") return 9;
    if (level === "review") return 3;
    return 0;
}
function riskFromPercent(percent) {
    if (percent < 55) return "high";
    if (percent < 75) return "medium";
    return "low";
}
function recommendationFor(level, dimension) {
    if (level === "review") {
        return "补充行业基准、历史趋势或财务明细后再做最终判断。";
    }
    const map = {
        market: "先复核客户价值、竞争护城河和订单转化率，明确差异化来源。",
        strategy: "把年度目标拆成可测量 KPI，并建立周/月/季度复盘节奏。",
        finance: "优先看现金流、毛利、回款和固定支出，避免用收入增长掩盖盈利质量问题。",
        operations: "从交付、质量、库存、产能和审批流程中选 1-2 个瓶颈先做改善闭环。",
        organization: "明确关键岗位继任、管理者反馈和价值观沟通机制。",
        growth: "拆解增长来源，区分市场需求、价格、客户结构和销售体系问题。",
        future: "把未来 5 年意图转化为资源配置、人才和经营节奏选择。"
    };
    return map[dimension];
}
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DiagnosisApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiagnosisApp",
    ()=>DiagnosisApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-client] (ecmascript) <export default as CalendarCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReportView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReportView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/diagnosis/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/diagnosis/engine.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const STORAGE_KEY = "cxodex-diagnosis-draft-v1";
const consentVersion = "2026-06-11";
const metricFields = [
    {
        key: "revenueLastYear",
        label: "去年销售额",
        suffix: "千人民币"
    },
    {
        key: "revenueThisYear",
        label: "今年销售额（实际+预测）",
        suffix: "千人民币"
    },
    {
        key: "netProfitLastYear",
        label: "去年净利润",
        suffix: "千人民币"
    },
    {
        key: "netProfitThisYear",
        label: "今年净利润",
        suffix: "千人民币"
    },
    {
        key: "netCashFlow",
        label: "净现金流",
        suffix: "千人民币"
    },
    {
        key: "grossMarginPct",
        label: "毛利率",
        suffix: "%"
    },
    {
        key: "revenuePerEmployee",
        label: "人均产值",
        suffix: "万元/人"
    },
    {
        key: "capacityUtilizationPct",
        label: "产能利用率",
        suffix: "%"
    },
    {
        key: "inventoryTurnover",
        label: "库存周转率",
        suffix: "次"
    },
    {
        key: "onTimeDeliveryPct",
        label: "订单准交率",
        suffix: "%"
    },
    {
        key: "oeePct",
        label: "OEE 全流程效率",
        suffix: "%"
    },
    {
        key: "variableCostPct",
        label: "变动成本率",
        suffix: "%"
    }
];
function DiagnosisApp() {
    _s();
    const [stepIndex, setStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [metrics, setMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [companyProfile, setCompanyProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [lead, setLead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        company: "",
        email: "",
        phone: "",
        role: ""
    });
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [website, setWebsite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [reportToken, setReportToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [serverError, setServerError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DiagnosisApp.useMemo[result]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluateDiagnosis"])(answers, metrics)
    }["DiagnosisApp.useMemo[result]"], [
        answers,
        metrics
    ]);
    const activeStep = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diagnosisSteps"][stepIndex];
    const activeQuestions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questions"].filter((question)=>activeStep.questionIds.includes(question.id));
    const answeredCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questions"].filter((question)=>{
        const value = answers[String(question.id)];
        return value !== undefined && value !== null && value !== "";
    }).length;
    const progress = Math.round(answeredCount / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questions"].length * 100);
    const isLastStep = stepIndex === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diagnosisSteps"].length - 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiagnosisApp.useEffect": ()=>{
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            try {
                const parsed = JSON.parse(raw);
                setAnswers(parsed.answers ?? {});
                setMetrics(parsed.metrics ?? {});
                setCompanyProfile(parsed.companyProfile ?? {});
            } catch  {
                window.localStorage.removeItem(STORAGE_KEY);
            }
        }
    }["DiagnosisApp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiagnosisApp.useEffect": ()=>{
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
                answers,
                metrics,
                companyProfile
            }));
        }
    }["DiagnosisApp.useEffect"], [
        answers,
        metrics,
        companyProfile
    ]);
    function setAnswer(questionId, value) {
        setAnswers((current)=>({
                ...current,
                [String(questionId)]: value
            }));
    }
    function setMetric(key, value) {
        setMetrics((current)=>{
            const next = {
                ...current
            };
            if (value === "") {
                delete next[key];
            } else {
                next[key] = Number(value);
            }
            return next;
        });
    }
    function resetDraft() {
        setAnswers({});
        setMetrics({});
        setCompanyProfile({});
        setReportToken(null);
        window.localStorage.removeItem(STORAGE_KEY);
    }
    async function submitLead() {
        setServerError(null);
        if (!lead.name || !lead.company || !lead.email && !lead.phone) {
            setServerError("请填写姓名、公司，并至少留下邮箱或手机号。");
            return;
        }
        if (!consent) {
            setServerError("请勾选隐私同意后获取完整报告。");
            return;
        }
        setSubmitting(true);
        try {
            const response = await fetch("/api/diagnosis/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    answers,
                    metrics,
                    companyProfile,
                    lead,
                    consent,
                    consentVersion,
                    website
                })
            });
            const payload = await response.json();
            if (!response.ok || !payload.reportToken) {
                throw new Error(payload.error || "提交失败，请稍后再试。");
            }
            setReportToken(payload.reportToken);
        } catch (error) {
            setServerError(error instanceof Error ? error.message : "提交失败，请稍后再试。");
        } finally{
            setSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen px-4 py-4 md:px-8 md:py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto grid max-w-7xl gap-5 xl:grid-cols-[minmax(0,1fr)_420px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm md:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "flex flex-col gap-4 border-b border-[var(--line)] pb-5 md:flex-row md:items-center md:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-[var(--accent)]",
                                            children: "CXODEX CEO Advisory"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-2 text-2xl font-semibold md:text-4xl",
                                            children: "企业经营健康诊断"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)]",
                                            children: "面向 CEO 的免费经营问题体检。填写后先查看摘要，留资后解锁完整报告和 PDF 下载。"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: resetDraft,
                                    className: "inline-flex w-fit items-center gap-2 rounded-[8px] border border-[var(--line)] bg-white px-3 py-2 text-sm font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        "清空"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: [
                                                "完成度 ",
                                                progress,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--muted)]",
                                            children: [
                                                answeredCount,
                                                "/",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questions"].length,
                                                " 个问题"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 h-2 overflow-hidden rounded-full bg-[#e5ece8]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full rounded-full bg-[var(--accent)]",
                                        style: {
                                            width: `${progress}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "no-print mt-5 grid grid-cols-2 gap-2 md:grid-cols-7",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diagnosisSteps"].map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setStepIndex(index),
                                    className: `rounded-[8px] border px-3 py-2 text-left text-sm ${index === stepIndex ? "border-[var(--accent)] bg-[#edf7f5] text-[var(--accent-strong)]" : "border-[var(--line)] bg-white"}`,
                                    children: step.label
                                }, step.id, false, {
                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold",
                                            children: activeStep.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-white px-3 py-1 text-sm text-[var(--muted)]",
                                            children: [
                                                "第 ",
                                                stepIndex + 1,
                                                " / ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$diagnosis$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diagnosisSteps"].length,
                                                " 步"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                activeStep.id === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompanyProfileForm, {
                                    companyProfile: companyProfile,
                                    setCompanyProfile: setCompanyProfile,
                                    setAnswer: setAnswer,
                                    answer: answers["1"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4",
                                    children: activeQuestions.filter((question)=>!(activeStep.id === "profile" && question.id === 1)).map((question)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestionField, {
                                            question: question,
                                            value: answers[String(question.id)],
                                            setAnswer: setAnswer
                                        }, question.id, false, {
                                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                activeStep.id === "finance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricPanel, {
                                    metrics: metrics,
                                    setMetric: setMetric,
                                    title: "财务绩效模块数据表"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this),
                                activeStep.id === "operations" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricPanel, {
                                    metrics: metrics,
                                    setMetric: setMetric,
                                    title: "管理效能模块数据收集表"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "no-print mt-6 flex flex-wrap justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: stepIndex === 0,
                                            onClick: ()=>setStepIndex((index)=>Math.max(0, index - 1)),
                                            className: "inline-flex items-center gap-2 rounded-[8px] border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium disabled:opacity-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this),
                                                "上一步"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>isLastStep ? document.getElementById("preview")?.scrollIntoView() : setStepIndex((index)=>index + 1),
                                            className: "inline-flex items-center gap-2 rounded-[8px] bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white",
                                            children: [
                                                isLastStep ? "查看摘要" : "下一步",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DiagnosisApp.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    id: "preview",
                    className: "xl:sticky xl:top-6 xl:self-start",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReportView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReportView"], {
                                result: result,
                                answers: answers,
                                compact: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                size: 18,
                                                className: "text-[var(--accent)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-semibold",
                                                children: "解锁完整报告"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm leading-6 text-[var(--muted)]",
                                        children: "完整报告包含每个维度的风险解释、Excel 原始结论、优先改善建议、答案摘要和 PDF 下载。"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "sr-only",
                                                tabIndex: -1,
                                                autoComplete: "off",
                                                value: website,
                                                onChange: (event)=>setWebsite(event.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                label: "姓名",
                                                value: lead.name,
                                                onChange: (value)=>setLead((current)=>({
                                                            ...current,
                                                            name: value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                label: "公司",
                                                value: lead.company,
                                                onChange: (value)=>setLead((current)=>({
                                                            ...current,
                                                            company: value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                label: "职务",
                                                value: lead.role ?? "",
                                                onChange: (value)=>setLead((current)=>({
                                                            ...current,
                                                            role: value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                label: "邮箱",
                                                value: lead.email ?? "",
                                                onChange: (value)=>setLead((current)=>({
                                                            ...current,
                                                            email: value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                                                label: "手机号",
                                                value: lead.phone ?? "",
                                                onChange: (value)=>setLead((current)=>({
                                                            ...current,
                                                            phone: value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "mt-4 flex items-start gap-3 text-sm leading-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: consent,
                                                onChange: (event)=>setConsent(event.target.checked),
                                                className: "mt-1 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "我同意 CXODEX 保存本次企业诊断信息，用于报告生成和后续咨询沟通。"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this),
                                    serverError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 rounded-[8px] bg-[#fff1f0] p-3 text-sm text-[var(--danger)]",
                                        children: serverError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 272,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: submitting,
                                        onClick: submitLead,
                                        className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white disabled:opacity-60",
                                        children: [
                                            submitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 280,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 280,
                                                columnNumber: 53
                                            }, this),
                                            submitting ? "正在生成" : "生成完整报告"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, this),
                                    reportToken && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid gap-2 rounded-[8px] bg-[#edf7f5] p-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "inline-flex items-center gap-2 font-semibold text-[var(--accent-strong)]",
                                                href: `/diagnosis/report/${reportToken}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 21
                                                    }, this),
                                                    "打开完整报告"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 286,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "inline-flex items-center gap-2 text-[var(--accent-strong)]",
                                                href: "mailto:hello@cxodex.com?subject=CXODEX 企业诊断报告沟通",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 21
                                                    }, this),
                                                    "联系 CXODEX"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 290,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "inline-flex items-center gap-2 text-[var(--accent-strong)]",
                                                href: "https://www.cxodex.com/#contact",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 21
                                                    }, this),
                                                    "预约一次沟通"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 285,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/DiagnosisApp.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DiagnosisApp.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DiagnosisApp.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s(DiagnosisApp, "wV3URA+Aglu2cixeLAv1NhELunU=");
_c = DiagnosisApp;
function CompanyProfileForm({ companyProfile, setCompanyProfile, answer, setAnswer }) {
    function update(key, value) {
        const next = {
            ...companyProfile,
            [key]: value
        };
        setCompanyProfile(next);
        if (key === "industry" || key === "mainProduct") {
            setAnswer(1, `行业：${next.industry ?? ""}；主要产品：${next.mainProduct ?? ""}`);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 rounded-[8px] border border-[var(--line)] bg-white p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-semibold text-[var(--accent)]",
                        children: "Q1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mt-1 font-semibold",
                        children: "请给出您公司所在的产业类别，贵公司占 80% 销售收入的产品是什么？"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiagnosisApp.tsx",
                lineNumber: 329,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                        label: "产业类别",
                        value: companyProfile.industry ?? "",
                        onChange: (value)=>update("industry", value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                        label: "占 80% 销售收入的产品",
                        value: companyProfile.mainProduct ?? "",
                        onChange: (value)=>update("mainProduct", value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                        label: "年销售规模",
                        value: companyProfile.annualRevenue ?? "",
                        onChange: (value)=>update("annualRevenue", value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextInput, {
                        label: "员工人数",
                        value: companyProfile.employees ?? "",
                        onChange: (value)=>update("employees", value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiagnosisApp.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-sm text-[var(--muted)]",
                children: [
                    "当前记录：",
                    answer ? String(answer) : "未填写"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiagnosisApp.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DiagnosisApp.tsx",
        lineNumber: 328,
        columnNumber: 5
    }, this);
}
_c1 = CompanyProfileForm;
function QuestionField({ question, value, setAnswer }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-[8px] border border-[var(--line)] bg-white p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-[var(--accent)]",
                                children: [
                                    "Q",
                                    question.id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-1 font-semibold leading-6",
                                children: question.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this),
                    question.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-[#edf7f5] px-2 py-1 text-xs text-[var(--accent-strong)]",
                        children: "必填"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 360,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiagnosisApp.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 whitespace-pre-line text-sm leading-6 text-[var(--muted)]",
                children: question.help
            }, void 0, false, {
                fileName: "[project]/src/components/DiagnosisApp.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    question.kind === "score" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: "10",
                                step: "1",
                                value: typeof value === "number" ? value : 5,
                                onChange: (event)=>setAnswer(question.id, Number(event.target.value)),
                                className: "w-full accent-[var(--accent)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-center justify-between text-sm text-[var(--muted)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "0 高风险"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-[8px] bg-[#edf7f5] px-3 py-1 font-semibold text-[var(--accent-strong)]",
                                        children: [
                                            typeof value === "number" ? value : 5,
                                            " 分"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "10 优秀"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 366,
                        columnNumber: 11
                    }, this),
                    question.kind === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        value: typeof value === "number" ? value : "",
                        onChange: (event)=>setAnswer(question.id, event.target.value === "" ? "" : Number(event.target.value)),
                        className: "w-full rounded-[8px] border border-[var(--line)] bg-white px-3 py-2 outline-none focus:border-[var(--accent)]",
                        placeholder: "请输入数字"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this),
                    question.kind === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: typeof value === "string" ? value : "",
                        onChange: (event)=>setAnswer(question.id, event.target.value),
                        className: "min-h-28 w-full rounded-[8px] border border-[var(--line)] bg-white px-3 py-2 outline-none focus:border-[var(--accent)]",
                        placeholder: "请如实填写"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this),
                    question.kind === "choice" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-2 md:grid-cols-3",
                        children: question.options?.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setAnswer(question.id, option),
                                className: `rounded-[8px] border px-3 py-2 text-left text-sm ${value === option ? "border-[var(--accent)] bg-[#edf7f5] text-[var(--accent-strong)]" : "border-[var(--line)] bg-white"}`,
                                children: option
                            }, option, false, {
                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                lineNumber: 408,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiagnosisApp.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DiagnosisApp.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
_c2 = QuestionField;
function MetricPanel({ metrics, setMetric, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-5 rounded-[8px] border border-[var(--line)] bg-[#f4f8f6] p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/DiagnosisApp.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-3 md:grid-cols-2",
                children: metricFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "grid gap-1 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: field.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex overflow-hidden rounded-[8px] border border-[var(--line)] bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: metrics[field.key] ?? "",
                                        onChange: (event)=>setMetric(field.key, event.target.value),
                                        className: "min-w-0 flex-1 px-3 py-2 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 445,
                                        columnNumber: 15
                                    }, this),
                                    field.suffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "border-l border-[var(--line)] px-3 py-2 text-[var(--muted)]",
                                        children: field.suffix
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                                        lineNumber: 451,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DiagnosisApp.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this)
                        ]
                    }, field.key, true, {
                        fileName: "[project]/src/components/DiagnosisApp.tsx",
                        lineNumber: 442,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/DiagnosisApp.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DiagnosisApp.tsx",
        lineNumber: 438,
        columnNumber: 5
    }, this);
}
_c3 = MetricPanel;
function TextInput({ label, value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "grid gap-1 text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/DiagnosisApp.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: value,
                onChange: (event)=>onChange(event.target.value),
                className: "rounded-[8px] border border-[var(--line)] bg-white px-3 py-2 outline-none focus:border-[var(--accent)]"
            }, void 0, false, {
                fileName: "[project]/src/components/DiagnosisApp.tsx",
                lineNumber: 464,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DiagnosisApp.tsx",
        lineNumber: 462,
        columnNumber: 5
    }, this);
}
_c4 = TextInput;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "DiagnosisApp");
__turbopack_context__.k.register(_c1, "CompanyProfileForm");
__turbopack_context__.k.register(_c2, "QuestionField");
__turbopack_context__.k.register(_c3, "MetricPanel");
__turbopack_context__.k.register(_c4, "TextInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0ckpe6-._.js.map