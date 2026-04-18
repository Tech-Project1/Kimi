import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Beaker,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Dna,
  FlaskConical,
  Layers3,
  Microscope,
  Orbit,
  RefreshCw,
  Recycle,
  ShieldCheck,
  Sparkles,
  ThermometerSun,
  Wind,
  Zap,
  TestTube2,
  ArrowRight,
  HeartPulse,
  Factory,
  Droplets,
  Leaf,
  Shield,
  Trophy,
  Flame,
} from "lucide-react";

const polymerTypes = {
  "Termoplastikë": {
    icon: Layers3,
    color: "from-cyan-400 via-sky-500 to-blue-700",
    summary:
      "Zbuten kur ngrohen dhe mund të riformohen disa herë. Janë shumë praktike për prodhim, ripërdorim dhe riciklim.",
    examples: ["PE", "PP", "PVC", "PET"],
    properties: ["Të riformueshëm", "Të lehtë", "Të përshtatshëm për riciklim"],
    uses: ["Shishe", "Paketim", "Tuba", "Pjesë teknike"],
  },
  "Termoreaktivë": {
    icon: ShieldCheck,
    color: "from-fuchsia-500 via-purple-600 to-indigo-700",
    summary:
      "Pas ngurtësimit krijojnë rrjete të forta që nuk shkrihen më. Janë shumë rezistentë ndaj nxehtësisë dhe deformimit.",
    examples: ["Epoksi", "Bakelit", "Melaminë", "Poliuretan i ngurtë"],
    properties: ["Shumë rezistentë", "Nuk riformohen", "Stabilitet i lartë"],
    uses: ["Izolim elektrik", "Ngjitës", "Kompozite", "Pajisje të forta"],
  },
  Elastomerë: {
    icon: RefreshCw,
    color: "from-amber-400 via-orange-500 to-red-600",
    summary:
      "Zgjaten dhe kthehen në formën fillestare. Janë idealë për materiale që kërkojnë fleksibilitet dhe amortizim.",
    examples: ["Goma natyrale", "Silikon", "SBR", "Neopren"],
    properties: ["Elasticitet", "Amortizim", "Rezistencë ndaj deformimit"],
    uses: ["Goma", "Vula", "Doreza", "Amortizues"],
  },
  "Biopolimerë": {
    icon: Recycle,
    color: "from-emerald-400 via-teal-500 to-green-700",
    summary:
      "Mund të jenë me origjinë biologjike ose biodegradueshëm. Janë shumë të rëndësishëm për materiale më të qëndrueshme.",
    examples: ["Celulozë", "Niseshte", "PLA", "Kitinë"],
    properties: ["Miqësorë me mjedisin", "Biodegradueshëm", "Të qëndrueshëm"],
    uses: ["Ambalazh", "Mjekësi", "Tekstile", "Printim 3D"],
  },
};

const learningCards = [
  {
    title: "Monomer → Polimer",
    text: "Molekula të vogla lidhen dhe krijojnë zinxhirë të gjatë me veti të reja, shumë ndryshe nga monomerët origjinalë.",
    icon: Atom,
  },
  {
    title: "Polimerizimi",
    text: "Ky është procesi i formimit të polimerëve. Mund të ndodhë me shtesë ose me kondensim.",
    icon: FlaskConical,
  },
  {
    title: "Struktura",
    text: "Gjatësia, degëzimi dhe renditja e zinxhirëve ndikojnë në forcë, fleksibilitet, transparencë dhe temperaturë shkrirjeje.",
    icon: Microscope,
  },
  {
    title: "Zbatimet",
    text: "Polimerët përdoren në paketim, ndërtim, mjekësi, elektronikë, transport dhe materiale të avancuara.",
    icon: Sparkles,
  },
];

const quiz = [
  { label: "Cili material riformohet kur ngrohet?", answer: "Termoplastikë" },
  { label: "Cili material krijon rrjet të ngurtë dhe nuk shkrihet lehtë?", answer: "Termoreaktivë" },
  { label: "Cili material zgjatet dhe kthehet prapë?", answer: "Elastomerë" },
  { label: "Cili material lidhet me qëndrueshmërinë dhe biodegradueshmërinë?", answer: "Biopolimerë" },
];

