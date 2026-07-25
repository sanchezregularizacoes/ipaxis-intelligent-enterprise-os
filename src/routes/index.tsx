import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight, Bot, Workflow, ShieldCheck, MessageSquare, FileText, Users,
  Building2, Check, X, Plus, Minus, Menu, Database, Layers, Lock,
  BarChart3, Wand2, KeyRound, Calendar, DollarSign, FileSignature,
  Bell, Rocket, ChevronRight, Home as HomeIcon, HardHat, Boxes,
  LineChart, GitBranch, Globe, Sparkles, Cpu, Activity,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import ipaxisMark from "@/assets/ipaxis-mark.png.asset.json";

const ipaxisMarkUrl = `https://ipaxis-evolve.lovable.app${ipaxisMark.url}`;

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "IPAXIS — Plataforma operacional para incorporadoras e construtoras" },
      {
        name: "description",
        content:
          "CRM de reservas, IA comercial, automação, financeiro de comissões e dashboards de VGV em uma única plataforma — feita para o ciclo de incorporação e vendas.",
      },
      { property: "og:title", content: "IPAXIS — Plataforma operacional para incorporadoras e construtoras" },
      { property: "og:description", content: "Do lead à entrega das chaves em um único ecossistema. CRM, IA, automação e financeiro para incorporadoras e construtoras." },
    ],
  }),
});

/* ---------------- LOGO ---------------- */
function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return <img src={ipaxisMarkUrl} alt="IPAXIS" className={`${className} object-contain`} draggable={false} />;
}

