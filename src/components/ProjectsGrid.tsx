"use client";

import { useState } from "react";
import { Code, ExternalLink, LayoutDashboard, MessageSquare, Train } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Project = {
  name: string;
  desc: string;
  stack: string[];
  status: "building" | "shipped";
  icon: React.ReactNode;
  github?: string;
  live?: string;
};

const projects: Project[] = [
   {
    name: "IRCTC Backend",
    desc: "9-service microservices clone of IRCTC — because booking a train ticket shouldn't need a prayer.",
    stack: ["Node.js", "Kafka", "Redis", "PostgreSQL", "Docker"],
    status: "building",
    icon: <Train size={14} strokeWidth={1.8} />,
    github: "https://github.com/anuragg001",
    live: undefined,
  },
  {
    name: "Canvas",
    desc: "AI app generator — describe a UI, get production-ready React code rendered live in the browser.",
    stack: ["Next.js 15", "Gemini", "Sandpack", "Supabase"],
    status: "shipped",
    icon: <LayoutDashboard size={14} strokeWidth={1.8} />,
    github: "https://github.com/anuragg001/Canvas",
    live: "https://canvas-ai-builder.vercel.app/",
  },
  {
    name: "PingSpace",
    desc: "Realtime self-destructing chat — private, accountless rooms that vanish after 10 minutes.",
    stack: ["Next.js 16", "Redis", "Elysia", "Upstash"],
    status: "shipped",
    icon: <MessageSquare size={14} strokeWidth={1.8} />,
    github:"https://github.com/anuragg001/pingspace",
    live: "https://pingspace-ten.vercel.app/",
  }
];

export default function ProjectsGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="space-y-3">
      <p className="font-mono text-[10px] tracking-[0.13em] uppercase text-muted">
        currently building
      </p>
      <div className="grid grid-cols-2 gap-2.5">
        {projects.map((p, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={p.name}
              onClick={() => toggle(i)}
              className={`
                rounded-[10px] border p-3.5 cursor-pointer select-none
                transition-all duration-150
                ${isOpen
                  ? "border-foreground/25 bg-foreground/[0.06]"
                  : "border-foreground/15 bg-foreground/[0.03] hover:border-foreground/25 hover:bg-foreground/[0.06]"
                }
              `}
            >
              {/* top row: icon + badge */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="w-7 h-7 rounded-md bg-foreground/[0.08] flex items-center justify-center text-muted flex-shrink-0">
                  {p.icon}
                </div>
                <Badge
                  variant={p.status === "shipped" ? "secondary" : "outline"}
                  className={`
                    font-mono text-[9px] tracking-[0.07em] px-1.5 py-0 h-auto rounded-[3px] flex-shrink-0 mt-0.5
                    ${p.status === "shipped"
                      ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/25 hover:bg-emerald-500/10"
                      : "bg-amber-500/10 text-amber-700 border-amber-500/25 hover:bg-amber-500/10"
                    }
                  `}
                >
                  {p.status}
                </Badge>
              </div>

              {/* name */}
              <p className="font-sans text-[13px] font-semibold text-foreground/75 mb-1.5 leading-snug tracking-tight">
                {p.name}
              </p>

              {/* desc */}
              <p className="font-sans text-[12px] text-foreground/45 leading-[1.5] mb-2.5">
                {p.desc}
              </p>

              {/* stack tags */}
              <div className="flex flex-wrap gap-1">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] text-foreground/40 bg-foreground/[0.05] px-1.5 py-0.5 rounded-[3px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* expandable actions */}
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  isOpen ? "max-h-16 mt-2.5" : "max-h-0"
                }`}
              >
                <div className="border-t border-foreground/10 pt-2.5 flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 font-mono text-[10px] text-[#3C3489] border border-[#3C3489]/30 rounded-[4px] px-2 py-1 hover:bg-[#3C3489]/[0.07] transition-colors"
                    >
                      <Code size={11} strokeWidth={2} />
                      repo
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 font-mono text-[10px] text-[#3C3489] border border-[#3C3489]/30 rounded-[4px] px-2 py-1 hover:bg-[#3C3489]/[0.07] transition-colors"
                    >
                      <ExternalLink size={11} strokeWidth={2} />
                      live
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}