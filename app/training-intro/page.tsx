"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Scene = {
  label: string;
  title: string;
  body: string;
  bullets: string[];
  audience: string;
  duration: string;
  theme: "sea" | "rocket" | "boss" | "strategy" | "sales" | "factory" | "sigma" | "end";
  narration: string;
};

const scenes: Scene[] = [
  {
    label: "序幕",
    title: "如光实战管理培训",
    body: "把 CEO 与总经理的一线经营经验，转化为企业团队听得懂、带得走、能落地的实战课程。",
    bullets: ["真实案例", "经营判断", "管理动作", "团队共识"],
    audience: "CEO 与核心管理层",
    duration: "8 个分镜",
    theme: "end",
    narration: "欢迎来到如光实战管理培训介绍。这里用卡通动画展示咨询项目如何帮助企业把经营经验变成管理动作。",
  },
  {
    label: "第 1 课",
    title: "企业出海与跨文化领导",
    body: "从海外经营、渠道、合作伙伴和跨文化沟通出发，帮助团队理解出海不是翻译业务，而是重建经营系统。",
    bullets: ["理解海外客户与渠道", "识别跨文化沟通误区", "建立海外业务风险清单", "用案例复盘出海成败"],
    audience: "出海企业管理层",
    duration: "1 天",
    theme: "sea",
    narration: "第一课讲企业出海。重点不是口号，而是客户、渠道、伙伴、法律合规和跨文化领导。",
  },
  {
    label: "第 2 课",
    title: "三个月快速改变模型",
    body: "用项目方式推动变化，让团队在短周期里明确问题、选择动作、追踪结果，看到真实改变。",
    bullets: ["头脑风暴与问题定义", "改变项目选择", "项目负责人机制", "结果复盘和激励"],
    audience: "CEO 与部门负责人",
    duration: "1 天",
    theme: "rocket",
    narration: "第二课讲三个月快速改变模型。改变需要节奏，需要项目负责人，也需要看得见的结果。",
  },
  {
    label: "第 3 课",
    title: "职业经理人在民营企业的突破",
    body: "帮助职业经理人理解老板心态、组织现实和经营责任，减少错位沟通，形成一场高质量合作。",
    bullets: ["老板心态与企业家视角", "职业经理人的边界", "信任建立和向上管理", "从打工者到经营者"],
    audience: "职业经理人与高管",
    duration: "1 天",
    theme: "boss",
    narration: "第三课讲职业经理人在民营企业的突破。重点是理解企业家视角，也建立职业经理人的责任边界。",
  },
  {
    label: "第 4 课",
    title: "从 GE CEO 视角看战略和管理提升",
    body: "把 GE 的管理纪律、精益思想和战略落地方法，转化为中国企业可以讨论和执行的经营语言。",
    bullets: ["战略问题如何拆解", "质量和成本如何服务战略", "管理节奏如何落地", "价值观如何留住人才"],
    audience: "企业一号位和高管团队",
    duration: "1 天",
    theme: "strategy",
    narration: "第四课从 GE CEO 视角看战略和管理提升。战略不是 PPT，战略最终要变成资源、流程和人的动作。",
  },
  {
    label: "第 5 课",
    title: "打造优秀外销团队",
    body: "围绕外贸拓展、客户开发、谈判节奏和团队能力，帮助企业把机会型销售变成体系化销售。",
    bullets: ["外销团队怎么找客户", "如何谈判和跟进", "展会和邮件如何转化", "避免中式英文沟通误区"],
    audience: "外贸经理与销售团队",
    duration: "1 天",
    theme: "sales",
    narration: "第五课讲外销团队建设。目标是让销售从个人经验，走向客户分层、管道管理和标准动作。",
  },
  {
    label: "第 6 课",
    title: "精益生产文化落地培训",
    body: "把 TPS 和 Lean 的思想带到现场，围绕浪费、价值流、看板和持续改善，形成制造现场的管理节奏。",
    bullets: ["现场 5S 和浪费识别", "价值流与瓶颈管理", "看板和可视化管理", "TPM 与改善项目"],
    audience: "制造型企业管理层",
    duration: "3 天",
    theme: "factory",
    narration: "第六课讲精益生产文化落地。精益不是工具清单，而是现场看问题、改问题、复盘问题的管理文化。",
  },
  {
    label: "第 7 课",
    title: "六西格玛突破提高培训",
    body: "用 DMAIC、VOC、CTQ 和项目辅导，把质量改善变成可衡量、可复盘、可复制的经营改善项目。",
    bullets: ["DMAIC 十二步法", "VOC 与 CTQ", "QFD、FMEA 与 DOE", "小组改善项目辅导"],
    audience: "CEO、总经理、部门主管",
    duration: "12 天项目式",
    theme: "sigma",
    narration: "第七课讲六西格玛突破提高。所有改善都要回到数据，回到客户，回到稳定的项目机制。",
  },
];