const facts = [
  {
    title: "Njësi përsëritëse",
    text: "Polimerët përbëhen nga njësi që përsëriten shumë herë përgjatë zinxhirit.",
  },
  {
    title: "Pesha molekulare",
    text: "Sa më i gjatë zinxhiri, aq më të ndryshme mund të jenë vetitë fizike të materialit.",
  },
  {
    title: "Kristaliniteti",
    text: "Disa polimerë janë më të renditur, disa më të çrregullt. Kjo ndikon në transparencë dhe fortësi.",
  },
  {
    title: "Riciklimi",
    text: "Jo të gjithë polimerët riciklohen njësoj; struktura e tyre përcakton sa lehtë ripërdoren.",
  },
];

const timeline = [
  {
    year: "1839",
    title: "Goma e vullkanizuar",
    text: "Zbulime që treguan sa i rëndësishëm mund të jetë modifikimi i materialeve polimerike.",
  },
  {
    year: "1907",
    title: "Bakeliti",
    text: "Një nga plastikat e para sintetike që ndryshoi industrinë moderne.",
  },
  {
    year: "1950+",
    title: "Epoka industriale",
    text: "Prodhimi masiv i polimerëve u bë pjesë e përditshme e jetës moderne.",
  },
  {
    year: "Sot",
    title: "Biopolimerët",
    text: "Kërkohet më shumë qëndrueshmëri, më pak ndotje dhe materiale të reja inteligjente.",
  },
];

const applications = [
  {
    icon: Factory,
    title: "Industria",
    text: "Pjesë mekanike, izolim, veshje mbrojtëse dhe materiale strukturore.",
  },
  {
    icon: HeartPulse,
    title: "Mjekësia",
    text: "Implante, sutura, pajisje diagnostike dhe materiale sterile.",
  },
  {
    icon: Leaf,
    title: "Mjedisi",
    text: "Biopolimerë dhe materiale të ripërdorshme për reduktim të mbetjeve.",
  },
  {
    icon: Droplets,
    title: "Paketimi",
    text: "Filma, shishe, enë dhe zgjidhje të lehta për transport.",
  },
];

const miniCards = [
  {
    title: "Fortësi",
    value: "Struktura e duhur jep qëndrueshmëri.",
    icon: Shield,
  },
  {
    title: "Fleksibilitet",
    value: "Lidhjet e lira krijojnë elasticitet.",
    icon: Wind,
  },
  {
    title: "Nxehtësi",
    value: "Temperatura ndryshon sjelljen e materialit.",
    icon: Flame,
  },
  {
    title: "Ekologji",
    value: "Biopolimerët janë pjesë e së ardhmes.",
    icon: Leaf,
  },
];

function SectionLabel({ children }) {
  return <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/75">{children}</p>;
}