/* ---------------- NAV ---------------- */
const NAV_LINKS = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "IA", href: "#ia" },
  { label: "Assistentes", href: "#assistentes" },
  { label: "Automação", href: "#automacao" },

  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Builder", href: "#builder" },
  { label: "Implantação", href: "#implantacao" },
  { label: "Segurança", href: "#seguranca" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-hairline" : ""
      }`}
    >
      <div className="container-page flex h-16 items-center gap-3 sm:gap-6">
        <a href="#top" className="flex items-center gap-2 sm:gap-2.5 shrink-0 min-w-0">
          <Logo className="h-7 w-7 sm:h-8 sm:w-8" />
          <span className="font-display text-[14px] sm:text-[15px] font-semibold tracking-tight">IPAXIS</span>
        </a>

        <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center min-w-0">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden xl:flex items-center gap-2 shrink-0 ml-auto">
          <a
            href="https://elevatev.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-[13px] font-medium text-foreground hover:bg-brand/20 hover:border-brand/60 transition"
          >
            Entrar
          </a>
          <a
            href="#contato"
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[13px] font-medium text-brand-foreground shadow-[0_8px_24px_-8px_rgba(36,123,255,0.6)] hover:brightness-110 transition whitespace-nowrap"
          >
            Solicitar demonstração
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <button className="xl:hidden p-2 rounded-md hairline ml-auto" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <Menu className="h-4 w-4" />
        </button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-hairline bg-background/95 backdrop-blur-xl">
          <div className="container-page py-3 flex flex-col">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm text-muted-foreground">
                {l.label}
              </a>
            ))}
            <a
              href="https://elevatev.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full border border-brand/40 bg-brand/10 px-4 py-2.5 text-sm font-medium text-foreground"
            >
              Entrar
            </a>
            <a
              href="#contato"
              onClick={() => setOpen(false)}
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

/* ---------------- SECTION SHELL ---------------- */
function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: ReactNode; description?: ReactNode }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">{title}</h2>
      {description && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 radial-brand pointer-events-none" />
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
                Para incorporadoras e construtoras
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display mt-6 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.02]">
                Transformando processos em <span className="gradient-text">inteligência</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                A plataforma operacional que conecta CRM de reservas, IA comercial, automação e financeiro em um único ecossistema — pensada para o ciclo de incorporação e vendas.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contato" className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-brand-foreground shadow-[0_16px_40px_-16px_rgba(36,123,255,0.8)] hover:brightness-110 transition">
                  Solicitar demonstração
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#plataforma" className="inline-flex items-center gap-2 rounded-full hairline px-5 py-3 text-sm font-medium hover:bg-white/5 transition">
                  Explorar a plataforma
                </a>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-teal" /> LGPD por design</span>
                <span className="inline-flex items-center gap-1.5"><Globe className="h-3.5 w-3.5 text-teal" /> API-first</span>
                <span className="inline-flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5 text-teal" /> Feita para incorporação</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  const orbit = [
    { icon: Users, label: "CRM", angle: 0 },
    { icon: Bot, label: "IA", angle: 60 },
    { icon: DollarSign, label: "Financeiro", angle: 120 },
    { icon: BarChart3, label: "Dashboards", angle: 180 },
    { icon: FileSignature, label: "Contratos", angle: 240 },
    { icon: Workflow, label: "Automação", angle: 300 },
  ];
  return (
    <div className="relative aspect-[5/4] w-full max-w-[560px] mx-auto px-6 sm:px-8">
      {/* Orbit ring */}
      <div className="absolute inset-10 sm:inset-12 rounded-full border border-hairline animate-[spin_60s_linear_infinite]" style={{ animationDirection: "reverse" }}>
        {orbit.map((o, i) => (
          <div
            key={i}
            className="absolute inset-0 pointer-events-none"
            style={{ transform: `rotate(${o.angle}deg)` }}
          >
            <div
              className="absolute left-1/2 top-0"
              style={{ transform: `translateX(-50%) rotate(${-o.angle}deg)` }}
            >
              <div className="glass rounded-lg sm:rounded-xl px-2 py-1 sm:px-2.5 sm:py-1.5 flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-foreground/90 shadow-lg">
                <o.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-teal" />
                {o.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Central dashboard card */}
      <div className="absolute inset-16 sm:inset-20 md:inset-24 rounded-2xl glass p-3 sm:p-4 shadow-2xl glow-brand">
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 truncate"><span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse shrink-0" /> Empreendimento Aurora</span>
          <span className="shrink-0 ml-2">Hoje</span>
        </div>
        <div className="mt-2 sm:mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">
          <MiniStat label="VGV mês" value="R$ 42,8M" trend="+12%" />
          <MiniStat label="Reservas" value="38" trend="+7" />
          <MiniStat label="Velocidade" value="1,8 u/dia" trend="+0,3" />
        </div>
        <div className="mt-2 sm:mt-3 rounded-lg bg-background/40 p-2 sm:p-2.5 border border-hairline">
          <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Funil de vendas</div>
          <div className="grid grid-cols-6 gap-1">
            {["Novo","Contato","Qualif.","Proposta","Reserva","Contrato"].map((s, i) => (
              <div key={s} className="flex flex-col items-center gap-1 min-w-0">
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full gradient-brand" style={{ width: `${100 - i * 14}%` }} />
                </div>
                <span className="hidden sm:block text-[9px] text-muted-foreground truncate w-full text-center">{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 hidden sm:grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-background/40 p-2 border border-hairline">
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground"><MessageSquare className="h-3 w-3 text-teal" /> IA no WhatsApp</div>
            <div className="mt-1 text-[11px] text-foreground/90">"Torre B, 3 dorm., R$ 720k. Posso agendar a visita?"</div>
          </div>
          <div className="rounded-lg bg-background/40 p-2 border border-hairline">
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground"><DollarSign className="h-3 w-3 text-teal" /> Comissões hoje</div>
            <div className="mt-1 text-[11px] text-foreground/90">R$ 128.400 · 12 corretores</div>
          </div>
        </div>
      </div>

      {/* Floating status pill */}
      <div className="absolute top-0 right-2 sm:-top-2 sm:right-4 glass rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-[11px] flex items-center gap-1.5 sm:gap-2 animate-float">
        <Bell className="h-3 w-3 text-teal" />
        <span className="hidden sm:inline">Nova reserva · Unidade 1204</span>
        <span className="sm:hidden">Nova reserva</span>
      </div>
    </div>

  );
}

function MiniStat({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-lg bg-background/40 p-2 border border-hairline">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-0.5 font-display text-sm font-semibold">{value}</div>
      <div className="text-[10px] text-teal">{trend}</div>
    </div>
  );
}

/* ---------------- PROBLEMA ---------------- */
function Problema() {
  const items = [
    { icon: Layers, title: "Espelho de vendas em planilha", desc: "Cópias desatualizadas, unidades vendidas em duplicidade, retrabalho entre comercial e financeiro." },
    { icon: Users, title: "CRM genérico que não entende unidade", desc: "Ferramentas pensadas para vendas B2B, sem torre, bloco, tipologia ou tabela vigente." },
    { icon: MessageSquare, title: "WhatsApp fora do CRM", desc: "Corretor conversa em conta pessoal, histórico se perde e o lead nunca chega ao funil." },
    { icon: DollarSign, title: "Comissão calculada no Excel", desc: "Regras complexas por corretor e imobiliária parceira que ninguém consegue auditar." },
    { icon: HardHat, title: "Obra e vendas desconectadas", desc: "Cronograma físico-financeiro em uma ferramenta, entrega e repasse em outra." },
    { icon: Activity, title: "Decisão com dado velho", desc: "VGV do mês fechado só na virada. Diretoria decide olhando o passado." },
  ];
  return (
    <section className="relative py-16 sm:py-24 border-t border-hairline">
      <div className="container-page">
        <SectionHeader
          eyebrow="A nova realidade"
          title={<>A operação da sua incorporadora <span className="text-muted-foreground">roda em dezenas de ferramentas desconectadas.</span></>}
          description="Cada sistema gera retrabalho, atraso entre reserva e contrato, e decisões tomadas com dados desatualizados. A IPAXIS nasceu para eliminar essa fragmentação especificamente no ciclo de incorporação e vendas."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 60}>
              <div className="h-full rounded-2xl hairline p-6 bg-surface/40 hover:bg-surface/70 transition">
                <it.icon className="h-5 w-5 text-teal" />
                <h3 className="font-display mt-4 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ECOSSISTEMA ---------------- */
function Ecossistema() {
  const nodes = [
    { icon: Users, label: "CRM de Reservas" },
    { icon: Bot, label: "IA Comercial" },
    { icon: DollarSign, label: "Financeiro" },
    { icon: Workflow, label: "Automação" },
    { icon: BarChart3, label: "Dashboards" },
    { icon: FileSignature, label: "Contratos" },
    { icon: Globe, label: "API/Integrações" },
    { icon: HardHat, label: "Obra & Vendas" },
  ];
  return (
    <section className="relative py-16 sm:py-24 border-t border-hairline overflow-hidden">
      <div className="absolute inset-0 radial-brand opacity-40 pointer-events-none" />
      <div className="container-page relative">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
            Ecossistema IPAXIS
          </div>
          <h2 className="font-display mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] whitespace-normal">
            <span className="block">Uma base de dados.</span>
            <span className="block">Uma inteligência.</span>
            <span className="block gradient-text">Uma plataforma.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">Tudo o que sua incorporadora precisa em um único núcleo — conectado por natureza, não por integração improvisada.</p>
        </div>

        <div className="relative mt-16 aspect-square w-full max-w-2xl mx-auto px-8 sm:px-12">
          <div className="absolute inset-[calc(2rem+15%)] sm:inset-1/4 rounded-full border border-hairline" />
          <div className="absolute inset-8 sm:inset-8 rounded-full border border-hairline" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative rounded-2xl glass p-4 sm:p-6 glow-brand flex items-center gap-2 sm:gap-3">
              <Logo className="h-7 w-7 sm:h-9 sm:w-9" />
              <div>
                <div className="font-display text-xs sm:text-sm font-semibold">IPAXIS Core</div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground">Núcleo operacional</div>
              </div>
            </div>
          </div>
          {nodes.map((n, i) => {
            const angle = (i / nodes.length) * 360;
            return (
              <div
                key={n.label}
                className="absolute inset-8 sm:inset-12 pointer-events-none"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div
                  className="absolute left-1/2 top-0 pointer-events-auto"
                  style={{ transform: `translateX(-50%) rotate(${-angle}deg)` }}
                >
                  <div className="glass rounded-lg sm:rounded-xl px-2 py-1 sm:px-3 sm:py-2 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs shadow-lg">
                    <n.icon className="h-3 w-3 sm:h-4 sm:w-4 text-teal shrink-0" />
                    <span className="whitespace-nowrap">{n.label}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ---------------- COMO FUNCIONA ---------------- */
function ComoFunciona() {
  const steps = [
    { title: "Entendemos sua operação", desc: "Diagnóstico do funil, do time e das ferramentas atuais.", icon: Sparkles },
    { title: "Mapeamos o funil e o espelho", desc: "Cada etapa do lead até o contrato assinado.", icon: GitBranch },
    { title: "Personalizamos por empreendimento", desc: "Torres, blocos, unidades, tabela vigente.", icon: Boxes },
    { title: "Treinamos sua IA", desc: "Memoriais, políticas comerciais, tabela e minutas.", icon: Bot },
    { title: "Automatizamos comercial e financeiro", desc: "Distribuição, follow-up, comissão, boletos.", icon: Workflow },
    { title: "Acompanhamos a evolução", desc: "Melhoria contínua a cada lançamento.", icon: LineChart },
  ];
  return (
    <section className="relative py-16 sm:py-24 border-t border-hairline">
      <div className="container-page">
        <SectionHeader eyebrow="Como funciona" title={<>Do diagnóstico à evolução — <span className="gradient-text">sem virar projeto de TI</span>.</>} />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="h-full rounded-2xl hairline p-6 bg-surface/40">
                <div className="flex items-center justify-between">
                  <s.icon className="h-5 w-5 text-teal" />
                  <span className="font-display text-2xl font-semibold text-muted-foreground/50">0{i + 1}</span>
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- IMPLANTAÇÃO ---------------- */
function Implantacao() {
  const phases = [
    "Diagnóstico do funil, espelho de vendas e sistemas atuais",
    "Modelagem de empreendimentos, torres e unidades",
    "Parametrização de comissionamento e regras comerciais",
    "Migração da base atual (leads, unidades, contratos)",
    "Treinamento da IA com tabela de vendas, memorial e políticas",
    "Go Live acompanhado pela equipe IPAXIS",
    "Suporte evolutivo contínuo conforme novos lançamentos",
  ];
  return (
    <section id="implantacao" className="relative py-16 sm:py-24 border-t border-hairline">
      <div className="container-page grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Implantação"
            title={<>Sua operação no ar <span className="gradient-text">com método</span>.</>}
            description="Um processo estruturado, conduzido por especialistas em incorporação — não um onboarding genérico. Você não precisa de equipe técnica para começar."
          />
        </div>
        <div className="lg:col-span-7">
          <ol className="relative border-l border-hairline pl-6 space-y-5">
            {phases.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 50}>
                <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full gradient-brand ring-4 ring-background" />
                <div className="rounded-xl hairline bg-surface/40 p-4">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Fase {String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-1 font-display text-base font-semibold">{p}</div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PLATAFORMA (MÓDULOS) ---------------- */
function Plataforma() {
  const groups = [
    {
      title: "Relacionamento",
      icon: Users,
      items: ["CRM de Reservas", "Leads", "Corretores e imobiliárias parceiras", "Clientes", "Agenda de visitas"],
    },
    {
      title: "Operação",
      icon: Workflow,
      items: ["Espelho de vendas em tempo real", "Workflows", "Tarefas", "Documentos", "Assinatura eletrônica de contratos", "Central de arquivos", "Notificações"],
    },
    {
      title: "Financeiro",
      icon: DollarSign,
      items: ["Comissionamento", "Recebíveis", "Contas a pagar", "Fluxo de caixa por empreendimento", "Conciliação", "Boletos"],
    },
    {
      title: "Analytics / BI",
      icon: BarChart3,
      items: ["Dashboard de VGV", "Velocidade de vendas", "KPIs por torre/empreendimento", "Visão em tempo real para CEO, diretores e obra"],
    },
    {
      title: "Construtores visuais",
      icon: Wand2,
      items: ["Workflow Builder", "Dashboard Builder", "Form Builder", "Card Builder", "Report Builder", "Permission Builder"],
    },
    {
      title: "Integrações",
      icon: Globe,
      items: ["API", "Webhooks", "WhatsApp", "E-mail", "SMS", "Portais (Viva Real, Zap, OLX)", "ERPs de construção"],
    },
    {
      title: "Governança",
      icon: ShieldCheck,
      items: ["LGPD", "Logs", "Auditoria", "Permissões granulares", "Multiempreendimento", "Multiusuário", "SSO"],
    },
    {
      title: "Plataforma",
      icon: Cpu,
      items: ["Aplicativo iOS/Android", "PWA", "Multi-dispositivo", "Alta disponibilidade", "Escalabilidade"],
    },
  ];
  return (
    <section id="plataforma" className="relative py-16 sm:py-24 border-t border-hairline">
      <div className="container-page">
        <SectionHeader
          eyebrow="Plataforma"
          title={<>Todos os módulos que a operação de <span className="gradient-text">incorporação</span> pede — em um único lugar.</>}
          description="Cada módulo foi desenhado para o vocabulário do setor: torre, bloco, unidade, tipologia, tabela vigente, VGV, repasse, comissão."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 40}>
              <div className="h-full rounded-2xl hairline bg-surface/40 p-5 hover:bg-surface/70 transition">
                <div className="inline-flex items-center gap-2 rounded-lg gradient-brand/10 p-2">
                  <g.icon className="h-4 w-4 text-teal" />
                </div>
                <h3 className="font-display mt-4 text-base font-semibold">{g.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="text-xs text-muted-foreground flex items-start gap-2">
                      <ChevronRight className="h-3 w-3 mt-0.5 text-teal shrink-0" />
                      <span>{it}</span>
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

/* ---------------- IA ---------------- */
function IA() {
  const corporativa = [
    "Consulta documentos e memoriais descritivos",
    "Interpreta contratos e minutas, sinaliza cláusulas fora do padrão",
    "Resume reuniões de repasse de obra e comitê comercial, gera tarefas",
    "Analisa VGV, velocidade de vendas, inadimplência e sinaliza desvios",
    "Atende corretores, obra e financeiro como assistente interno",
    "Faz análise comportamental de leads e clientes",
  ];
  const comercial = [
    "Responde interessados sobre unidade, metragem e valor em tempo real, 24/7",
    "Qualifica lead, trata objeções e agenda visita",
    "Atualiza o CRM e notifica o corretor responsável",
    "Dá suporte à imobiliária parceira sobre disponibilidade e tabela vigente",
    "Faz follow-up e reativação de leads parados",
    "Distribui leads entre corretores por regra ou fila",
    "Transfere para atendimento humano no momento certo",
  ];
  return (
    <section id="ia" className="relative py-16 sm:py-24 border-t border-hairline overflow-hidden">
      <div className="absolute inset-0 radial-brand opacity-30 pointer-events-none" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Inteligência Artificial"
          title={<>Duas IAs. Um único cérebro <span className="gradient-text">treinado no seu empreendimento</span>.</>}
          description="A IPAXIS opera duas frentes de IA que se conversam — uma para dentro da operação, outra para o cliente final e a imobiliária parceira."
        />
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-2xl hairline bg-surface/40 p-6 h-full">
              <div className="flex items-center gap-3">
                <div className="rounded-lg gradient-brand p-2"><Cpu className="h-4 w-4 text-white" /></div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">IA Corporativa</div>
                  <h3 className="font-display text-xl font-semibold">Aprende toda a operação da incorporadora</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Documentos, contratos, memoriais, políticas comerciais, procedimentos de obra — a IA lê e opera junto com o time interno.</p>
              <ul className="mt-5 space-y-2">
                {corporativa.map((c) => (
                  <li key={c} className="text-sm flex items-start gap-2"><Check className="h-4 w-4 text-teal mt-0.5 shrink-0" /><span>{c}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl hairline bg-surface/40 p-6 h-full">
              <div className="flex items-center gap-3">
                <div className="rounded-lg gradient-brand p-2"><MessageSquare className="h-4 w-4 text-white" /></div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">IA Comercial · SDR IA</div>
                  <h3 className="font-display text-xl font-semibold">Um SDR virtual que nunca dorme</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Atua principalmente no WhatsApp, no site e nos portais. Qualifica, agenda e devolve para o corretor no momento certo.</p>
              <ul className="mt-5 space-y-2">
                {comercial.map((c) => (
                  <li key={c} className="text-sm flex items-start gap-2"><Check className="h-4 w-4 text-teal mt-0.5 shrink-0" /><span>{c}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Chat mockup */}
        <Reveal delay={160}>
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl glass p-5">
            <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-2">
              <MessageSquare className="h-3.5 w-3.5 text-teal" /> WhatsApp · Empreendimento Aurora
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <ChatBubble side="in">Olá! Vi o anúncio do Aurora. Ainda tem 3 dormitórios na torre B?</ChatBubble>
              <ChatBubble side="out">Oi, Marina! Sim — temos 4 unidades disponíveis na torre B, 3 dorm., 92 a 108 m², a partir de R$ 720.000. Prefere visita presencial ou tour online?</ChatBubble>
              <ChatBubble side="in">Presencial, sábado de manhã.</ChatBubble>
              <ChatBubble side="out">Perfeito. Sábado, 10h, com o corretor Rafael. Já registrei sua reserva de horário e ele acabou de ser notificado. 🚀</ChatBubble>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChatBubble({ side, children }: { side: "in" | "out"; children: ReactNode }) {
  const isOut = side === "out";
  return (
    <div className={`flex ${isOut ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-[13px] ${isOut ? "gradient-brand text-white rounded-br-sm" : "bg-white/5 border border-hairline rounded-bl-sm"}`}>
        {children}
      </div>
    </div>
  );
}

/* ---------------- ASSISTENTES POR CARGO ---------------- */
function Assistentes() {
  const roles = [
    {
      icon: Users,
      title: "Assistente do Corretor",
      tag: "Operação de campo",
      bullets: [
        "Recebe áudio ou texto no WhatsApp e move o lead na esteira, cria tarefa, adiciona nota e agenda visita",
        "Envia a agenda do dia assim que o corretor inicia o expediente",
        "Alerta pró-ativamente sobre leads parados há 24h, 48h e 72h",
        "Tira dúvidas sobre unidades, tabela, condições comerciais e status de reserva",
      ],
    },
    {
      icon: HardHat,
      title: "Assistente do Gerente",
      tag: "Time comercial",
      bullets: [
        "Mostra performance individual dos corretores em tempo real",
        "Aponta gargalos do funil e etapas com maior queda de conversão",
        "Sugere redistribuição de leads e cobra follow-ups pendentes",
        "Prepara o briefing da reunião semanal de vendas",
      ],
    },
    {
      icon: Activity,
      title: "Assistente do Gestor",
      tag: "Operação e obra",
      bullets: [
        "Consolida status de obra, financeiro e comercial em um único brief",
        "Avisa quando um KPI sai da meta antes do fechamento do mês",
        "Cruza cronograma físico-financeiro com previsão de recebíveis",
        "Responde perguntas em linguagem natural sobre qualquer indicador",
      ],
    },
    {
      icon: LineChart,
      title: "Assistente do Diretor",
      tag: "Visão estratégica",
      bullets: [
        "Entrega leitura diária de VGV, velocidade de vendas e distratos",
        "Compara empreendimentos e safras de lançamento",
        "Simula cenários de preço, desconto e absorção",
        "Antecipa riscos comerciais e de fluxo de caixa",
      ],
    },
    {
      icon: Sparkles,
      title: "Assistente do CEO",
      tag: "Board & C-level",
      bullets: [
        "Briefing executivo por WhatsApp todas as manhãs",
        "Panorama consolidado de todas as unidades de negócio",
        "Insights estratégicos com base em dados históricos e de mercado",
        "Responde perguntas de board em segundos, sem depender do time",
      ],
    },
  ];

  return (
    <section id="assistentes" className="relative py-16 sm:py-24 border-t border-hairline overflow-hidden">
      <div className="absolute inset-0 radial-brand opacity-30 pointer-events-none" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Assistentes por cargo · exclusivo IPAXIS"
          title={<>Uma IA dedicada para <span className="gradient-text">cada função da sua operação</span>.</>}
          description="Cada pessoa da incorporadora — do corretor ao CEO — tem sua própria assistente no WhatsApp. Pró-ativa, contextual e treinada nos dados da operação. Nenhuma outra plataforma do setor entrega isso."
        />

        {/* Destaque do corretor — mockup WhatsApp */}
        <Reveal>
          <div className="mt-14 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full hairline bg-surface/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <MessageSquare className="h-3.5 w-3.5 text-teal" /> Direto pelo WhatsApp
              </div>
              <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold leading-tight">
                O corretor manda um áudio. <span className="gradient-text">A assistente executa no CRM.</span>
              </h3>
              <p className="mt-4 text-muted-foreground">
                Sem abrir sistema, sem preencher formulário. Mover lead, adicionar nota, criar tarefa, agendar visita, consultar status — tudo por conversa. E a assistente ainda avisa proativamente quando algo precisa de atenção.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {[
                  "Áudio ou texto — a IA transcreve, entende contexto e age",
                  "Agenda do dia entregue automaticamente ao iniciar o expediente",
                  "Alertas de leads parados há 24h / 48h / 72h",
                  "Lembretes de reunião, visita e retorno prometido ao cliente",
                  "Consulta de tabela, disponibilidade e comissão em segundos",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2"><Check className="h-4 w-4 text-teal mt-0.5 shrink-0" /><span>{b}</span></li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl glass p-5">
              <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-2">
                <MessageSquare className="h-3.5 w-3.5 text-teal" /> WhatsApp · Assistente do Corretor
              </div>
              <div className="mt-3 space-y-2 text-sm">
                <ChatBubble side="out">Bom dia, Rafael 👋 Hoje você tem 3 compromissos: visita Aurora 10h (Marina), call Horizonte 14h (João) e retorno prometido ao lead Camila até 17h.</ChatBubble>
                <ChatBubble side="out">⚠️ 4 leads seus estão parados há mais de 48h. O mais crítico é o Bruno Silva (proposta pendente há 3 dias).</ChatBubble>
                <ChatBubble side="in">🎙️ áudio · 0:12 — "manda uma nota no lead da Marina dizendo que ela confirmou a visita e move ela pra etapa de visita agendada"</ChatBubble>
                <ChatBubble side="out">Feito ✅ Nota adicionada e Marina movida para "Visita agendada". Também criei tarefa de confirmar visita amanhã 18h.</ChatBubble>
                <ChatBubble side="in">como tá minha conversão esse mês?</ChatBubble>
                <ChatBubble side="out">Você está em 18,4% (média do time: 14,2%). Fechou 3 reservas, 2 aguardam análise de crédito. Quer o detalhe por empreendimento?</ChatBubble>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grid de assistentes por cargo */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="rounded-2xl hairline bg-surface/40 p-6 h-full hover:bg-surface/60 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg gradient-brand p-2"><r.icon className="h-4 w-4 text-white" /></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{r.tag}</div>
                    <h4 className="font-display text-lg font-semibold">{r.title}</h4>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {r.bullets.map((b) => (
                    <li key={b} className="text-sm flex items-start gap-2"><Check className="h-3.5 w-3.5 text-teal mt-1 shrink-0" /><span className="text-muted-foreground">{b}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <Reveal delay={roles.length * 60}>
            <div className="rounded-2xl p-6 h-full gradient-brand text-white flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.14em] opacity-80">Pró-ativas por natureza</div>
                <h4 className="font-display text-lg font-semibold mt-1">Não esperam ser chamadas</h4>
                <p className="text-sm opacity-90 mt-3">
                  As assistentes monitoram a operação 24/7 e avisam antes do problema acontecer: lead esfriando, meta em risco, tarefa esquecida, cliente sem retorno.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                <Bell className="h-4 w-4" /> Alertas contextuais no WhatsApp
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


/* ---------------- AUTOMAÇÃO ---------------- */
function Automacao() {
  const steps = [
    { icon: Globe, label: "Lead", sub: "Site · Portal · WhatsApp" },
    { icon: Bot, label: "IA qualifica", sub: "Objeções e interesse" },
    { icon: Users, label: "CRM registra", sub: "Distribui ao corretor" },
    { icon: Calendar, label: "Agenda visita", sub: "Automático" },
    { icon: FileSignature, label: "Proposta", sub: "Reserva + comissão" },
    { icon: BarChart3, label: "VGV atualiza", sub: "Tempo real" },
    { icon: Bell, label: "Gestor notificado", sub: "Instantâneo" },
  ];
  return (
    <section id="automacao" className="relative py-16 sm:py-24 border-t border-hairline">
      <div className="container-page">
        <SectionHeader
          eyebrow="Automação"
          title={<>Do primeiro clique ao <span className="gradient-text">VGV atualizado</span>, sem toque humano onde não precisa.</>}
          description="Um fluxo comercial e financeiro que respira sozinho — o time só entra quando agrega valor."
        />
        <div className="mt-14">
          <div className="flex gap-3 overflow-x-auto pb-4 lg:grid lg:grid-cols-7 lg:overflow-visible">
            {steps.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="relative min-w-[180px] rounded-2xl hairline bg-surface/40 p-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg gradient-brand p-1.5"><s.icon className="h-3.5 w-3.5 text-white" /></div>
                    <span className="font-display text-sm font-semibold">{s.label}</span>
                  </div>
                  <div className="mt-2 text-[11px] text-muted-foreground">{s.sub}</div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-teal" />
                  )}
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
  const builders = [
    { icon: Workflow, name: "Workflow Builder", desc: "Desenhe processos de reserva, aprovação e repasse." },
    { icon: FileText, name: "Form Builder", desc: "Capte leads com formulários conectados ao CRM." },
    { icon: BarChart3, name: "Dashboard Builder", desc: "Monte dashboards de VGV, obra e financeiro." },
    { icon: Boxes, name: "Card Builder", desc: "Customize o card de unidade, lead ou contrato." },
    { icon: KeyRound, name: "Permission Builder", desc: "Regras por imobiliária, corretor ou diretoria." },
    { icon: Wand2, name: "Automation Builder", desc: "Regras condicionais, gatilhos e ações." },
  ];
  return (
    <section id="builder" className="relative py-16 sm:py-24 border-t border-hairline">
      <div className="container-page">
        <SectionHeader
          eyebrow="Builder"
          title={<>Adapte a plataforma <span className="gradient-text">sem escrever código</span>.</>}
          description="A sua operação muda a cada lançamento. Aqui você acompanha — sem depender de squad de tecnologia."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {builders.map((b, i) => (
            <Reveal key={b.name} delay={i * 60}>
              <div className="h-full rounded-2xl hairline bg-surface/40 p-6 hover:bg-surface/70 transition">
                <b.icon className="h-5 w-5 text-teal" />
                <h3 className="font-display mt-4 text-lg font-semibold">{b.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SEGMENTOS ---------------- */
function Segmentos() {
  const segs = [
    {
      icon: Building2,
      title: "Incorporadoras",
      bullets: [
        "Gestão completa de lançamento e pré-lançamento",
        "VGV e velocidade de vendas em tempo real",
        "Relacionamento com múltiplas imobiliárias parceiras",
        "Espelho de vendas único, sem risco de dupla reserva",
        "Comissionamento automático por regra comercial",
      ],
    },
    {
      icon: HardHat,
      title: "Construtoras",
      bullets: [
        "Integração entre obra e vendas em um único painel",
        "Cronograma físico-financeiro conectado ao caixa",
        "Repasse de unidades entregues sem retrabalho",
        "Dashboards de obra para gestor e diretoria",
        "Documentação e memoriais acessíveis à IA e ao time",
      ],
    },
  ];
  return (
    <section id="segmentos" className="relative py-16 sm:py-24 border-t border-hairline">
      <div className="container-page">
        <SectionHeader
          eyebrow="Segmentos"
          title={<>Feita para <span className="gradient-text">quem vive incorporação e construção</span>.</>}
          description="Não somos uma ferramenta genérica adaptada. A IPAXIS foi desenhada, do primeiro dia, para este setor."
        />
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {segs.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="h-full rounded-2xl hairline bg-surface/40 p-8 hover:bg-surface/70 transition">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl gradient-brand p-2.5"><s.icon className="h-5 w-5 text-white" /></div>
                  <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-teal mt-0.5 shrink-0" /><span>{b}</span></li>
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

/* ---------------- COMPARATIVO ---------------- */
function Comparativo() {
  const rows = [
    "Espelho de vendas em tempo real",
    "IA treinada no empreendimento",
    "Comissionamento automático",
    "Dashboard de VGV ao vivo",
    "Workflow sem código",
    "API para portais imobiliários",
    "LGPD e auditoria por usuário",
  ];
  const cols = [
    { name: "Planilhas", values: [false, false, false, false, false, false, false] },
    { name: "CRM genérico", values: [false, false, false, false, false, false, false] },
    { name: "ERP de construção", values: [false, false, "parcial", false, false, false, true] },
    { name: "IPAXIS", values: [true, true, true, true, true, true, true], highlight: true },
  ];
  return (
    <section id="comparar" className="relative py-16 sm:py-24 border-t border-hairline">
      <div className="container-page">
        <SectionHeader
          eyebrow="Comparativo"
          title={<>Por que <span className="gradient-text">IPAXIS</span> e não o que você já tem hoje?</>}
        />
        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr>
                <th className="text-left p-4 text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-normal">Recurso</th>
                {cols.map((c) => (
                  <th key={c.name} className={`p-4 text-center text-[13px] font-medium ${c.highlight ? "gradient-text font-display font-semibold" : "text-muted-foreground"}`}>{c.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r}>
                  <td className="p-4 border-t border-hairline font-medium">{r}</td>
                  {cols.map((c) => {
                    const v = c.values[i];
                    return (
                      <td key={c.name} className={`p-4 border-t border-hairline text-center ${c.highlight ? "bg-brand/5" : ""}`}>
                        {v === true ? <Check className="inline h-4 w-4 text-teal" /> : v === false ? <X className="inline h-4 w-4 text-muted-foreground/40" /> : <span className="text-xs text-muted-foreground">parcial</span>}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DIFERENCIAIS ---------------- */
function Diferenciais() {
  const items = [
    {
      icon: Bot,
      title: "Trio de IAs que conversam entre si",
      desc: "Enquanto outros CRMs oferecem 'um chatbot', a IPAXIS tem três inteligências trabalhando em conjunto: uma conversa com o cliente, outra analisa o comportamento dele, e a terceira domina cada empreendimento. O resultado é uma qualificação de lead no nível de um corretor sênior — em segundos.",
    },
    {
      icon: Activity,
      title: "IA proativa que cobra sua equipe",
      desc: "Você define a meta ('aumentar conversão em 20%'). A IA traça o plano, cobra corretores diariamente, escala para o gerente quando algo atrasa e reporta ao CEO sem você pedir. É como ter uma consultoria Falconi rodando dentro do CRM.",
    },
    {
      icon: Database,
      title: "Memória que aprende com cada conversa",
      desc: "Toda mensagem trocada, toda nota de visita, toda objeção do cliente vira conhecimento permanente da empresa. Se um corretor sair, o histórico e a inteligência ficam. Nenhum CRM imobiliário do Brasil faz isso hoje.",
    },
    {
      icon: GitBranch,
      title: "Conversa com o CV CRM sem trauma",
      desc: "Você não precisa trocar de sistema. A IPAXIS espelha e sincroniza com o CV CRM em tempo real — leads, funis, corretores e tags. Sua operação continua no que já conhece; a inteligência acontece por cima.",
    },
    {
      icon: FileSignature,
      title: "Espelho de vendas com IA que lê contratos",
      desc: "Torres, andares e unidades num painel único. Quando o corretor sobe o PDF assinado da reserva, uma IA de visão valida assinaturas, datas e campos automaticamente — reduzindo erros de estoque a praticamente zero.",
    },
    {
      icon: MessageSquare,
      title: "Proteção do WhatsApp da empresa",
      desc: "Uma das maiores dores de quem usa WhatsApp em massa é ter o número banido. A IPAXIS tem um motor de aquecimento inteligente que respeita ritmos humanos, protege a saúde do número e evita bloqueios.",
    },
    {
      icon: Rocket,
      title: "Nova incorporadora pronta em 1 clique",
      desc: "Cadastrou uma nova empresa? A plataforma já nasce com 13 módulos ativos, 12 assistentes de IA, funil completo, dashboards do CEO/Comercial/Administrativo e branding próprio. Zero configuração técnica.",
    },
    {
      icon: ShieldCheck,
      title: "Fim da guerra por lead entre House e Parceiros",
      desc: "Bloqueio automático de duplicidade por telefone (House) e nome+telefone (Parcerias), com fluxo de transferência aprovado pelo CEO. Acaba a briga interna que trava time comercial de incorporadora.",
    },
  ];
  return (
    <section id="diferenciais" className="relative py-16 sm:py-24 border-t border-hairline overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 -right-24 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
      </div>
      <div className="container-page">
        <SectionHeader
          eyebrow="Diferenciais · exclusivo IPAXIS"
          title={<>Por que a IPAXIS <span className="gradient-text">não é "mais um CRM"</span>.</>}
          description="A única plataforma brasileira com IA que opera sozinha no comercial de incorporadoras — não é chatbot, não é automação de e-mail, não é dashboard bonito. É um time digital trabalhando 24/7 ao lado dos seus corretores."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 60}>
                <div className="group relative h-full rounded-2xl border border-hairline bg-surface/60 p-6 backdrop-blur-sm transition hover:border-brand/40 hover:bg-surface">
                  <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(36,123,255,0.08), rgba(24,214,208,0.08))" }} />
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-brand text-white shadow-lg shadow-brand/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-tight">{it.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <div className="mt-14 rounded-3xl border border-hairline bg-surface/60 p-8 sm:p-10 backdrop-blur-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-foreground/90">
                <span className="text-muted-foreground">CV CRM, Facilita, Sienge, Kenlo — todos são bons no que fazem.</span>{" "}
                A <span className="gradient-text font-display font-semibold">IPAXIS</span> é a única que coloca IA operando de verdade sobre o que você já usa.
                <span className="mt-3 block text-sm text-muted-foreground">Agende uma demonstração e veja um time de IA qualificando um lead ao vivo.</span>
              </p>
              <a
                href="#contato"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:shadow-brand/50"
              >
                Quero ver funcionando <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SEGURANÇA ---------------- */
function Seguranca() {
  const items = [
    { icon: ShieldCheck, title: "LGPD por design", desc: "Consentimento, base legal, retenção e direitos do titular integrados à plataforma." },
    { icon: Lock, title: "Criptografia em trânsito e em repouso", desc: "Dados sensíveis protegidos no tráfego e no armazenamento." },
    { icon: Activity, title: "Logs e auditoria", desc: "Rastreabilidade por usuário e por ação — quem fez, o quê e quando." },
    { icon: Database, title: "Backups", desc: "Rotinas de backup gerenciadas para continuidade da operação." },
    { icon: KeyRound, title: "Permissões granulares", desc: "Controle por imobiliária, corretor, empreendimento e função." },
    { icon: Users, title: "SSO e multiusuário", desc: "Login corporativo e múltiplos empreendimentos em uma única conta." },
  ];
  return (
    <section id="seguranca" className="relative py-16 sm:py-24 border-t border-hairline">
      <div className="container-page">
        <SectionHeader
          eyebrow="Segurança"
          title={<>Segurança e conformidade <span className="gradient-text">no núcleo da plataforma</span>.</>}
          description="Sua base de leads, contratos e financeiro exige cuidado além do padrão. A IPAXIS foi construída com esse rigor desde o começo."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 50}>
              <div className="h-full rounded-2xl hairline bg-surface/40 p-6">
                <it.icon className="h-5 w-5 text-teal" />
                <h3 className="font-display mt-4 text-base font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EARLY ADOPTERS ---------------- */
function EarlyAdopters() {
  const cards = [
    { icon: Rocket, title: "Programa de early adopters", desc: "Estamos selecionando incorporadoras e construtoras para o lançamento — com estrutura de parceria e condições especiais." },
    { icon: Users, title: "Cocriação com o setor", desc: "Sua operação influencia diretamente o roadmap. Você não é mais um cliente na fila — é parceiro fundador." },
    { icon: ShieldCheck, title: "Sem promessas fabricadas", desc: "Ainda não temos cases publicáveis, e por isso não inventamos números. Quando houver, os depoimentos aqui serão reais e atribuídos." },
  ];
  return (
    <section id="clientes" className="relative py-16 sm:py-24 border-t border-hairline">
      <div className="container-page">
        <SectionHeader
          eyebrow="Em construção com os primeiros parceiros"
          title={<>Estamos escolhendo <span className="gradient-text">as primeiras incorporadoras</span> a operar na IPAXIS.</>}
          description="Se sua empresa quer entrar na primeira leva, este é o momento."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="h-full rounded-2xl hairline bg-surface/40 p-6">
                <c.icon className="h-5 w-5 text-teal" />
                <h3 className="font-display mt-4 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <a href="#contato" className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-brand-foreground shadow-[0_16px_40px_-16px_rgba(36,123,255,0.8)] hover:brightness-110 transition">
            Quero conversar sobre o programa
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    { q: "O que a IPAXIS entrega, na prática?", a: "Uma única plataforma operacional para incorporadoras e construtoras: CRM de reservas, IA comercial e corporativa, automação, financeiro de comissões e recebíveis, dashboards de VGV e obra, e workflows sem código." },
    { q: "A IPAXIS substitui meu CRM imobiliário atual?", a: "Sim. Substitui o CRM genérico e ainda incorpora o espelho de vendas, a IA no WhatsApp, o comissionamento e o financeiro — sem depender de integrações improvisadas." },
    { q: "Como funciona o espelho de vendas em tempo real?", a: "Cada unidade tem estado único (disponível, reservada, em proposta, vendida) sincronizado entre CRM, financeiro e portais. Sem risco de dupla reserva entre imobiliárias parceiras." },
    { q: "A IA conhece a tabela de vendas do meu empreendimento?", a: "Sim. Treinamos a IA com a tabela vigente, memorial descritivo, política comercial e minutas — ela responde ao lead usando os dados reais do seu lançamento." },
    { q: "Dá para gerenciar várias imobiliárias parceiras?", a: "Sim. Multiempresa, multiimobiliária e permissões granulares. Cada parceiro vê apenas o que deve ver, com regras de distribuição e comissão específicas." },
    { q: "Como funciona o comissionamento automático?", a: "Você parametriza regras por corretor, imobiliária, tipologia e etapa do funil. A IPAXIS calcula, provisiona no financeiro e libera conforme os gatilhos do contrato." },
    { q: "Preciso de equipe técnica para implantar?", a: "Não. A implantação é conduzida pela equipe IPAXIS. Seus usuários operam via interface visual — inclusive o Builder é sem código." },
    { q: "Quanto tempo leva a implantação?", a: "Varia conforme o porte e a quantidade de empreendimentos ativos. Definimos o cronograma no diagnóstico, sempre com foco em go live rápido e evolução contínua." },
    { q: "Vocês migram minha base atual de leads e unidades?", a: "Sim. Migração de leads, unidades, contratos, tabelas e histórico faz parte do processo padrão de implantação." },
    { q: "A plataforma se integra a portais imobiliários (Viva Real, Zap etc.)?", a: "Sim. Integrações nativas com os principais portais, além de API e webhooks para casos específicos." },
    { q: "Como funciona a segurança dos dados?", a: "LGPD por design, criptografia em trânsito e em repouso, logs e auditoria por usuário e ação, backups, permissões granulares e SSO." },
    { q: "Como é o modelo de cobrança?", a: "Definido em conversa, considerando porte da operação, número de empreendimentos, usuários e módulos utilizados. Sem letra miúda." },
    { q: "Como iniciar?", a: "Solicitando uma demonstração. Em seguida fazemos o diagnóstico e desenhamos a proposta de implantação." },
  ];
  return (
    <section id="faq" className="relative py-16 sm:py-24 border-t border-hairline">
      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHeader eyebrow="FAQ" title={<>Perguntas <span className="gradient-text">frequentes</span>.</>} description="Se ficou alguma dúvida, fale com o time — respondemos em horas úteis." />
        </div>
        <div className="lg:col-span-8">
          <div className="rounded-2xl hairline bg-surface/40 overflow-hidden">
            {items.map((it, i) => (
              <FAQItem key={it.q} q={it.q} a={it.a} last={i === items.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, last }: { q: string; a: string; last: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${!last ? "border-b border-hairline" : ""}`}>
      <button className="w-full flex items-center justify-between gap-4 p-5 text-left" onClick={() => setOpen((v) => !v)}>
        <span className="font-display text-[15px] font-medium">{q}</span>
        {open ? <Minus className="h-4 w-4 text-teal shrink-0" /> : <Plus className="h-4 w-4 text-teal shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}

/* ---------------- SOBRE ---------------- */
function Sobre() {
  return (
    <section id="sobre" className="relative py-16 sm:py-24 border-t border-hairline">
      <div className="container-page grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow="Sobre a IPAXIS" title={<>Nascida para <span className="gradient-text">incorporação e construção</span> — não para todos os setores.</>} />
        </div>
        <div className="lg:col-span-7 space-y-5 text-muted-foreground">
          <p><strong className="text-foreground font-display">Missão.</strong> Transformar processos em inteligência, dando às incorporadoras e construtoras uma plataforma única para vender e entregar mais rápido.</p>
          <p><strong className="text-foreground font-display">Visão.</strong> Ser o sistema operacional padrão do setor de incorporação e construção no Brasil.</p>
          <p><strong className="text-foreground font-display">Por que este foco.</strong> O ciclo de um empreendimento — do lançamento à entrega das chaves — tem particularidades que nenhuma ferramenta genérica endereça. Espelho de vendas, tabela vigente, comissionamento por imobiliária parceira, repasse, cronograma físico-financeiro. A IPAXIS foi desenhada, do primeiro dia, para este vocabulário.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA FINAL ---------------- */
function CTAFinal() {
  return (
    <section id="contato" className="relative py-20 sm:py-28 border-t border-hairline overflow-hidden">
      <div className="absolute inset-0 radial-brand opacity-60 pointer-events-none" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Sua incorporadora precisa de mais do que um CRM.<br />
            <span className="gradient-text">Precisa de uma plataforma inteligente para vender e entregar mais rápido.</span>

          </h2>
          <p className="mt-6 text-muted-foreground text-lg">Solicite uma demonstração e veja a IPAXIS operando com dados semelhantes aos do seu empreendimento.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:contato@ipaxis.com.br?subject=Solicitação%20de%20demonstração"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-brand-foreground shadow-[0_16px_40px_-16px_rgba(36,123,255,0.8)] hover:brightness-110 transition"
            >
              Solicitar demonstração
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="https://elevatev.lovable.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full hairline px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition">
              Entrar na plataforma
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const cols = [
    { title: "Empresa", links: [{ label: "Sobre", href: "#sobre" }, { label: "Contato", href: "#contato" }, { label: "Carreiras", href: "mailto:carreiras@ipaxis.com.br" }] },
    { title: "Plataforma", links: [{ label: "Módulos", href: "#plataforma" }, { label: "IA", href: "#ia" }, { label: "Automação", href: "#automacao" }, { label: "Builder", href: "#builder" }, { label: "Implantação", href: "#implantacao" }] },
    { title: "Segmentos", links: [{ label: "Incorporadoras", href: "#segmentos" }, { label: "Construtoras", href: "#segmentos" }] },
    { title: "Confiança", links: [{ label: "Segurança", href: "#seguranca" }, { label: "LGPD", href: "#seguranca" }, { label: "FAQ", href: "#faq" }] },
  ];
  return (
    <footer className="relative py-16 border-t border-hairline">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5">
              <Logo />
              <span className="font-display text-[15px] font-semibold tracking-tight">IPAXIS</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">A plataforma operacional para incorporadoras e construtoras — do lead à entrega das chaves.</p>
            <div className="mt-4 text-xs text-muted-foreground">contato@ipaxis.com.br</div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{c.title}</div>
                <ul className="mt-3 space-y-2">
                  {c.links.map((l) => (
                    <li key={l.label}><a href={l.href} className="text-sm text-foreground/80 hover:text-foreground transition">{l.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-hairline flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} IPAXIS. Todos os direitos reservados.</span>
          <span>Transformando processos em inteligência.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- PAGE ---------------- */
function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problema />
        <Ecossistema />
        <ComoFunciona />
        <Implantacao />
        <Plataforma />
        <IA />
        <Assistentes />
        <Automacao />

        <Builder />
        <Segmentos />
        <Diferenciais />
        <Comparativo />
        <Seguranca />
        <EarlyAdopters />
        <FAQ />
        <Sobre />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