function Art({ theme }: { theme: Scene["theme"] }) {
  const palette = {
    ink: "#1D3461",
    sun: "#FFC93C",
    coral: "#E84545",
    sky: "#4FB0C6",
    grass: "#7BC74D",
    line: "#2B2118",
    paper: "#FFF8E7",
  };

  return (
    <svg viewBox="0 0 520 360" className="h-full w-full" role="img" aria-label="卡通课程插画">
      <rect width="520" height="360" rx="26" fill={theme === "rocket" ? "#1D3461" : theme === "sea" ? "#DFF4FB" : theme === "factory" ? "#E3E9F5" : "#FFF8E7"} />
      <circle cx="430" cy="68" r="42" fill={palette.sun} stroke={palette.line} strokeWidth="5" />
      <g className="cartoon-float">
        <rect x="172" y="122" width="128" height="132" rx="42" fill={palette.ink} stroke={palette.line} strokeWidth="5" />
        <circle cx="236" cy="86" r="62" fill="#FFD9A0" stroke={palette.line} strokeWidth="5" />
        <path d="M178 82 Q202 30 238 34 Q282 30 296 86 Q262 60 236 60 Q204 60 178 82Z" fill={palette.line} />
        <circle cx="214" cy="82" r="15" fill="#fff" stroke={palette.line} strokeWidth="4" />
        <circle cx="258" cy="82" r="15" fill="#fff" stroke={palette.line} strokeWidth="4" />
        <circle cx="214" cy="82" r="5" fill={palette.line} />
        <circle cx="258" cy="82" r="5" fill={palette.line} />
        <path d="M218 116 Q236 132 254 116" fill="none" stroke={palette.line} strokeWidth="5" strokeLinecap="round" />
        <rect x="214" y="148" width="44" height="78" rx="16" fill="#fff" stroke={palette.line} strokeWidth="4" />
        <path d="M228 154 L236 186 L246 154" fill={palette.coral} stroke={palette.line} strokeWidth="3" />
        <rect x="130" y="154" width="42" height="86" rx="18" fill={palette.ink} stroke={palette.line} strokeWidth="5" transform="rotate(-18 150 180)" />
        <rect x="300" y="154" width="42" height="86" rx="18" fill={palette.ink} stroke={palette.line} strokeWidth="5" transform="rotate(18 320 180)" />
      </g>
      {theme === "sea" && (
        <g>
          <path d="M0 290 C80 260 130 320 220 286 C300 256 370 318 520 280 L520 360 L0 360Z" fill={palette.sky} opacity="0.9" />
          <path d="M64 218 L150 178 L238 218 Z" fill="#fff" stroke={palette.line} strokeWidth="5" />
          <path d="M150 178 L150 246" stroke={palette.line} strokeWidth="5" />
          <path d="M84 246 H260 L232 288 H116 Z" fill={palette.coral} stroke={palette.line} strokeWidth="5" />
        </g>
      )}
      {theme === "rocket" && (
        <g className="cartoon-rise">
          <path d="M390 236 C380 164 420 108 456 72 C482 122 484 188 444 248Z" fill="#fff" stroke={palette.line} strokeWidth="5" />
          <circle cx="438" cy="142" r="22" fill={palette.sky} stroke={palette.line} strokeWidth="5" />
          <path d="M390 226 L350 268 L398 258Z" fill={palette.coral} stroke={palette.line} strokeWidth="5" />
          <path d="M444 248 L430 312 L408 258Z" fill={palette.sun} stroke={palette.line} strokeWidth="5" />
        </g>
      )}
      {theme === "boss" && (
        <g>
          <rect x="340" y="88" width="118" height="150" rx="18" fill="#fff" stroke={palette.line} strokeWidth="5" />
          <path d="M362 132 H436 M362 166 H436 M362 200 H410" stroke={palette.ink} strokeWidth="8" strokeLinecap="round" />
          <circle cx="378" cy="284" r="24" fill={palette.sun} stroke={palette.line} strokeWidth="5" />
          <circle cx="438" cy="284" r="24" fill={palette.sky} stroke={palette.line} strokeWidth="5" />
        </g>
      )}
      {theme === "strategy" && (
        <g>
          <rect x="342" y="104" width="130" height="104" rx="12" fill="#fff" stroke={palette.line} strokeWidth="5" />
          <path d="M364 182 L398 148 L426 166 L454 122" fill="none" stroke={palette.coral} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M454 122 L456 154 L430 132" fill={palette.coral} />
          <rect x="356" y="232" width="92" height="24" rx="12" fill={palette.sun} stroke={palette.line} strokeWidth="4" />
        </g>
      )}
      {theme === "sales" && (
        <g>
          <rect x="338" y="112" width="118" height="132" rx="20" fill="#fff" stroke={palette.line} strokeWidth="5" />
          <path d="M358 148 H438 M358 178 H418 M358 208 H430" stroke={palette.ink} strokeWidth="7" strokeLinecap="round" />
          <path d="M360 282 C400 238 438 300 476 246" fill="none" stroke={palette.grass} strokeWidth="9" strokeLinecap="round" />
          <circle cx="360" cy="282" r="10" fill={palette.grass} stroke={palette.line} strokeWidth="4" />
          <circle cx="476" cy="246" r="10" fill={palette.grass} stroke={palette.line} strokeWidth="4" />
        </g>
      )}
      {theme === "factory" && (
        <g>
          <rect x="326" y="204" width="150" height="76" rx="8" fill="#fff" stroke={palette.line} strokeWidth="5" />
          <path d="M326 204 L326 152 L370 180 L370 152 L414 180 L414 204" fill="#fff" stroke={palette.line} strokeWidth="5" />
          <rect x="350" y="232" width="22" height="48" fill={palette.sky} stroke={palette.line} strokeWidth="4" />
          <rect x="396" y="232" width="22" height="48" fill={palette.sun} stroke={palette.line} strokeWidth="4" />
          <circle cx="454" cy="240" r="16" fill={palette.coral} stroke={palette.line} strokeWidth="4" />
        </g>
      )}
      {theme === "sigma" && (
        <g>
          <circle cx="400" cy="170" r="92" fill={palette.ink} stroke={palette.line} strokeWidth="5" />
          <path d="M340 218 C380 120 420 120 460 218" fill="none" stroke={palette.sun} strokeWidth="9" strokeLinecap="round" />
          <text x="400" y="160" textAnchor="middle" fontSize="54" fontWeight="800" fill="#fff">6σ</text>
          <text x="400" y="198" textAnchor="middle" fontSize="20" fontWeight="700" fill={palette.sun}>DMAIC</text>
        </g>
      )}
      {theme === "end" && (
        <g>
          <rect x="334" y="98" width="126" height="112" rx="22" fill="#fff" stroke={palette.line} strokeWidth="5" />
          <path d="M360 150 L390 180 L440 126" fill="none" stroke={palette.grass} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M78 294 H470" stroke={palette.line} strokeWidth="6" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}

export default function TrainingIntroPage() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [voiceOn, setVoiceOn] = useState(false);
  const scene = scenes[index];

  const progress = useMemo(() => ((index + 1) / scenes.length) * 100, [index]);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % scenes.length), 8500);
    return () => window.clearTimeout(timer);
  }, [index, playing]);

  useEffect(() => {
    if (!voiceOn || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(scene.narration);
    utterance.lang = "zh-CN";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
    return () => window.speechSynthesis.cancel();
  }, [index, scene.narration, voiceOn]);

  const go = (next: number) => {
    setPlaying(false);
    setIndex((next + scenes.length) % scenes.length);
  };

  return (
    <section className="min-h-[calc(100svh-5rem)] border-b border-neutral-200 bg-[#fff8e7] text-[#1d3461]">
      <style>{`
        @keyframes cartoonFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes cartoonRise { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-16px) rotate(2deg); } }
        .cartoon-float { animation: cartoonFloat 3.2s ease-in-out infinite; transform-origin: center; }
        .cartoon-rise { animation: cartoonRise 2.4s ease-in-out infinite; transform-origin: center; }
      `}</style>
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10">
        <div className="mb-6 flex flex-col gap-4 border-b-4 border-[#2b2118] pb-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e84545]">Cartoon Project Intro</p>
            <h1 className="mt-3 text-3xl font-semibold text-[#1d3461] sm:text-5xl">咨询项目卡通介绍</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#33405f]">
              用一组轻量动画介绍如光实战管理培训的课程结构、适合对象和落地方式。
            </p>
          </div>
          <Link href="/contact" className="button-dark self-start">咨询课程合作</Link>
        </div>

        <div className="overflow-hidden border-4 border-[#2b2118] bg-white shadow-[10px_10px_0_rgba(29,52,97,0.18)]">
          <div className="h-2 bg-neutral-100">
            <div className="h-full bg-[#e84545] transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="min-h-[360px] border-b-4 border-[#2b2118] bg-[#dff4fb] p-4 lg:border-b-0 lg:border-r-4">
              <Art theme={scene.theme} />
            </div>
            <div className="flex min-h-[360px] flex-col gap-5 p-6 sm:p-8">
              <div className="inline-flex w-fit items-center rounded-full border-2 border-[#2b2118] bg-[#ffc93c] px-4 py-1 text-sm font-bold text-[#1d3461] shadow-[3px_3px_0_rgba(43,33,24,0.22)]">
                {scene.label}
              </div>
              <h2 className="text-2xl font-semibold leading-tight text-[#1d3461] sm:text-4xl">{scene.title}</h2>
              <p className="text-base leading-8 text-[#33405f]">{scene.body}</p>
              <ul className="grid gap-3 text-sm leading-6 text-[#33405f] sm:grid-cols-2">
                {scene.bullets.map((item) => (
                  <li key={item} className="border-l-4 border-[#e84545] bg-[#fff8e7] px-4 py-3 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-3 text-sm font-bold">
                <span className="rounded-full border-2 border-[#2b2118] bg-white px-4 py-2">适合：{scene.audience}</span>
                <span className="rounded-full border-2 border-[#2b2118] bg-[#4fb0c6] px-4 py-2 text-white">时长：{scene.duration}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t-4 border-[#2b2118] bg-[#fff8e7] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {scenes.map((item, itemIndex) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => go(itemIndex)}
                  className={`h-4 w-4 rounded-full border-2 border-[#2b2118] transition ${itemIndex === index ? "scale-125 bg-[#ffc93c]" : "bg-white"}`}
                  aria-label={`跳转到${item.label}`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => go(index - 1)} className="button-light border-[#2b2118]">上一幕</button>
              <button type="button" onClick={() => go(index + 1)} className="button-light border-[#2b2118]">下一幕</button>
              <button type="button" onClick={() => setVoiceOn((value) => !value)} className="button-light border-[#2b2118]">
                配音：{voiceOn ? "开" : "关"}
              </button>
              <button type="button" onClick={() => setPlaying((value) => !value)} className="button-dark border-[#2b2118] bg-[#e84545] hover:bg-[#1d3461]">
                {playing ? "暂停播放" : "自动播放"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
