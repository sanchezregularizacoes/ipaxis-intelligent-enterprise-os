import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight, Sparkles, Bot, Workflow, LineChart, ShieldCheck, Boxes,
  MessageSquare, FileText, Users, Building2, Factory, Store, HeartPulse,
  GraduationCap, Scale, Landmark, Wheat, Cpu, Truck, Home as HomeIcon,
  Check, X, Plus, Minus, Menu, Zap, Database, Layers, Globe, Lock,
  BarChart3, GitBranch, Wand2, Puzzle, Send, KeyRound, Activity,
  Calendar, DollarSign, FileSignature, Bell, Rocket, ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";


export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "IPAXIS — Sistema operacional inteligente para empresas" },
      {
        name: "description",
        content:
          "CRM, IA, Automação, Financeiro, BI e Workflows em uma única plataforma. Elimine sistemas fragmentados e opere com inteligência de dados.",
      },
    ],
  }),
});

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Soluções", href: "#solucao" },
    { label: "Plataforma", href: "#modulos" },
    { label: "IA", href: "#ia" },
    { label: "Automação", href: "#automacao" },
    { label: "Builder", href: "#builder" },
    { label: "Segmentos", href: "#segmentos" },
    { label: "Comparar", href: "#comparar" },
    { label: "Segurança", href: "#seguranca" },
    { label: "Clientes", href: "#clientes" },
    { label: "FAQ", href: "#faq" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];


  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-hairline" : ""
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight">IPAXIS</span>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="#contato"
            className="px-3 py-2 text-[13px] text-muted-foreground hover:text-foreground"
          >
            Entrar
          </a>
          <a
            href="#contato"
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[13px] font-medium text-brand-foreground hover:brightness-110 transition"
          >
            Solicitar demonstração
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <button
          className="lg:hidden p-2 rounded-md hairline"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-hairline bg-background/95 backdrop-blur-xl">
          <div className="container-page py-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-brand-foreground"
            >
              Solicitar demonstração
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import ipaxisMark from "@/assets/ipaxis-mark.png.asset.json";

const ipaxisMarkUrl = `https://ipaxis-evolve.lovable.app${ipaxisMark.url}`;

function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src={ipaxisMarkUrl}
      alt="IPAXIS"
      className={`${className} object-contain`}
      draggable={false}
    />
  );
}