function AnimatedParticle({ left, top, delay = 0, size = 8, glow = "rgba(34,211,238,0.9)" }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ left, top, width: size, height: size, boxShadow: `0 0 18px ${glow}` }}
      animate={{ y: [0, -18, 0], opacity: [0.35, 1, 0.35], scale: [1, 1.25, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

function DnaHelix() {
  const rungs = useMemo(() => Array.from({ length: 24 }), []);

  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[540px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_40px_120px_rgba(15,23,42,0.65)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_78%_86%,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_12%_78%,rgba(16,185,129,0.12),transparent_26%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:22px_22px]" />

      <svg viewBox="0 0 540 440" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <linearGradient id="dnaGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.1" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {rungs.map((_, i) => {
          const t = i / (rungs.length - 1);
          const y = 34 + t * 372;
          const wave = Math.sin(t * Math.PI * 10);
          const twist = Math.cos(t * Math.PI * 10);
          const xCenter = 270;
          const offset = 82 * wave;
          const leftX = xCenter - offset;
          const rightX = xCenter + offset;
          const alpha = 0.28 + 0.72 * (1 - Math.abs(0.5 - t));
          const strokeWidth = 2 + (1 - Math.abs(0.5 - t)) * 3;

          return (
            <g key={i} filter="url(#softGlow)">
              <motion.line
                x1={leftX}
                y1={y}
                x2={rightX}
                y2={y}
                stroke="url(#dnaGradient)"
                strokeLinecap="round"
                animate={{
                  opacity: [alpha * 0.75, alpha, alpha * 0.75],
                  strokeWidth: [strokeWidth, strokeWidth + 0.85, strokeWidth],
                }}
                transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.06, ease: "easeInOut" }}
              />
              <motion.circle
                cx={leftX}
                cy={y}
                r="5.2"
                fill="#22d3ee"
                animate={{ scale: [1, 1.15, 1], opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.07 }}
              />
              <motion.circle
                cx={rightX}
                cy={y}
                r="5.2"
                fill="#34d399"
                animate={{ scale: [1, 1.15, 1], opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.07 + 0.15 }}
              />
              <motion.circle
                cx={xCenter}
                cy={y}
                r={Math.max(1.5, 2.5 - Math.abs(twist) * 0.9)}
                fill="url(#dnaGlow)"
                animate={{ opacity: [0.2, 0.9, 0.2] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: i * 0.03 }}
              />
            </g>
          );
        })}
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30 bg-cyan-400/10 shadow-[0_0_90px_rgba(34,211,238,0.28)]"
        animate={{ rotate: 360, scale: [1, 1.06, 1] }}
        transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, scale: { duration: 4.4, repeat: Infinity } }}
      >
        <div className="flex h-full items-center justify-center">
          <Dna className="h-12 w-12 text-cyan-200" />
        </div>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-3 top-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)]" />
        <div className="absolute right-3 top-1/2 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.8)]" />
      </motion.div>

      <AnimatedParticle left="12%" top="16%" delay={0.1} size={7} />
      <AnimatedParticle left="18%" top="78%" delay={0.5} size={6} glow="rgba(168,85,247,0.9)" />
      <AnimatedParticle left="84%" top="20%" delay={0.9} size={7} glow="rgba(52,211,153,0.9)" />
      <AnimatedParticle left="76%" top="78%" delay={1.2} size={5} glow="rgba(255,255,255,0.9)" />
      <AnimatedParticle left="48%" top="10%" delay={1.5} size={5} />
      <AnimatedParticle left="52%" top="86%" delay={1.8} size={5} glow="rgba(168,85,247,0.9)" />

      <motion.div
        className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 backdrop-blur-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Modele molekular</p>
        <p className="mt-1 text-sm text-slate-200">Helikë dinamike me ndriçim dhe lëvizje të vazhdueshme</p>
      </motion.div>
    </div>
  );
}

function Metric({ icon: Icon, label, value, hint }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20">
      <div className="inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300 ring-1 ring-cyan-300/20">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{hint}</p>
    </div>
  );
}

