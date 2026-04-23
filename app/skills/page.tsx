import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Skills — ac-ai-agent",
  description: "Custom AI skills built as Claude slash commands for finance, research, and agent workflows.",
};

interface Skill {
  id: string;
  name: string;
  domain: string;
  description: string;
  capabilities: string[];
  triggers: string[];
}

const skills: Skill[] = [
  {
    id: "stock-report",
    name: "Stock Report",
    domain: "Finance · Equity Research",
    description:
      "Generates a professional 3-page HTML stock research report for any publicly traded company — covering company overview, financials, analyst consensus, and a short-term investment verdict with scorecard.",
    capabilities: [
      "3-page report: company overview, financial data, analysis summary",
      "6 interactive Chart.js charts (doughnut, bar+line combo, scorecard)",
      "Investment thesis scorecard (6 dimensions, color-coded)",
      "Bullish / Neutral / Bearish verdict box with price target",
      "Output in English, Thai, bilingual EN+TH, or PDF",
    ],
    triggers: [
      "\"Give me a stock report on NVDA\"",
      "\"Analyze Tesla stock\"",
      "\"รายงานหุ้น AAPL\"",
      "\"Short-term outlook for Apple — should I buy?\"",
    ],
  },
  {
    id: "portfolio-credit-risk",
    name: "Portfolio Credit Risk",
    domain: "Finance · Fixed Income",
    description:
      "Calculates portfolio credit risk metrics from CSV, Excel, or JSON holdings data — including PD, ECL, Credit VaR, concentration risk, and rating migration — and generates a professional written report section in English or bilingual Thai/English.",
    capabilities: [
      "Weighted Average Credit Rating (WACR) calculation",
      "Expected Credit Loss (ECL) = PD × LGD × Exposure",
      "Credit VaR at 99% confidence via Monte Carlo simulation",
      "HHI concentration risk index with breach flags",
      "Bilingual EN/TH output for retail investor reports",
      "Data quality validation with ✅ ⚠️ ❌ flags",
    ],
    triggers: [
      "\"Analyze credit risk for this bond portfolio\"",
      "\"Calculate ECL for our loan book\"",
      "\"วิเคราะห์ความเสี่ยงด้านเครดิต\"",
      "\"What's the Credit VaR on these holdings?\"",
    ],
  },
  {
    id: "portfolio-performance-attribution",
    name: "Portfolio Performance Attribution",
    domain: "Finance · Portfolio Analytics",
    description:
      "Scans a directory of daily holdings snapshots and computes Brinson-Hood-Beebower (BHB) attribution — breaking down active return into allocation, selection, and interaction effects at both sector and security level.",
    capabilities: [
      "BHB attribution: allocation, selection, interaction effects",
      "Auto-detects period (weekly / monthly / quarterly / yearly)",
      "Derives returns from consecutive NAV (VPU) pairs — no pre-computed returns needed",
      "Risk metrics: Sharpe, Sortino, Information Ratio, Tracking Error, Max Drawdown",
      "Top 5 security contributors table",
      "Handles CSV and Excel holdings files",
    ],
    triggers: [
      "\"Run BHB attribution on this folder of holdings\"",
      "\"Explain active returns vs benchmark\"",
      "\"Performance attribution for Q1 2025\"",
      "\"What drove returns — allocation or selection?\"",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <PageHeader backLabel="← home" backHref="/" />
      <div className="h-10 flex-shrink-0" />

      {/* Page hero */}
      <section className="border-b border-white/5 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-violet-400 tracking-widest uppercase mb-2">Skills</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Custom AI Skills</h1>
          <p className="text-sm text-neutral-400 mt-2 max-w-xl leading-relaxed">
            Slash commands built for Claude — each skill is a domain-specific AI tool that runs research,
            runs calculations, and generates professional outputs on demand.
          </p>
        </div>
      </section>

      {/* Skill cards */}
      <section className="px-6 py-10 flex-1">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="rounded-xl border border-white/5 bg-neutral-900 p-7 flex flex-col md:flex-row gap-8"
            >
              {/* Left: identity */}
              <div className="md:w-[30%] flex-shrink-0 flex flex-col gap-2">
                <div>
                  <p className="text-[9px] font-mono text-violet-400 tracking-widest uppercase mb-1">{skill.domain}</p>
                  <h2 className="text-lg font-bold text-white">{skill.name}</h2>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">{skill.description}</p>
                <div className="mt-2">
                  <p className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest mb-2">Sample triggers</p>
                  <div className="flex flex-col gap-1.5">
                    {skill.triggers.map((trigger) => (
                      <span
                        key={trigger}
                        className="text-[10px] font-mono text-neutral-500 bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-md leading-relaxed"
                      >
                        {trigger}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-white/5 flex-shrink-0" />

              {/* Right: capabilities */}
              <div className="flex-1">
                <p className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest mb-3">Capabilities</p>
                <ul className="flex flex-col gap-2.5">
                  {skill.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5">
                      <span className="mt-1 w-1 h-1 rounded-full bg-violet-500 flex-shrink-0" />
                      <span className="text-sm text-neutral-300 leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="border border-dashed border-white/10 rounded-xl p-10 flex items-center justify-center">
            <p className="text-xs font-mono text-neutral-700">More skills coming soon</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