/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 radial-brand pointer-events-none" />
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                Sistema operacional para empresas
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.02] font-semibold tracking-[-0.03em]">
                Transformando processos em{" "}
                <span className="gradient-text">inteligência</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground max-w-xl">
                A plataforma empresarial que une CRM, Inteligência Artificial,
                Automação e Gestão em um único ecossistema — onde cada área da
                sua empresa opera com dados, contexto e autonomia.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contato"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-brand-foreground glow-brand hover:brightness-110 transition"
                >
                  Solicitar demonstração
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#modulos"
                  className="inline-flex items-center gap-2 rounded-full hairline px-5 py-3 text-sm font-medium hover:bg-white/5 transition"
                >
                  Conhecer plataforma
                </a>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-10 flex items-center gap-6 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <span>LGPD</span><span className="opacity-40">•</span>
                <span>ISO-ready</span><span className="opacity-40">•</span>
                <span>99.99% uptime</span><span className="opacity-40">•</span>
                <span>API-first</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={200}>
              <HeroMockup />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative animate-float">
      <div className="absolute -inset-6 bg-gradient-to-tr from-brand/30 via-sky/20 to-teal/20 blur-3xl rounded-[32px]" />
      <div className="relative rounded-2xl glass overflow-hidden shadow-2xl">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-hairline">
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="ml-3 flex-1 h-6 rounded-md bg-white/5 flex items-center px-2 gap-2">
            <Lock className="h-3 w-3 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">app.ipaxis.com/dashboard</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 p-4">
          {/* sidebar */}
          <aside className="col-span-2 space-y-1.5">
            {[LineChart, Users, GitBranch, Bot, Calendar, DollarSign, FileText, ShieldCheck].map((I, i) => (
              <div
                key={i}
                className={`h-7 rounded-md flex items-center justify-center ${
                  i === 0 ? "bg-brand/20 text-sky" : "text-muted-foreground/70 hover:bg-white/5"
                }`}
              >
                <I className="h-3.5 w-3.5" />
              </div>
            ))}
          </aside>

          {/* main */}
          <div className="col-span-10 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Dashboard</div>
                <div className="text-[13px] font-semibold mt-0.5">Visão executiva</div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-sky to-teal" />
                <div className="h-6 w-6 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[
                { l: "Receita", v: "R$ 4.2M", d: "+18%" },
                { l: "Leads", v: "1.284", d: "+9%" },
                { l: "Conversão", v: "27,4%", d: "+3,1pp" },
                { l: "Tickets IA", v: "9.410", d: "+42%" },
              ].map((k) => (
                <div key={k.l} className="rounded-lg hairline p-2.5 bg-white/[0.02]">
                  <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{k.l}</div>
                  <div className="text-[13px] font-semibold mt-1">{k.v}</div>
                  <div className="text-[9px] text-teal mt-0.5">{k.d}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-2">
              <div className="col-span-3 rounded-lg hairline p-3 bg-white/[0.02]">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Pipeline</div>
                  <div className="text-[9px] text-muted-foreground">últimos 30 dias</div>
                </div>
                <MiniChart />
              </div>
              <div className="col-span-2 rounded-lg hairline p-3 bg-white/[0.02]">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">IA · WhatsApp</div>
                <div className="mt-2 space-y-1.5">
                  {[
                    { t: "Cliente qualificado", c: "sky" },
                    { t: "Reunião agendada", c: "teal" },
                    { t: "Proposta enviada", c: "brand" },
                  ].map((it) => (
                    <div key={it.t} className="flex items-center gap-2 text-[10px]">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: `var(--${it.c})` }}
                      />
                      <span className="text-foreground/80">{it.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-lg hairline p-3 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Funil comercial</div>
                <div className="text-[9px] text-muted-foreground">tempo real</div>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {["Novo","Contato","Qualif.","Proposta","Fechado"].map((s, i) => (
                  <div key={s} className="rounded-md bg-white/[0.03] p-2">
                    <div className="text-[9px] text-muted-foreground">{s}</div>
                    <div className="text-[11px] font-semibold mt-1">{[412,318,214,142,86][i]}</div>
                    <div className="mt-1.5 h-1 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand via-sky to-teal"
                        style={{ width: `${[92,74,56,38,22][i]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating cards */}
      <div className="hidden md:block absolute -left-6 top-1/3 rounded-xl glass p-3 shadow-xl animate-float" style={{ animationDelay: "-2s" }}>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand/20 flex items-center justify-center">
            <Bot className="h-4 w-4 text-sky" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">IA respondeu</div>
            <div className="text-[11px] font-medium">142 conversas hoje</div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute -right-4 bottom-10 rounded-xl glass p-3 shadow-xl animate-float" style={{ animationDelay: "-4s" }}>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-teal/20 flex items-center justify-center">
            <DollarSign className="h-4 w-4 text-teal" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Financeiro</div>
            <div className="text-[11px] font-medium">+R$ 128.400 hoje</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniChart() {
  const pts = [12,18,14,22,28,24,32,30,38,44,42,52,58,54,68,74,70,82];
  const max = Math.max(...pts);
  const path = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * 100} ${100 - (v / max) * 90}`).join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="mt-2 w-full h-24">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--sky)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--sky)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L 100 100 L 0 100 Z`} fill="url(#g)" />
      <path d={path} fill="none" stroke="var(--sky)" strokeWidth="1.2" />
    </svg>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["CRM","IA CORPORATIVA","AUTOMAÇÃO","BI","WORKFLOW","FINANCEIRO","WHATSAPP","API","DASHBOARDS","LGPD","MULTIEMPRESA","ASSINATURAS"];
  return (
    <div className="border-y border-hairline py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-14">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="text-[11px] tracking-[0.24em] text-muted-foreground/70">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- SECTION HELPERS ---------------- */
function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full hairline px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </div>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker: string; title: ReactNode; sub?: ReactNode }) {
  return (
    <div className="max-w-3xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.05]">
        {title}
      </h2>
      {sub && <p className="mt-5 text-[16px] text-muted-foreground leading-relaxed max-w-2xl">{sub}</p>}
    </div>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  const chips = ["CRM","Financeiro","WhatsApp","Planilhas","Email marketing","BI terceirizado","ERP","Documentos","Automação","Suporte","RH","Comissões"];
  return (
    <section className="py-28">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            kicker="O problema"
            title={<>Sua empresa opera em <span className="gradient-text">dezenas de sistemas</span> desconectados.</>}
            sub="CRM separado. Financeiro separado. WhatsApp separado. Planilhas em todos os lados. Informação descentralizada gera retrabalho, perda de produtividade e decisões baseadas em dados incompletos."
          />
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative rounded-2xl hairline p-8 bg-white/[0.02]">
              <div className="flex flex-wrap gap-2">
                {chips.map((c, i) => (
                  <span
                    key={c}
                    className="rounded-lg hairline px-3 py-1.5 text-xs text-muted-foreground bg-white/[0.02]"
                    style={{ transform: `rotate(${(i % 5 - 2) * 1.2}deg)` }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="absolute -top-3 -right-3 rounded-full hairline glass px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                Antes da IPAXIS
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-4">
              {[
                ["Fragmentação de dados", "Informação espalhada entre planilhas, e-mails e sistemas."],
                ["Retrabalho operacional", "Times duplicam esforço e perdem contexto."],
                ["Decisões cegas", "Relatórios chegam tarde ou com dados divergentes."],
                ["Custo invisível", "Licenças, integrações e manutenção que se acumulam."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <div className="mt-1 h-8 w-8 rounded-lg hairline flex items-center justify-center bg-white/[0.02]">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <div className="text-[15px] font-medium">{t}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOLUTION ---------------- */
function Solution() {
  const nodes = [
    { l: "CRM", top: "10%", left: "6%" },
    { l: "Financeiro", top: "70%", left: "10%" },
    { l: "WhatsApp", top: "20%", left: "88%" },
    { l: "Planilhas", top: "78%", left: "82%" },
    { l: "BI", top: "45%", left: "0%" },
    { l: "Automação", top: "5%", left: "50%" },
    { l: "Documentos", top: "88%", left: "45%" },
    { l: "ERP", top: "48%", left: "96%" },
  ];
  return (
    <section id="solucao" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 radial-brand opacity-60 pointer-events-none" />
      <div className="container-page relative">
        <Reveal>
          <SectionTitle
            kicker="Nossa solução"
            title={<>Uma única plataforma. <br className="hidden sm:block" />Todos os processos. <span className="gradient-text">Uma única inteligência.</span></>}
          />
        </Reveal>

        <div className="mt-16 relative aspect-[16/10] max-w-4xl mx-auto">
          {/* connecting lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {nodes.map((n, i) => (
              <line
                key={i}
                x1={parseFloat(n.left)}
                y1={parseFloat(n.top)}
                x2="50"
                y2="50"
                stroke="url(#lg)"
                strokeWidth="0.15"
                strokeDasharray="0.6 0.6"
              />
            ))}
            <defs>
              <linearGradient id="lg" x1="0" x2="1">
                <stop offset="0%" stopColor="var(--sky)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="var(--teal)" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>

          {nodes.map((n) => (
            <div
              key={n.l}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-lg glass px-3 py-1.5 text-xs text-muted-foreground"
              style={{ top: n.top, left: n.left }}
            >
              {n.l}
            </div>
          ))}

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-pulse-ring" />
              <div className="relative h-40 w-40 rounded-full glass glow-brand flex items-center justify-center">
                <div className="h-28 w-28 rounded-full bg-gradient-to-br from-brand via-sky to-teal flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-background flex items-center justify-center">
                    <Logo />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap">
                IPAXIS · Núcleo inteligente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MODULES ---------------- */
function Modules() {
  const groups: { title: string; icon: React.ComponentType<{ className?: string }>; items: string[] }[] = [
    { title: "CRM", icon: Users, items: ["Comercial","Incorporadora","Imobiliário","Industrial","Serviços","Personalizado"] },
    { title: "Vendas & Pipeline", icon: GitBranch, items: ["Pipeline","Funil","Leads","Clientes","Reservas","Contratos"] },
    { title: "Operação", icon: Calendar, items: ["Agenda","Tarefas","Documentos","Assinaturas","Central de Arquivos","Notificações"] },
    { title: "Financeiro", icon: DollarSign, items: ["Fluxo de Caixa","Comissões","Recebimentos","Contas a pagar","Conciliação","Boletos"] },
    { title: "Dashboards & BI", icon: BarChart3, items: ["Power Analytics","KPIs","Tempo real","CEO","Diretores","Gestores"] },
    { title: "Construtores visuais", icon: Wand2, items: ["Workflow Builder","Dashboard Builder","Form Builder","Card Builder","Report Builder","Permission Builder"] },
    { title: "IA Corporativa", icon: Bot, items: ["Assistente","Base de conhecimento","IA Comercial","IA Atendimento","IA Interna","Análise comportamental"] },
    { title: "Integrações", icon: Puzzle, items: ["API","Webhooks","WhatsApp","Email","SMS","ERP externos"] },
    { title: "Governança", icon: ShieldCheck, items: ["LGPD","Logs","Auditoria","Permissões","Multiempresa","Multiusuário"] },
    { title: "Plataforma", icon: Layers, items: ["Aplicativo","PWA","Multi-dispositivo","Alta disponibilidade","Escalabilidade","SSO"] },
  ];

  return (
    <section id="modulos" className="py-28 relative">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            kicker="Plataforma"
            title={<>Módulos que operam como <span className="gradient-text">um sistema operacional empresarial</span>.</>}
            sub="Cada módulo é independente, mas todos compartilham dados, contexto e inteligência. Ative, personalize e evolua sem depender de integrações externas."
          />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 40}>
              <div className="group relative rounded-2xl hairline bg-white/[0.02] p-6 hover:bg-white/[0.04] transition h-full">
                <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-sky/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-white/[0.03] hairline flex items-center justify-center">
                    <g.icon className="h-4.5 w-4.5 text-sky" />
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground/50 transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <div className="mt-5 text-[15px] font-semibold">{g.title}</div>
                <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[13px] text-muted-foreground">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI ---------------- */
function AISection() {
  return (
    <section id="ia" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 radial-brand opacity-40 pointer-events-none" />
      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionTitle
                kicker="IA Corporativa"
                title={<>Uma Inteligência Artificial <span className="gradient-text">treinada para a sua empresa</span>.</>}
                sub="A IA da IPAXIS aprende os documentos, procedimentos, produtos, políticas, contratos e regras da sua operação. Depois disso, responde clientes, vendedores e colaboradores exatamente conforme o que a sua empresa determina."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 grid grid-cols-2 gap-2">
                {["Documentos","Procedimentos","Produtos","Políticas","Contratos","Fluxos","Base de conhecimento","Regras internas"].map((t) => (
                  <div key={t} className="rounded-lg hairline px-3 py-2 text-[13px] bg-white/[0.02]">
                    {t}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="relative rounded-2xl glass p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-brand/20 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-sky" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold">IPAXIS · Assistente Comercial</div>
                      <div className="text-[10px] text-muted-foreground">Treinada com 1.284 documentos internos</div>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-teal">online</span>
                </div>

                <div className="mt-6 space-y-3">
                  <ChatBubble side="left">Bom dia! Tenho interesse no apartamento 1204 da Torre Aurora.</ChatBubble>
                  <ChatBubble side="right" ai>
                    Olá, Marina! O 1204 da Torre Aurora está disponível: 92m², 3 dorm.,
                    R$ 984.000 — condições especiais até 30/11. Posso reservar uma visita
                    para amanhã às 14h?
                  </ChatBubble>
                  <ChatBubble side="left">Consegue às 16h?</ChatBubble>
                  <ChatBubble side="right" ai>
                    Perfeito. Agendei sua visita para amanhã às 16h com o consultor
                    Rafael. Um pré-cadastro foi criado no CRM e você receberá a
                    confirmação por WhatsApp em instantes.
                  </ChatBubble>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {[
                    ["Qualificado", "sky"],
                    ["Reunião criada", "teal"],
                    ["CRM atualizado", "brand"],
                  ].map(([t, c]) => (
                    <div key={t} className="rounded-lg hairline bg-white/[0.02] p-2.5 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: `var(--${c})` }} />
                      <span className="text-[11px]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* IA Comercial */}
        <div className="mt-20 grid md:grid-cols-3 gap-4">
          {[
            { i: MessageSquare, t: "Atendimento automático", d: "Responde 24/7 no WhatsApp, site e canais integrados, com tom de voz da marca." },
            { i: Sparkles, t: "Qualificação inteligente", d: "Classifica leads, trata objeções, agenda reuniões e transfere para humano no momento certo." },
            { i: Activity, t: "Pós-venda & reativação", d: "Follow-up automático, análise comportamental e reativação de base parada." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="rounded-2xl hairline bg-white/[0.02] p-6 h-full">
                <div className="h-10 w-10 rounded-xl bg-white/[0.03] hairline flex items-center justify-center">
                  <c.i className="h-4.5 w-4.5 text-teal" />
                </div>
                <div className="mt-5 text-[15px] font-semibold">{c.t}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ children, side, ai }: { children: ReactNode; side: "left" | "right"; ai?: boolean }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
          ai
            ? "bg-gradient-to-br from-brand/25 to-sky/15 hairline"
            : "bg-white/[0.04] hairline text-foreground/90"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ---------------- AUTOMATION ---------------- */
function Automation() {
  const steps = [
    { i: MessageSquare, t: "Cliente entra", d: "Mensagem no WhatsApp." },
    { i: Bot, t: "IA responde", d: "Qualifica e coleta dados." },
    { i: Users, t: "CRM registra", d: "Lead + histórico + tags." },
    { i: Calendar, t: "Agenda", d: "Cria tarefa e reunião." },
    { i: DollarSign, t: "Financeiro", d: "Proposta e cobrança." },
    { i: Bell, t: "Equipe notificada", d: "Push + email + card." },
    { i: BarChart3, t: "Dashboard", d: "Indicador atualiza em tempo real." },
  ];
  return (
    <section id="automacao" className="py-28">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            kicker="Automação"
            title={<>Processos que se executam <span className="gradient-text">sozinhos</span> — do primeiro contato ao pós-venda.</>}
            sub="Cada evento na plataforma dispara ações em cadeia entre módulos. Sem integrações. Sem código. Sem intervenção."
          />
        </Reveal>

        <div className="mt-14 relative">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-hairline to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 60}>
                <div className="relative rounded-2xl glass p-5 text-center">
                  <div className="mx-auto h-10 w-10 rounded-xl bg-gradient-to-br from-brand/30 to-sky/20 flex items-center justify-center">
                    <s.i className="h-4.5 w-4.5 text-sky" />
                  </div>
                  <div className="mt-4 text-[13px] font-semibold">{s.t}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{s.d}</div>
                  <div className="mt-3 text-[10px] uppercase tracking-wider text-muted-foreground/70">Etapa {i + 1}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BUILDER ---------------- */
function Builder() {
  return (
    <section id="builder" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="container-page relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionTitle
              kicker="Construtor visual"
              title={<>Sua operação, <span className="gradient-text">do seu jeito</span> — sem depender de TI.</>}
              sub="A IPAXIS não é um CRM engessado. Você cria fluxos, campos, cards, dashboards, formulários e permissões visualmente. Cada empresa modela sua realidade."
            />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                ["Workflow Builder", Workflow],
                ["Dashboard Builder", BarChart3],
                ["Form Builder", FileText],
                ["Card Builder", Layers],
                ["Report Builder", LineChart],
                ["Permission Builder", KeyRound],
              ].map(([t, I]) => {
                const Icon = I as React.ComponentType<{ className?: string }>;
                return (
                  <div key={t as string} className="rounded-lg hairline bg-white/[0.02] p-3 flex items-center gap-2.5">
                    <Icon className="h-4 w-4 text-sky" />
                    <span className="text-[13px]">{t as string}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-2xl glass p-4">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground px-2 mb-3">Workflow · Reserva de unidade</div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { t: "Trigger", d: "Formulário enviado", c: "sky" },
                  { t: "Ação", d: "Cria oportunidade CRM", c: "brand" },
                  { t: "Ação", d: "Envia WhatsApp", c: "teal" },
                  { t: "Condição", d: "Se qualificado", c: "sky" },
                  { t: "Ação", d: "Agenda visita", c: "brand" },
                  { t: "Ação", d: "Notifica gestor", c: "teal" },
                ].map((n, i) => (
                  <div key={i} className="rounded-xl hairline bg-white/[0.03] p-3 relative">
                    <div className="text-[9px] uppercase tracking-wider" style={{ color: `var(--${n.c})` }}>
                      {n.t}
                    </div>
                    <div className="text-[12px] font-medium mt-1">{n.d}</div>
                    <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-brand to-teal" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground px-2">
                <span>Publicado · v3.2</span>
                <span className="text-teal">Ativo</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SEGMENTS ---------------- */
function Segments() {
  const segs = [
    { t: "Incorporadoras", i: Building2 },
    { t: "Construtoras", i: HomeIcon },
    { t: "Imobiliárias", i: Landmark },
    { t: "Indústrias", i: Factory },
    { t: "Comércio", i: Store },
    { t: "Serviços", i: Boxes },
    { t: "Saúde", i: HeartPulse },
    { t: "Educação", i: GraduationCap },
    { t: "Jurídico", i: Scale },
    { t: "Franquias", i: Rocket },
    { t: "Distribuidoras", i: Truck },
    { t: "Agronegócio", i: Wheat },
    { t: "Tecnologia", i: Cpu },
  ];
  return (
    <section id="segmentos" className="py-28">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            kicker="Segmentos"
            title={<>Uma plataforma. <span className="gradient-text">Cada mercado com sua identidade</span>.</>}
            sub="A IPAXIS adapta módulos, fluxos, indicadores e vocabulário ao segmento da sua empresa — sem projetos intermináveis de implantação."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {segs.map((s, i) => (
            <Reveal key={s.t} delay={i * 30}>
              <div className="group rounded-2xl hairline bg-white/[0.02] p-5 text-center hover:bg-white/[0.05] transition h-full">
                <div className="mx-auto h-11 w-11 rounded-xl bg-gradient-to-br from-brand/20 to-sky/10 flex items-center justify-center">
                  <s.i className="h-5 w-5 text-sky" />
                </div>
                <div className="mt-4 text-[13px] font-medium">{s.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPARE ---------------- */
function Compare() {
  const rows = [
    ["CRM completo", true, true, false, true],
    ["IA Corporativa treinada", false, false, false, true],
    ["Automação nativa", false, false, false, true],
    ["Financeiro integrado", false, false, true, true],
    ["Dashboards em tempo real", false, false, true, true],
    ["Workflow visual", false, false, false, true],
    ["Construtores no-code", false, false, false, true],
    ["API-first", false, true, true, true],
    ["WhatsApp nativo", false, false, false, true],
    ["Multiempresa & LGPD", false, false, true, true],
  ] as const;
  const heads = ["Planilhas", "CRM tradicional", "ERP", "IPAXIS"];
  return (
    <section id="comparar" className="py-28">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            kicker="Comparativo"
            title={<>Por que a IPAXIS <span className="gradient-text">não é comparável</span>?</>}
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-12 overflow-hidden rounded-2xl hairline bg-white/[0.02]">
            <div className="grid grid-cols-5 text-[12px] uppercase tracking-wider text-muted-foreground border-b border-hairline">
              <div className="px-5 py-4">Capacidade</div>
              {heads.map((h, i) => (
                <div
                  key={h}
                  className={`px-5 py-4 text-center ${i === heads.length - 1 ? "text-foreground font-semibold" : ""}`}
                >
                  {h}
                </div>
              ))}
            </div>
            {rows.map(([label, ...cells], r) => (
              <div key={r} className={`grid grid-cols-5 text-[13px] ${r % 2 ? "bg-white/[0.015]" : ""}`}>
                <div className="px-5 py-3.5">{label as string}</div>
                {(cells as boolean[]).map((v, i) => (
                  <div key={i} className="px-5 py-3.5 flex justify-center">
                    {v ? (
                      <div className={`h-6 w-6 rounded-md flex items-center justify-center ${i === 3 ? "bg-teal/20" : "bg-white/5"}`}>
                        <Check className={`h-3.5 w-3.5 ${i === 3 ? "text-teal" : "text-muted-foreground"}`} />
                      </div>
                    ) : (
                      <div className="h-6 w-6 rounded-md flex items-center justify-center bg-white/[0.02]">
                        <Minus className="h-3.5 w-3.5 text-muted-foreground/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECURITY ---------------- */
function Security() {
  const items = [
    { i: ShieldCheck, t: "LGPD por design", d: "Consentimento, minimização e trilha de dados." },
    { i: Database, t: "Backups & DR", d: "Redundância multi-região, RPO baixo." },
    { i: Activity, t: "Logs & auditoria", d: "Rastreabilidade completa por usuário e ação." },
    { i: Lock, t: "Criptografia", d: "Dados em trânsito e em repouso." },
    { i: KeyRound, t: "Permissões granulares", d: "Perfis, escopos e SSO." },
    { i: Globe, t: "Alta disponibilidade", d: "99,99% de uptime, escalabilidade horizontal." },
  ];
  return (
    <section id="seguranca" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 radial-brand opacity-30 pointer-events-none" />
      <div className="container-page relative">
        <Reveal>
          <SectionTitle
            kicker="Segurança & governança"
            title={<>Infraestrutura pensada para <span className="gradient-text">operações críticas</span>.</>}
          />
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 60}>
              <div className="rounded-2xl hairline bg-white/[0.02] p-6 h-full">
                <div className="h-10 w-10 rounded-xl bg-white/[0.03] hairline flex items-center justify-center">
                  <it.i className="h-4.5 w-4.5 text-teal" />
                </div>
                <div className="mt-5 text-[15px] font-semibold">{it.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{it.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    {
      n: "Marina Duarte", r: "COO, Aurora Incorporadora",
      q: "Substituímos cinco sistemas e triplicamos a velocidade do funil comercial em três meses.",
      m: "+312% conversão de reservas",
    },
    {
      n: "Rafael Menezes", r: "Diretor Comercial, Vetorial Indústria",
      q: "A IA da IPAXIS conhece nosso catálogo melhor que a maioria dos vendedores. E nunca dorme.",
      m: "24/7 atendimento automatizado",
    },
    {
      n: "Camila Prado", r: "CEO, Grupo Solaris",
      q: "Finalmente temos uma visão executiva em tempo real. Deixamos de decidir no achismo.",
      m: "-68% tempo de fechamento de mês",
    },
  ];
  return (
    <section id="clientes" className="py-28">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            kicker="Clientes"
            title={<>Empresas que operam com <span className="gradient-text">inteligência de dados</span>.</>}
          />
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <Reveal key={t.n} delay={i * 80}>
              <figure className="rounded-2xl hairline bg-white/[0.02] p-6 h-full flex flex-col">
                <blockquote className="text-[15px] leading-relaxed text-foreground/90">
                  “{t.q}”
                </blockquote>
                <div className="mt-6 pt-6 border-t border-hairline flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand via-sky to-teal" />
                  <div>
                    <div className="text-[13px] font-medium">{t.n}</div>
                    <div className="text-[11px] text-muted-foreground">{t.r}</div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-teal/10 border border-teal/20 px-3 py-2 text-[11px] text-teal">
                  {t.m}
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const qs = [
    ["O que a IPAXIS entrega, na prática?", "Um sistema operacional empresarial que unifica CRM, IA, Automação, Financeiro, Dashboards e Workflows em uma única plataforma."],
    ["A IPAXIS substitui meu CRM atual?", "Sim. E também seu WhatsApp, seu BI, sua automação e boa parte do seu ERP operacional. Tudo em um único ecossistema."],
    ["Preciso de equipe técnica para implantar?", "Não. Nossos construtores visuais permitem que sua equipe modele fluxos, formulários e dashboards sem código."],
    ["Como funciona a Inteligência Artificial da IPAXIS?", "Treinamos a IA com seus documentos, políticas, produtos, contratos e regras. Ela responde exatamente conforme sua empresa determina."],
    ["A IA conversa com meus clientes no WhatsApp?", "Sim. Atende, qualifica, agenda, envia propostas, transfere para humano quando necessário e atualiza o CRM automaticamente."],
    ["A plataforma se adapta ao meu segmento?", "Sim. Ativamos módulos, vocabulário e indicadores específicos para incorporadoras, indústrias, serviços, saúde, jurídico e mais."],
    ["Consigo criar meus próprios dashboards?", "Sim. O Dashboard Builder permite montar visões executivas, operacionais e por área com poucos cliques."],
    ["A IPAXIS tem API?", "Sim. Somos API-first, com webhooks e integrações prontas para os principais ERPs, gateways e canais."],
    ["Como funciona a segurança dos dados?", "Criptografia em trânsito e em repouso, backups multi-região, logs de auditoria e conformidade com a LGPD."],
    ["Vocês suportam multiempresa?", "Sim. Você opera múltiplas empresas, filiais, marcas ou unidades de negócio na mesma instância."],
    ["Quanto tempo leva a implantação?", "Projetos típicos entram em produção entre 2 e 6 semanas, dependendo da complexidade dos fluxos."],
    ["Vocês migram meus dados atuais?", "Sim. Temos processo estruturado de migração assistida a partir de planilhas, CRMs, ERPs e bases legadas."],
    ["Como é o modelo de cobrança?", "Cobrança por empresa e por usuário ativo, com pacotes de IA e automação sob medida para o volume da operação."],
    ["A plataforma funciona offline?", "Funciona em PWA com resiliência a quedas de conexão nas telas críticas de campo."],
    ["Vocês oferecem SLA?", "Sim, com SLA contratual de disponibilidade, suporte e tempo de resposta."],
    ["Consigo controlar permissões por usuário?", "Sim, com granularidade por módulo, campo, ação e escopo (empresa, filial, equipe, cliente)."],
    ["A IPAXIS emite documentos e contratos?", "Sim, com geração, assinatura eletrônica, versionamento e trilha de auditoria."],
    ["Vocês possuem aplicativo?", "Sim, iOS e Android, com paridade das telas essenciais e notificações em tempo real."],
    ["Como é o suporte?", "Suporte humano por chat, e-mail e reuniões, além de assistente IA interno para dúvidas operacionais."],
    ["Como iniciar?", "Solicite uma demonstração. Em uma sessão de 30 minutos mostramos a plataforma aplicada ao seu segmento."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            kicker="Perguntas frequentes"
            title={<>Tudo o que você precisa saber para <span className="gradient-text">começar</span>.</>}
          />
        </Reveal>
        <div className="mt-12 grid lg:grid-cols-2 gap-3">
          {qs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={(i % 6) * 30}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left rounded-2xl hairline bg-white/[0.02] p-5 hover:bg-white/[0.04] transition"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="text-[14px] font-medium">{q}</div>
                    <div className={`h-6 w-6 rounded-md hairline flex items-center justify-center transition ${isOpen ? "bg-brand/20" : ""}`}>
                      {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </div>
                  </div>
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden text-[13px] text-muted-foreground leading-relaxed">
                      {a}
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section id="contato" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 radial-brand opacity-70 pointer-events-none" />
      <div className="container-page relative">
        <Reveal>
          <div className="rounded-3xl glass p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
            <Kicker><Zap className="h-3 w-3" /> Comece agora</Kicker>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Transforme sua empresa <br className="hidden sm:block" />
              através da <span className="gradient-text">inteligência</span>.
            </h2>
            <p className="mt-6 text-[16px] text-muted-foreground max-w-2xl mx-auto">
              Solicite uma demonstração. Em 30 minutos, mostramos como a IPAXIS
              se aplica à realidade da sua empresa.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:contato@ipaxis.com"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-brand-foreground glow-brand hover:brightness-110 transition"
              >
                Solicitar demonstração
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#modulos"
                className="inline-flex items-center gap-2 rounded-full hairline px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition"
              >
                Conhecer plataforma
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const cols: { t: string; l: { label: string; href: string }[] }[] = [
    {
      t: "Plataforma",
      l: [
        { label: "CRM", href: "#modulos" },
        { label: "IA Corporativa", href: "#ia" },
        { label: "Automação", href: "#automacao" },
        { label: "Dashboards", href: "#builder" },
        { label: "Workflow", href: "#builder" },
        { label: "Financeiro", href: "#modulos" },
      ],
    },
    {
      t: "Segmentos",
      l: [
        { label: "Incorporadoras", href: "#segmentos" },
        { label: "Indústrias", href: "#segmentos" },
        { label: "Serviços", href: "#segmentos" },
        { label: "Saúde", href: "#segmentos" },
        { label: "Educação", href: "#segmentos" },
        { label: "Agronegócio", href: "#segmentos" },
      ],
    },
    {
      t: "Empresa",
      l: [
        { label: "Sobre", href: "#sobre" },
        { label: "Clientes", href: "#clientes" },
        { label: "Parceiros", href: "#contato" },
        { label: "Carreiras", href: "mailto:carreiras@ipaxis.com" },
        { label: "Imprensa", href: "mailto:imprensa@ipaxis.com" },
        { label: "Contato", href: "#contato" },
      ],
    },
    {
      t: "Recursos",
      l: [
        { label: "Documentação", href: "#modulos" },
        { label: "API", href: "#modulos" },
        { label: "Central de ajuda", href: "#faq" },
        { label: "Status", href: "#seguranca" },
        { label: "Comparativo", href: "#comparar" },
        { label: "Segurança", href: "#seguranca" },
      ],
    },
  ];
  const socials: { s: string; href: string }[] = [
    { s: "in", href: "https://www.linkedin.com/" },
    { s: "ig", href: "https://www.instagram.com/" },
  ];
  return (
    <footer id="sobre" className="pt-20 pb-10 border-t border-hairline">
      <div className="container-page">
        <div className="grid lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <Logo />
              <span className="text-[15px] font-semibold tracking-tight">IPAXIS</span>
            </a>
            <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Sistema operacional inteligente para empresas. Unindo CRM, IA,
              Automação e Gestão em um único ecossistema.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.s}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-9 w-9 rounded-lg hairline bg-white/[0.02] flex items-center justify-center text-[10px] uppercase text-muted-foreground hover:text-foreground transition"
                >
                  {s.s}
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{c.t}</div>
              <ul className="mt-4 space-y-2.5">
                {c.l.map((i) => (
                  <li key={i.label}>
                    <a href={i.href} className="text-[13px] text-foreground/80 hover:text-foreground transition">
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-6 border-t border-hairline flex flex-wrap items-center justify-between gap-4 text-[11px] text-muted-foreground">
          <div>© {new Date().getFullYear()} IPAXIS. Todos os direitos reservados.</div>
          <div className="flex gap-5">
            <a href="#seguranca" className="hover:text-foreground">Política de privacidade</a>
            <a href="#seguranca" className="hover:text-foreground">Termos</a>
            <a href="#seguranca" className="hover:text-foreground">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


/* ---------------- PAGE ---------------- */
function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <Solution />
      <Modules />
      <AISection />
      <Automation />
      <Builder />
      <Segments />
      <Compare />
      <Security />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