function ExperimentPreview({ temperature, stretch }) {
  const chainNodes = useMemo(() => Array.from({ length: 12 }), []);
  const isHot = temperature >= 70;
  const tightness = Math.max(0.35, 1.25 - stretch * 0.55);
  const width = 320;

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 shadow-2xl shadow-black/25">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Eksperiment vizual</p>
          <h4 className="mt-1 text-xl font-semibold">Si sillet një zinxhir polimerik?</h4>
        </div>
        <div className={`rounded-full px-4 py-2 text-sm ${isHot ? "bg-orange-400/15 text-orange-200" : "bg-cyan-400/15 text-cyan-200"}`}>
          {isHot ? "Gjendje më e butë" : "Gjendje më e fortë"}
        </div>
      </div>

      <svg viewBox="0 0 560 240" className="mt-5 h-60 w-full rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.12),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.9),rgba(15,23,42,0.96))]">
        <defs>
          <linearGradient id="experimentLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>

        <motion.path
          d={`M 80 ${120 + Math.sin(temperature / 10) * 8} C ${140 + stretch * 25} ${76 - stretch * 10}, ${220 + stretch * 18} ${160 + stretch * 10}, ${280} ${120 + Math.cos(temperature / 12) * 8} S ${420 - stretch * 15} ${70 + stretch * 12}, ${480} ${120 - Math.sin(temperature / 14) * 6}`}
          fill="none"
          stroke="url(#experimentLine)"
          strokeWidth="8"
          strokeLinecap="round"
          animate={{ pathLength: [0.82, 1, 0.82], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {chainNodes.map((_, i) => {
          const t = i / (chainNodes.length - 1);
          const x = 80 + t * width;
          const wave = Math.sin(t * Math.PI * 4 + temperature / 12) * 18;
          const y = 120 + wave * tightness;
          const nodeSize = 11 + stretch * 2.2;
          return (
            <g key={i}>
              <motion.circle
                cx={x}
                cy={y}
                r={nodeSize}
                fill={isHot ? "rgba(251,146,60,0.22)" : "rgba(34,211,238,0.18)"}
                stroke={isHot ? "#fb923c" : "#22d3ee"}
                strokeWidth="3"
                animate={{
                  cy: [y - 1.5, y + 1.5, y - 1.5],
                  scale: [1, 1.07, 1],
                }}
                transition={{ duration: 2.8 + i * 0.05, repeat: Infinity, ease: "easeInOut" }}
              />
              {i < chainNodes.length - 1 && (
                <motion.line
                  x1={x + nodeSize}
                  y1={y}
                  x2={x + width / (chainNodes.length - 1) - nodeSize}
                  y2={y + Math.sin((i + 1) * 0.6 + temperature / 10) * 12 * tightness}
                  stroke="url(#experimentLine)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.05 }}
                />
              )}
            </g>
          );
        })}

        <motion.circle
          cx={440 + stretch * 8}
          cy={88}
          r={16}
          fill={isHot ? "rgba(251,146,60,0.2)" : "rgba(103,232,249,0.2)"}
          stroke={isHot ? "#fb923c" : "#67e8f9"}
          strokeWidth="3"
          animate={{ y: [0, -6, 0], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
        <text x="462" y="93" fill="#e2e8f0" fontSize="15" fontFamily="sans-serif">Nxehtësi</text>

        <motion.circle
          cx={110 - stretch * 8}
          cy={88}
          r={16}
          fill="rgba(52,211,153,0.18)"
          stroke="#34d399"
          strokeWidth="3"
          animate={{ y: [0, 6, 0], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <text x="132" y="93" fill="#e2e8f0" fontSize="15" fontFamily="sans-serif">Lëvizje</text>
      </svg>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Temperatura</p>
          <p className="mt-2 text-lg font-semibold">{temperature}°C</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Shtrirja</p>
          <p className="mt-2 text-lg font-semibold">{stretch.toFixed(1)}×</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Gjendja</p>
          <p className="mt-2 text-lg font-semibold">{isHot ? "Më fleksibël" : "Më i ngurtë"}</p>
        </div>
      </div>
    </div>
  );
}

function MoleculePanel({ title, description, accent, icon: Icon }) {
  return (
    <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-5 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className={`inline-flex rounded-2xl bg-gradient-to-br ${accent} p-3 text-white shadow-lg`}>
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="mt-4 text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}

export default function ChemistryPolymersWebsite() {
  const [activeType, setActiveType] = useState("Termoplastikë");
  const [quizAnswers, setQuizAnswers] = useState({});
  const [selectedFact, setSelectedFact] = useState(0);
  const [temperature, setTemperature] = useState(42);
  const [stretch, setStretch] = useState(1.2);
  const [activeApp, setActiveApp] = useState(0);

  const activeData = polymerTypes[activeType];
  const score = useMemo(() => Object.values(quizAnswers).filter(Boolean).length, [quizAnswers]);
  const experimentResult =
    temperature >= 70
      ? "Termoplastikët zbuten më shumë me nxehtësi dhe bëhen më të lehtë për t'u formuar."
      : "Në temperatura më të ulëta, materiali mbetet më i ngurtë dhe më i qëndrueshëm.";

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100 selection:bg-cyan-300/30 selection:text-white">
      <style>{`
        html { scroll-behavior: smooth; }
        .glass { background: rgba(10, 18, 32, 0.72); backdrop-filter: blur(18px); }
        .noise {
          background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 0);
          background-size: 18px 18px;
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-400/15 p-2 ring-1 ring-cyan-300/20">
              <Dna className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/75">Kimi & Materialet</p>
              <h1 className="text-lg font-semibold">Bota e Polimerëve</h1>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            {[
              ["Hyrje", "hyrje"],
              ["Llojet", "llojt"],
              ["Aplikime", "aplikime"],
              ["Eksperiment", "eksperimenti"],
              ["Quiz", "quiz"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="hyrje" className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 noise opacity-40" />
          <motion.div
            className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-0 top-24 h-96 w-96 rounded-full bg-fuchsia-500/12 blur-3xl"
            animate={{ x: [0, -18, 0], y: [0, 14, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                <Sparkles className="h-4 w-4" />
                Website interaktiv dhe profesional për polimerët
              </div>

              <h2 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
                Polimerët dhe Shkenca.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
                Kjo faqe kombinon dizajn modern, lëvizje të vazhdueshme, vizuale laboratorike dhe përmbajtje të qartë për të shpjeguar polimerët, strukturën e tyre dhe përdorimet në jetën e përditshme.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Fokus</p>
                  <p className="mt-2 text-sm text-slate-200">Kimikë, strukturë, aplikime, mjedis</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Stil</p>
                  <p className="mt-2 text-sm text-slate-200">Glassmorphism, neon, motion</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#llojt" className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]">
                  Eksploro <ChevronRight className="h-4 w-4" />
                </a>
                <a href="#eksperimenti" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10">
                  Provo eksperimente
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
              <DnaHelix />
            </motion.div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-4 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-4">
            <Metric icon={Beaker} label="Tema" value="Polimerët" hint="Materiale që formojnë jetën moderne." />
            <Metric icon={Flame} label="Marrëdhënia me nxehtësinë" value="Po" hint="Disa zbuten, disa ngurtësohen përgjithmonë." />
            <Metric icon={Recycle} label="Qëndrueshmëri" value="E rëndësishme" hint="Biopolimerët hapin rrugë për zgjidhje më të gjelbra." />
            <Metric icon={Trophy} label="Qëllimi" value="Prezantim i fortë" hint="Faqe që duket profesionale dhe mbahet mend." />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <SectionLabel>Bazat</SectionLabel>
              <h3 className="mt-2 text-3xl font-semibold">Çfarë janë polimerët?</h3>
            </div>
            <BookOpen className="hidden h-9 w-9 text-cyan-300 md:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {learningCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-[1.75rem] border border-white/10 p-6 shadow-xl shadow-black/20"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-white/5 p-3 text-cyan-300 ring-1 ring-white/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-semibold">{card.title}</h4>
                  <p className="mt-3 leading-7 text-slate-300">{card.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="llojt" className="border-y border-white/10 bg-white/[0.02] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10">
              <SectionLabel>Llojet</SectionLabel>
              <h3 className="mt-2 text-3xl font-semibold">Eksploro familjet kryesore të polimerëve</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(polymerTypes).map(([name, data]) => {
                  const Icon = data.icon;
                  const active = activeType === name;
                  return (
                    <button
                      key={name}
                      onClick={() => setActiveType(name)}
                      className={`group rounded-[1.75rem] border p-5 text-left transition duration-300 ${
                        active
                          ? "border-cyan-300/40 bg-cyan-400/10 shadow-lg shadow-cyan-500/10"
                          : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${data.color} p-3 text-white shadow-lg`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold">{name}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{data.summary}</p>
                    </button>
                  );
                })}
              </div>

              <motion.div
                key={activeType}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-[2rem] border border-white/10 p-7 shadow-2xl shadow-black/25"
              >
                <div className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${activeData.color} p-3 text-white`}>
                  {React.createElement(activeData.icon, { className: "h-6 w-6" })}
                </div>
                <h4 className="text-2xl font-semibold">{activeType}</h4>
                <p className="mt-3 leading-7 text-slate-300">{activeData.summary}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Shembuj</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeData.examples.map((x) => (
                        <span key={x} className="rounded-full bg-white/7 px-3 py-1 text-sm text-slate-100">
                          {x}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Veti</p>
                    <ul className="mt-3 space-y-2 text-slate-200">
                      {activeData.properties.map((x) => (
                        <li key={x} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Përdorime</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeData.uses.map((x) => (
                      <span key={x} className="rounded-full border border-white/10 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="aplikime" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="glass rounded-[2rem] border border-white/10 p-7">
              <SectionLabel>Aplikime</SectionLabel>
              <h3 className="mt-2 text-3xl font-semibold">Ku i shohim polimerët çdo ditë?</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Polimerët nuk janë vetëm plastikë. Ata përdoren në industri, mjekësi, paketim, elektronikë dhe materiale inteligjente. Për secilin rast, forma dhe struktura janë zgjedhur me kujdes.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {applications.map((app, index) => {
                  const Icon = app.icon;
                  const active = activeApp === index;
                  return (
                    <button
                      key={app.title}
                      onClick={() => setActiveApp(index)}
                      className={`rounded-[1.5rem] border p-4 text-left transition ${
                        active ? "border-cyan-300/40 bg-cyan-400/10" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className="inline-flex rounded-2xl bg-white/5 p-3 text-cyan-300 ring-1 ring-white/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3 font-semibold">{app.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{app.text}</p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Fokusi i zgjedhur</p>
                <h4 className="mt-2 text-xl font-semibold">{applications[activeApp].title}</h4>
                <p className="mt-2 leading-7 text-slate-300">{applications[activeApp].text}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-fuchsia-400/10 p-7 shadow-2xl shadow-black/20">
              <SectionLabel>Vlera</SectionLabel>
              <h3 className="mt-2 text-3xl font-semibold">Pse janë kaq të rëndësishëm?</h3>
              <p className="mt-4 leading-7 text-slate-200">
                Sepse polimerët mund të projektohen për funksione shumë të ndryshme: të butë, të fortë, të shtrirë, rezistentë ndaj nxehtësisë, të lehtë, transparentë ose biodegradueshëm. Kjo i bën një nga familjet më të fuqishme të materialeve në shkencë.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {miniCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                      <div className="inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300 ring-1 ring-cyan-300/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-3 font-semibold">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="eksperimenti" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-[1.03fr_0.97fr]">
            <div className="glass rounded-[2rem] border border-white/10 p-7">
              <SectionLabel>Eksperiment</SectionLabel>
              <h3 className="mt-2 text-3xl font-semibold">Provo si ndryshon një polimer me nxehtësi dhe shtrirje</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Lëvize temperaturën për të parë si termoplastikët zbuten. Lëvize shtrirjen për të parë si sillet zinxhiri i modelit. Është një simulim i thjeshtë, por shumë i mirë për ta bërë temën të duket e gjallë.
              </p>

              <div className="mt-6 space-y-6">
                <label className="block">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span className="inline-flex items-center gap-2"><ThermometerSun className="h-4 w-4 text-orange-300" /> Temperatura</span>
                    <span className="font-semibold text-white">{temperature}°C</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="120"
                    value={temperature}
                    onChange={(e) => setTemperature(Number(e.target.value))}
                    className="w-full accent-cyan-300"
                  />
                </label>

                <label className="block">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span className="inline-flex items-center gap-2"><Wind className="h-4 w-4 text-emerald-300" /> Shtrirja</span>
                    <span className="font-semibold text-white">{stretch.toFixed(1)}×</span>
                  </div>
                  <input
                    type="range"
                    min="0.8"
                    max="2.0"
                    step="0.1"
                    value={stretch}
                    onChange={(e) => setStretch(Number(e.target.value))}
                    className="w-full accent-cyan-300"
                  />
                </label>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Çfarë po shikon?</p>
                <p className="mt-3 text-slate-200">{experimentResult}</p>
              </div>
            </div>

            <ExperimentPreview temperature={temperature} stretch={stretch} />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
              <SectionLabel>Histori</SectionLabel>
              <h3 className="mt-2 text-3xl font-semibold">Si u zhvillua kjo familje materialesh?</h3>
              <div className="mt-6 space-y-4">
                {timeline.map((item) => (
                  <div key={item.year} className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4 sm:grid-cols-[90px_1fr] sm:items-start">
                    <div className="rounded-2xl bg-cyan-400/10 px-3 py-2 text-center font-semibold text-cyan-200 ring-1 ring-cyan-300/20">
                      {item.year}
                    </div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
              <SectionLabel>Fakte të shpejta</SectionLabel>
              <h3 className="mt-2 text-3xl font-semibold">Zgjidh një fakt dhe lexoje</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {facts.map((fact, idx) => (
                  <button
                    key={fact.title}
                    onClick={() => setSelectedFact(idx)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      selectedFact === idx
                        ? "border-cyan-300/40 bg-cyan-400/10"
                        : "border-white/10 bg-slate-950/30 hover:bg-white/[0.05]"
                    }`}
                  >
                    <p className="font-medium">{fact.title}</p>
                    <p className="mt-2 text-sm text-slate-300">{fact.text}</p>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/35 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Fakti i zgjedhur</p>
                <p className="mt-3 text-lg leading-7 text-white">
                  {facts[selectedFact].title}: {facts[selectedFact].text}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="quiz" className="border-y border-white/10 bg-white/[0.02] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex items-center justify-between gap-4">
              <div>
                <SectionLabel>Quiz interaktiv</SectionLabel>
                <h3 className="mt-2 text-3xl font-semibold">Zgjidh materialin e duhur</h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                Rezultati: {score}/{quiz.length}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {quiz.map((q) => (
                <div key={q.label} className="glass rounded-[1.75rem] border border-white/10 p-6">
                  <h4 className="text-lg font-medium">{q.label}</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {Object.keys(polymerTypes).map((option) => {
                      const selected = quizAnswers[q.label] === option;
                      return (
                        <button
                          key={option}
                          onClick={() => setQuizAnswers((prev) => ({ ...prev, [q.label]: option }))}
                          className={`rounded-full px-4 py-2 text-sm transition ${
                            selected ? "bg-cyan-400 text-slate-950" : "border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  <p className="mt-4 text-sm text-slate-300">
                    Përgjigjja e saktë: <span className="font-semibold text-white">{q.answer}</span>
                  </p>
                  {quizAnswers[q.label] && (
                    <p className={`mt-2 text-sm ${quizAnswers[q.label] === q.answer ? "text-emerald-400" : "text-rose-400"}`}>
                      {quizAnswers[q.label] === q.answer ? "Saktë!" : `Zgjodhe ${quizAnswers[q.label]}. Provo përsëri.`}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-fuchsia-400/10 p-7">
              <SectionLabel>Përmbledhje</SectionLabel>
              <h3 className="mt-2 text-3xl font-semibold">Pse polimerët janë kaq të rëndësishëm?</h3>
              <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                Sepse ata mund të projektohen për funksione shumë të ndryshme: nga ambalazhi i përditshëm, deri te implantet mjekësore, materialet e ndërtimit, pajisjet elektronike dhe zgjidhjet biodegraduese. Struktura e tyre vendos nëse materiali është i fortë, fleksibël, i lehtë apo i qëndrueshëm.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  ["Forcë", "Struktura përcakton performancën"],
                  ["Fleksibilitet", "Elastomerët japin elasticitet"],
                  ["Qëndrueshmëri", "Biopolimerët ndihmojnë mjedisin"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <p className="font-semibold">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-[2rem] border border-white/10 p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300 ring-1 ring-cyan-300/20">
                  <Beaker className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Mbyllja</p>
                  <h4 className="text-2xl font-semibold">Faqe e ndërtuar për t'u ndjerë moderne</h4>
                </div>
              </div>
              <p className="mt-4 leading-7 text-slate-300">
                Ky version është bërë për tju informuar pas polimerve the historis se tyre, gjithashtu duke u perfshir me nje eksperiment.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Mesazh final</p>
                <p className="mt-3 text-lg text-white">
                  “Polimerët janë materiali i së ardhmes — i dizajnuar nga shkenca, i përdorur në jetën e përditshme.”
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
