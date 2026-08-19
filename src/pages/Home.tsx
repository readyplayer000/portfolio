import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Mail,
  Linkedin,
  Download,
  CodeXml,
  Sparkles,
  MoveRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const hi = {
  logo: "/images/logo.png",
  hero: "/images/hero.jpg",
  triotax: "/images/triotax-signal.jpg",
  proxy: "/images/proxy-signal.jpg",
  visualVoice: "/images/visual-voice-signal.jpg",
  clinical: "/images/clinical-signal.jpg"
};

const Tl = [
  {
    number: "01",
    title: "TrioTax",
    type: "AI-Powered Tax Compliance",
    image: hi.triotax,
    lead: "Tax intelligence arranged around the person who needs to decide.",
    narrative:
      "TrioTax brings projections, Section 80C optimisation, financial dashboards and conversational guidance into a single progressive workflow. The product concept is not just a tax calculator: it is a decision surface where an unfamiliar process is broken into useful, verifiable steps.",
    problem: "Move from disconnected tax tasks to one clear picture of inputs, scenarios and next actions.",
    system:
      "React interfaces connect to FastAPI and Express services, with LangChain-assisted conversational flows translating rules into an approachable path.",
    outcome:
      "A multi-tier advisory system designed to turn compliance complexity into an ordered, inspectable conversation.",
    stack: ["React 18", "FastAPI", "Express", "LangChain", "Gemini"],
    note: "SYSTEM / PERSONAL FINANCE · 2026",
    signal: "RULES → ADVISOR",
    source: {
      url: "https://github.com/readyplayer000/Tax-Intelligence",
      label: "OPEN TRIO TAX SOURCE"
    }
  },
  {
    number: "02",
    title: "Proxy",
    type: "Speech-Enabled Desktop Agent",
    image: hi.proxy,
    lead: "Voice in. Intent understood. A desktop action follows.",
    narrative:
      "Proxy is a speech-controlled desktop assistant designed as a system, not a single model demo. It listens through local transcription, resolves the request into a practical intent, routes the result to a desktop action, and keeps the process visible through real-time monitoring.",
    problem: "Make voice interaction dependable enough to trigger an actual desktop workflow, not merely return a transcript.",
    system: "Vosk feeds an intent-classification layer; FastAPI orchestrates services; MQTT and Socket.IO carry events across a live control loop.",
    outcome: "A traceable voice → intent → action pipeline with a feedback surface for observing where each signal moves.",
    stack: ["Vosk", "FastAPI", "Socket.IO", "MQTT", "Scikit-learn"],
    note: "SYSTEM / AGENT ORCHESTRATION · 2025",
    signal: "VOICE → INTENT → ACTION"
  },
  {
    number: "03",
    title: "Visual Voice",
    type: "Attention-Based Computer Vision",
    image: hi.visualVoice,
    lead: "Translating pixels into human narrative through spatial focus.",
    narrative:
      "This vision-language system bridges the gap between deep feature extraction and sequential text generation. It combines a convolutional visual backbone with a recurrent language network, then adds a spatial attention layer that dynamically focuses on the most relevant image regions as each word is generated.",
    problem: "Generate descriptive, grammatically correct image captions while retaining local visual context instead of relying only on a global image summary.",
    system: "An EfficientNet-B3 encoder extracts spatial feature maps. A Bahdanau-style attention mechanism then guides a CUDA-accelerated LSTM decoder as it sequentially produces tokens.",
    outcome: "A robust PyTorch image-captioning pipeline with descriptive language generation, accelerated GPU training through memory-mapped NumPy arrays, and real-time visual attention mapping.",
    stack: ["PyTorch", "EfficientNet-B3", "Bahdanau Attention", "LSTM", "CUDA", "NumPy"],
    note: "RESEARCH / VISION-LANGUAGE · 2025",
    signal: "PIXELS → ATTENTION → CAPTION",
    source: {
      url: "https://github.com/readyplayer000/Visium-caption-engine",
      label: "OPEN VISIUM SOURCE"
    }
  },
  {
    number: "04",
    title: "Clinical Signal",
    type: "Cross-Lingual Clinical NLP",
    image: hi.clinical,
    lead: "Clinical reasoning across language boundaries without dropping the signal.",
    narrative:
      "This research pipeline looks at the hard edge between narrative patient data and structured laboratory values. It uses multilingual language understanding alongside a Tabular Transformer so that the system can consider the way a condition is described and the measurable features that support it.",
    problem: "Fuse narrative phenotypes and lab metrics without treating a change in language as a loss of clinical context.",
    system: "Zero-shot XLM-RoBERTa embeddings combine with self-attention over structured variables across a 124,500-record research dataset.",
    outcome: "A research-oriented model path that reached AUROC values up to 0.845 while keeping the multi-modal reasoning legible.",
    stack: ["XLM-RoBERTa", "PyTorch", "Tabular Transformer", "NLP", "CUDA"],
    note: "RESEARCH / HEALTH LANGUAGE · 2025",
    signal: "EHR → FUSION → AUROC"
  }
];

const TO = [
  {
    number: "01",
    title: "Frontend systems",
    core: "React 18 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React · Recharts",
    focus: "Hooks, typed component architecture, responsive UI systems, scroll-linked motion, data reporting, React Query and Zustand."
  },
  {
    number: "02",
    title: "AI & backend engineering",
    core: "Python · FastAPI · Node.js · Express · PyTorch · TensorFlow · Scikit-learn · LangChain · Gemini API",
    focus: "Async APIs, model pipelines, LLM orchestration, cross-lingual NLP, computer vision, transformer workflows and attention models."
  },
  {
    number: "03",
    title: "Systems & infrastructure",
    core: "Git · GitHub · Docker · Socket.IO · MQTT · CUDA · Vite · Vercel · Render",
    focus: "Containerised builds, real-time telemetry, GPU acceleration, static delivery, cloud deployment and source-control workflows."
  }
];

const EO = [
  {
    number: "01",
    title: "Vector Databases for RAG: An Introduction",
    issuer: "IBM",
    issued: "ISSUED AUG 2026",
    evidence: "CREDENTIAL ID · MW44EPWP2NOH",
    skills: "RAG · VECTOR DATABASES · LLM SYSTEMS"
  },
  {
    number: "02",
    title: "Machine Learning Intern",
    issuer: "InTrainz",
    issued: "ISSUED OCT 2024",
    evidence: "2-MONTH INDUSTRIAL TRAINING",
    skills: "MACHINE LEARNING · PYTHON"
  },
  {
    number: "03",
    title: "Artificial Intelligence & Machine Learning Internship",
    issuer: "All India Council for Technical Education (AICTE)",
    issued: "ISSUED JAN 2026",
    evidence: "CREDENTIAL ID · STU66a0e487d03261721820295",
    skills: "ARTIFICIAL INTELLIGENCE · MACHINE LEARNING · PYTHON"
  }
];

const wO = [
  {
    number: "01",
    label: "PUBLIC SYSTEM",
    title: "TrioTax",
    detail: "React · FastAPI · LangChain · Gemini",
    action: "OPEN GITHUB SOURCE",
    href: "https://github.com/readyplayer000/Tax-Intelligence"
  },
  {
    number: "02",
    label: "PUBLIC MODEL",
    title: "Visium",
    detail: "PyTorch · CUDA · Spatial Attention",
    action: "OPEN GITHUB SOURCE",
    href: "https://github.com/readyplayer000/Visium-caption-engine"
  },
  {
    number: "03",
    label: "VERIFIED LEARNING",
    title: "RAG Foundations",
    detail: "IBM · Issued Aug 2026",
    action: "OPEN CREDENTIAL",
    href: "https://www.linkedin.com/in/amuri-rohith/details/certifications/"
  }
];

const AO = [
  {
    number: "01",
    unit: "KNOWLEDGE",
    title: "Knights & Knaves",
    signal: "STATEMENT → MODEL → TRUTH",
    challenge: "Resolve logic puzzles where each character either always tells the truth or always lies.",
    system: "Python propositions express And, Or, Not, implication, and biconditional statements before the solver tests logical models.",
    evidence: "Propositional inference and truth-resolution practice.",
    stack: "Python · Propositional Logic",
    path: "01-Knights"
  },
  {
    number: "02",
    unit: "INFERENCE",
    title: "Minesweeper AI",
    signal: "CLUE → CONSTRAINT → SAFE MOVE",
    challenge: "Choose safe actions from incomplete board knowledge rather than simply reveal random cells.",
    system: "A knowledge base stores cell-count sentences and uses subset inference to derive new safe cells and probable mines.",
    evidence: "Constraint checking and logical knowledge-base updates.",
    stack: "Python · Logical Inference",
    path: "02-Minesweeper"
  },
  {
    number: "03",
    unit: "SEARCH",
    title: "Degrees",
    signal: "PERSON → GRAPH → SHORTEST PATH",
    challenge: "Find the shortest co-starring connection between two actors across a large movie graph.",
    system: "Breadth-first search tracks parent links so the discovered path can be reconstructed after the first match.",
    evidence: "Graph traversal and parent-linked path reconstruction.",
    stack: "Python · BFS · Graph Theory",
    path: "03-Degrees"
  },
  {
    number: "04",
    unit: "ADVERSARIAL",
    title: "Tic-Tac-Toe",
    signal: "STATE → MINIMAX → BEST MOVE",
    challenge: "Select optimal moves while accounting for every possible future board state.",
    system: "A minimax game tree is evaluated with alpha-beta pruning to reduce unnecessary branch exploration.",
    evidence: "Optimal-play search with responsive initial-state handling.",
    stack: "Python · Minimax · Alpha-Beta",
    path: "04-Tic-Tac-Toe"
  },
  {
    number: "05",
    unit: "PROBABILITY",
    title: "PageRank",
    signal: "LINKS → CHAIN → RANKING",
    challenge: "Estimate the relative importance of pages from a directed hyperlink structure.",
    system: "A random-surfer Markov model is compared with iterative equation-based convergence across a web corpus.",
    evidence: "Sampling and iterative probability estimation.",
    stack: "Python · Markov Chains",
    path: "05-PageRank"
  },
  {
    number: "06",
    unit: "UNCERTAINTY",
    title: "Heredity",
    signal: "PEDIGREE → BAYES → LIKELIHOOD",
    challenge: "Estimate gene and trait probabilities across a family tree with mutation and inheritance effects.",
    system: "Joint probabilities are enumerated over a Bayesian network that models parental transmission and trait expression.",
    evidence: "Probabilistic inference over family-pedigree data.",
    stack: "Python · Bayesian Networks",
    path: "06-Heredity"
  },
  {
    number: "07",
    unit: "CONSTRAINTS",
    title: "Crossword",
    signal: "GRID → CSP → CONSISTENT FILL",
    challenge: "Fit an entire word list into a crossword structure while honoring intersecting-letter constraints.",
    system: "Backtracking is combined with AC-3 consistency, MRV, degree, and least-constraining-value heuristics.",
    evidence: "Constraint propagation and heuristic search.",
    stack: "Python · CSP · AC-3",
    path: "07-Crossword"
  },
  {
    number: "08",
    unit: "LEARNING",
    title: "Shopping",
    signal: "SESSION → FEATURES → PURCHASE",
    challenge: "Predict whether an e-commerce session is likely to result in a purchase from behavioral features.",
    system: "Raw sessions are parsed into model features and evaluated with a scikit-learn k-nearest-neighbors classifier.",
    evidence: "Supervised classification with true-positive and true-negative evaluation.",
    stack: "Python · scikit-learn · k-NN",
    path: "08-Shopping"
  },
  {
    number: "09",
    unit: "REINFORCEMENT",
    title: "Nim",
    signal: "SELF-PLAY → Q-VALUES → POLICY",
    challenge: "Learn strong play in a simple impartial game without manually specifying every move rule.",
    system: "Temporal-difference Q-learning updates action values through self-play with epsilon-greedy exploration.",
    evidence: "Reinforcement learning policy trained through repeated games.",
    stack: "Python · Q-Learning",
    path: "09-Nim"
  }
];

function El({ label, number }: { label: string; number: string }) {
  return (
    <aside className="section-rail" aria-hidden="true">
      <span className="rail-mark">RA</span>
      <span>{number}</span>
      <i />
      <strong>{label}</strong>
    </aside>
  );
}

export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = React.useState(0);
  const [activeCaseStudyIdx, setActiveCaseStudyIdx] = React.useState<number | null>(null);

  React.useLayoutEffect(() => {
    if (!containerRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const reveal = (selector: string, startVal = "top 86%") => {
        gsap.utils.toArray(selector).forEach((el: any) => {
          gsap.fromTo(
            el,
            { y: 42, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: startVal, once: true }
            }
          );
        });
      };

      gsap.set(".hero-word", { yPercent: 112, rotate: 3 });
      gsap.set(".hero-kicker, .hero-intro, .hero-scroll", { autoAlpha: 0, y: 18 });

      gsap.timeline({ delay: 0.15 })
        .to(".hero-word", {
          yPercent: 0,
          rotate: 0,
          duration: 1.05,
          stagger: 0.09,
          ease: "power4.out"
        })
        .to(
          ".hero-kicker, .hero-intro, .hero-scroll",
          { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power3.out" },
          "-=0.42"
        );

      gsap.to(".hero-art", {
        yPercent: 16,
        scale: 0.94,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.1 }
      });

      gsap.to(".hero-disc", {
        rotation: 60,
        xPercent: -18,
        yPercent: 24,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.8 }
      });

      gsap.utils.toArray("[data-parallax]").forEach((el: any) => {
        const factor = Number(el.dataset.parallax || 1);
        gsap.to(el, {
          yPercent: -18 * factor,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section") || el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

      reveal(".reveal");
      reveal(".detail-reveal", "top 90%");
      reveal(".skill-row", "top 92%");

      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px) and (min-height: 620px)", () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".method-sequence",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true
          }
        })
          .fromTo(".lab-title", { y: 52, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.18 })
          .to(".lab-copy", { y: () => -window.innerHeight * 1.12, duration: 0.66, ease: "none" }, 0.18)
          .to(".lab-topline", { y: -72, duration: 0.62, ease: "none" }, 0.18)
          .fromTo(".lab-note-a", { autoAlpha: 0, x: -40 }, { autoAlpha: 1, x: 0, duration: 0.16 }, 0.11)
          .to(".shape-orbit", { scale: 1.18, rotation: 185, x: "-19vw", y: "-7vh", duration: 0.28 }, 0.14)
          .to(".shape-diamond", { rotation: 405, x: "18vw", y: "-18vh", scale: 1.35, borderRadius: "18%", duration: 0.28 }, 0.19)
          .to(".shape-capsule", { x: "-5vw", y: "18vh", rotation: -38, scaleX: 1.34, duration: 0.25 }, 0.26)
          .to(".shape-prism", { x: "19vw", y: "19vh", scale: 0.86, rotation: -105, duration: 0.25 }, 0.31)
          .to(".lab-note-b", { autoAlpha: 1, x: 0, duration: 0.16 }, 0.32)
          .to(".lab-script", { yPercent: -33.333, duration: 0.2 }, 0.42)
          .to(".shape-orbit", { borderColor: "#0ae448", boxShadow: "0 0 0 40px rgba(10,228,72,.05)", duration: 0.18 }, 0.43)
          .to(".shape-diamond", { backgroundColor: "#0ae448", duration: 0.16 }, 0.46)
          .to(".shape-capsule", { backgroundColor: "#f4f2eb", duration: 0.16 }, 0.49)
          .to(".lab-note-c", { autoAlpha: 1, x: 0, duration: 0.15 }, 0.51)
          .to(".lab-progress > i", { scaleX: 1, transformOrigin: "left", stagger: 0.05, duration: 0.15 }, 0.54)
          .to(".shape-orbit", { scale: 0.75, x: "-30vw", y: "-28vh", rotation: 320, duration: 0.28 }, 0.68)
          .to(".shape-diamond", { scale: 0.6, x: 318, y: "-27vh", rotation: 630, backgroundColor: "#2a2928", duration: 0.28 }, 0.7) // wait, in JS it was x: 31vw but compiled to 318? No, it was x: "31vw" and it might have been minified or read as 318. Let's make it "31vw"
          .to(".shape-capsule", { scale: 0.64, x: "-28vw", y: "31vh", rotation: 24, backgroundColor: "#0ae448", duration: 0.26 }, 0.72)
          .to(".shape-prism", { scale: 1.12, x: "27vw", y: "30vh", rotation: 205, duration: 0.26 }, 0.73)
          .to(".lab-script", { yPercent: -66.666, duration: 0.17 }, 0.76);

        const track = containerRef.current?.querySelector(".project-track");
        const viewport = containerRef.current?.querySelector(".journey-viewport");
        if (track && viewport) {
          const getCardWidth = () => {
            const card = track.querySelector(".journey-card");
            const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 0;
            return (card?.getBoundingClientRect().width || window.innerWidth) + gap;
          };

          gsap.to(track, {
            x: () => -(getCardWidth() * (Tl.length - 1)),
            ease: "none",
            scrollTrigger: {
              trigger: viewport,
              start: "top top",
              end: () => `+=${getCardWidth() * (Tl.length - 1)}`,
              pin: true,
              scrub: 0.55,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              snap: {
                snapTo: (val, trigger) => {
                  const step = 1 / (Tl.length - 1);
                  const dir = (trigger?.direction ?? 1) > 0 ? Math.ceil(val / step) : Math.floor(val / step);
                  return gsap.utils.clamp(0, 1, dir * step);
                },
                delay: 0.04,
                duration: { min: 0.38, max: 0.62 },
                ease: "power3.out",
                inertia: false
              },
              onEnter: () => { setActiveCaseStudyIdx(null); },
              onEnterBack: () => { setActiveCaseStudyIdx(null); },
              onUpdate: self => setActiveProject(Math.round(self.progress * (Tl.length - 1)))
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 899px)");
    const journey = containerRef.current?.querySelector(".projects-journey");
    if (!journey) return;

    let observer: IntersectionObserver;
    const setupObserver = () => {
      if (observer) observer.disconnect();
      if (!media.matches) return;

      const cards = Array.from(journey.querySelectorAll(".journey-card"));
      observer = new IntersectionObserver(
        entries => {
          const active = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!active) return;
          const idx = cards.indexOf(active.target);
          if (idx >= 0) setActiveProject(idx);
        },
        { rootMargin: "-22% 0px -32%", threshold: [0.3, 0.55, 0.75] }
      );
      cards.forEach(card => observer.observe(card));
    };

    setupObserver();
    media.addEventListener("change", setupObserver);
    return () => {
      if (observer) observer.disconnect();
      media.removeEventListener("change", setupObserver);
    };
  }, []);

  React.useEffect(() => {
    const refresh = () => window.requestAnimationFrame(() => ScrollTrigger.refresh());
    const viewport = window.visualViewport;
    window.addEventListener("orientationchange", refresh);
    window.addEventListener("resize", refresh);
    viewport?.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("orientationchange", refresh);
      window.removeEventListener("resize", refresh);
      viewport?.removeEventListener("resize", refresh);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleProjectSelect = (idx: number, scroll = false) => {
    setActiveProject(idx);
    setActiveCaseStudyIdx(idx);
    if (scroll) {
      window.setTimeout(() => scrollToSection("case-study"), 40);
    }
  };

  const selectedIdx = activeCaseStudyIdx ?? activeProject;
  const currentCaseStudy = Tl[selectedIdx];

  return (
    <div ref={containerRef} className="portfolio-shell">
      <div className="site-grain" aria-hidden="true" />
      
      <header className="site-header">
        <button
          className="brand-mark"
          onClick={() => scrollToSection("top")}
          aria-label="Return to the start of the portfolio"
        >
          <img src={hi.logo} alt="" />
        </button>
        <span className="brand-name">
          AMURI ROHITH <i>AI / ML SYSTEMS</i>
        </span>
        <nav className="site-nav" aria-label="Primary navigation">
          <button onClick={() => scrollToSection("method")}>Method</button>
          <button onClick={() => scrollToSection("work")}>Work</button>
          <button onClick={() => scrollToSection("profile")}>Profile</button>
          <button onClick={() => scrollToSection("mini-projects")}>Mini Projects</button>
        </nav>
        <a className="nav-contact" href="mailto:rohithamuri135@gmail.com">
          Contact <ArrowUpRight size={14} />
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-art" aria-hidden="true">
            <img src={hi.hero} alt="" />
          </div>
          <div className="hero-signal-glyph" aria-hidden="true">
            <img src={hi.logo} alt="" />
            <span>RA / SIGNAL SOURCE</span>
          </div>
          <div className="hero-kinetic-field" aria-hidden="true">
            <span className="kinetic-arc arc-one" />
            <span className="kinetic-arc arc-two" />
            <span className="kinetic-pulse pulse-one" />
            <span className="kinetic-pulse pulse-two" />
          </div>
          <div className="hero-kicker">
            <span></span> ENGINEERING INTELLIGENCE THAT TRAVELS
          </div>
          <div className="hero-title-stack">
            <h1
              id="hero-title"
              className="hero-title"
              aria-label="Rohith Amuri, AI and machine learning engineer"
            >
              <span className="hero-clip">
                <span className="hero-word">ROHITH</span>
              </span>
              <span className="hero-clip hero-outline">
                <span className="hero-word">AMURI</span>
              </span>
            </h1>
            <div
              className="hero-skill-ribbon"
              aria-label="Skills flow in one direction through AI processing to delivered systems"
            >
              <div className="ribbon-window">
                <i className="ribbon-guide" />
                <div className="ribbon-stream ribbon-stream-single">
                  <span>PYTHON · PYTORCH · FASTAPI · REACT · DOCKER ·</span>
                  <span>MODEL · API · INTERFACE · SYSTEM ·</span>
                  <span>PYTHON · PYTORCH · FASTAPI · REACT · DOCKER ·</span>
                  <span>MODEL · API · INTERFACE · SYSTEM ·</span>
                  <span>PYTHON · PYTORCH · FASTAPI · REACT · DOCKER ·</span>
                  <span>MODEL · API · INTERFACE · SYSTEM ·</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-intro">
            <p>
              AI and machine learning engineer based in Bengaluru, building systems that turn a difficult
              signal into a useful decision.
            </p>
            <button
              className="round-button"
              onClick={() => scrollToSection("method")}
              aria-label="Trace the working method"
            >
              <ArrowDownRight size={24} />
            </button>
          </div>
          <div className="hero-scroll">
            <span>SCROLL TO TRACE</span>
            <i />
          </div>
          <p className="hero-coordinate">12° 58′ N &nbsp; / &nbsp; 77° 35′ E</p>
        </section>

        {/* PROOF INDEX */}
        <section className="proof-index dark-section" aria-labelledby="proof-index-title">
          <El number="00" label="PROOF INDEX" />
          <div className="proof-index-head">
            <div>
              <p className="section-label">[ 000 ] &nbsp; INSPECTABLE WORK</p>
              <h2 id="proof-index-title">
                Three public<br />
                <em>proof points.</em>
              </h2>
            </div>
            <p>
              Selected source systems and a verified credential, placed here so the engineering evidence
              is visible before the long-form field notes.
            </p>
          </div>
          <div className="proof-index-grid">
            {wO.map(m => (
              <a
                className="proof-index-item"
                href={m.href}
                target="_blank"
                rel="noreferrer"
                key={m.number}
              >
                <span className="proof-index-number">{m.number}</span>
                <div>
                  <small>{m.label}</small>
                  <h3>{m.title}</h3>
                  <p>{m.detail}</p>
                </div>
                <span className="proof-index-action">
                  {m.action} <ArrowUpRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ORIENTATION */}
        <section className="opening-section dark-section" aria-labelledby="opening-title">
          <El number="01" label="ORIENTATION" />
          <div className="opening-path" data-parallax="0.45" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="opening-layout">
            <p className="section-label reveal">[ 001 ] &nbsp; FROM SIGNAL TO SYSTEM</p>
            <h2 id="opening-title" className="opening-title reveal">
              Good machine intelligence is not an endpoint.<br />
              <em>It is a route</em> to a clearer action.
            </h2>
            <div className="opening-note reveal">
              <span>THE PRACTICE</span>
              <p>
                I work across applied machine learning, full-stack systems and research workflows. The
                common thread is deliberately designed movement: from raw input, through a model or
                service, to an output somebody can use.
              </p>
            </div>
          </div>
          <div className="signal-stats detail-reveal">
            <span>
              <b>04</b> SYSTEM FAMILIES
            </span>
            <span>
              <b>02</b> RESEARCH MODES
            </span>
            <span>
              <b>01</b> QUESTION AT A TIME
            </span>
          </div>
        </section>

        {/* WORKING METHOD */}
        <div className="method-sequence">
          <section className="scroll-laboratory dark-section" id="method" aria-labelledby="lab-title">
            <El number="02" label="SCROLL LAB" />
            <div className="lab-topline">
              <span>SHAPE / SCROLL / STATE</span>
              <span>01—04</span>
            </div>
            <div className="lab-copy">
              <p className="section-label">[ 002 ] &nbsp; WORKING METHOD</p>
              <h2 id="lab-title" className="lab-title">
                Follow the<br />
                <em>mechanism,</em>
                <br />
                not just the outcome.
              </h2>
            </div>
            <div className="shape-field" aria-hidden="true">
              <span className="shape-orbit" />
              <span className="shape-diamond" />
              <span className="shape-capsule" />
              <span className="shape-prism" />
              <span className="shape-core" />
            </div>
            <p className="lab-note lab-note-a">
              01 / DEFINE<br />
              <b>THE REAL QUESTION</b>
            </p>
            <p className="lab-note lab-note-b">
              02 / DESIGN<br />
              <b>THE DATA PATH</b>
            </p>
            <p className="lab-note lab-note-c">
              03 / SHIP<br />
              <b>THE USEFUL THING</b>
            </p>
            <div className="lab-script-wrap">
              <div className="lab-script">
                <p>Constraints become a working brief.</p>
                <p>Inputs become an observable system.</p>
                <p>Outputs become a decision someone can trust.</p>
              </div>
            </div>
            <div className="lab-progress" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </section>

          {/* MECHANICS */}
          <section className="method-notes dark-section" aria-label="Method explanation">
            <div className="method-marquee" data-parallax="0.35">
              DEFINE / STRUCTURE / PROTOTYPE / OBSERVE / REFINE /
            </div>
            <El number="03" label="MECHANICS" />
            <div className="method-grid">
              <div className="method-heading reveal">
                <p className="section-label">[ 003 ] &nbsp; THE WORK IS EXPLAINABLE</p>
                <h2>
                  Built to be<br />
                  read <em>in motion.</em>
                </h2>
              </div>
              <div className="method-reading reveal">
                <p>
                  Every system begins with a question that is concrete enough to test. That means naming
                  the user, identifying the signal, deciding what counts as a useful response, and only
                  then choosing the model, interface and infrastructure required to support it.
                </p>
                <p>
                  On the screen, this becomes an intentional rhythm: long-form explanation gives the
                  reader context; a kinetic diagram shows the relationship; the portfolio itself works
                  like the systems it describes—each layer explains what the previous one enables.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* SELECTED WORK */}
        <section className="projects-journey dark-section" id="work" aria-labelledby="work-title">
          <El number="04" label="SELECTED WORK" />
          <div className="journey-head">
            <div>
              <p className="section-label">[ 004 ] &nbsp; SELECTED SYSTEMS</p>
              <h2 id="work-title">
                Four systems.<br />
                Different <em>signals.</em>
              </h2>
            </div>
            <p>
              ON DESKTOP, EACH SCROLL STEP REVEALS ONE COMPLETE SYSTEM.
              <br />
              ON MOBILE, EACH SYSTEM OPENS INTO A VERTICAL READING PATH.
            </p>
          </div>
          <div className="journey-viewport">
            <div className="project-track">
              {Tl.map((m, g) => (
                <button
                  className={`journey-card ${activeProject === g ? "is-active" : ""}`}
                  onClick={() => handleProjectSelect(g, true)}
                  aria-pressed={activeProject === g}
                  aria-current={activeProject === g ? "true" : undefined}
                  aria-controls="case-study"
                  key={m.title}
                >
                  <span className="journey-number">{m.number}</span>
                  <div className="journey-image">
                    <img src={m.image} alt="" />
                    <span className="image-overlay" />
                    <i className="image-crosshair" />
                    <small className="journey-signal">{m.signal}</small>
                  </div>
                  <div className="journey-copy">
                    <p>{m.type}</p>
                    <h3>{m.title}</h3>
                    <span>{m.lead}</span>
                    <b>
                      OPEN FULL CASE STUDY <ArrowDownRight size={15} />
                    </b>
                    <i>{m.note}</i>
                  </div>
                  <span className="journey-case-plus" aria-hidden="true">
                    <strong>+</strong>
                    <small>CASE STUDY</small>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ACTIVE CASE STUDY */}
        <section
          className="project-detail light-section"
          id="case-study"
          aria-live="polite"
          aria-labelledby="selected-title"
        >
          <div className="detail-rule">
            <span>ACTIVE CASE STUDY</span>
            <span>
              {currentCaseStudy.number} / {String(Tl.length).padStart(2, "0")}
            </span>
          </div>
          <div className="detail-tabs" role="tablist" aria-label="Select a project case study">
            {Tl.map((m, g) => (
              <button
                role="tab"
                aria-selected={selectedIdx === g}
                className={selectedIdx === g ? "is-active" : ""}
                onClick={() => handleProjectSelect(g)}
                key={m.title}
              >
                <b>{m.number}</b>
                <span>{m.title}</span>
              </button>
            ))}
          </div>
          <div className="field-report-seal" aria-hidden="true">
            <img src={hi.logo} alt="" />
            <span>
              FIELD REPORT
              <br />
              SYSTEM REVIEW
            </span>
          </div>
          <div className="detail-layout">
            <div className="detail-title detail-reveal">
              <p className="section-label">{currentCaseStudy.type.toUpperCase()}</p>
              <h2 id="selected-title">{currentCaseStudy.title}</h2>
              <p className="detail-lead">{currentCaseStudy.lead}</p>
            </div>
            <div className="detail-narrative detail-reveal">
              <p>{currentCaseStudy.narrative}</p>
            </div>
            <dl className="detail-data detail-reveal">
              <div>
                <dt>THE QUESTION</dt>
                <dd>{currentCaseStudy.problem}</dd>
              </div>
              <div>
                <dt>THE SYSTEM</dt>
                <dd>{currentCaseStudy.system}</dd>
              </div>
              <div>
                <dt>THE RESULT</dt>
                <dd>{currentCaseStudy.outcome}</dd>
              </div>
            </dl>
            <div className="detail-stack detail-reveal">
              <span>WORKING STACK</span>
              <ul>
                {currentCaseStudy.stack.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {currentCaseStudy.source && (
                <a
                  className="detail-source"
                  href={currentCaseStudy.source.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={15} />
                  {currentCaseStudy.source.label}
                  <ArrowUpRight size={14} />
                </a>
              )}
              <button onClick={() => scrollToSection("contact")}>
                Discuss this work <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
          <div className="detail-index" aria-hidden="true">
            {currentCaseStudy.number}
          </div>
        </section>

        {/* RESEARCH STRIP */}
        <section className="research-strip dark-section" aria-label="Research and engineering focus">
          <El number="05" label="FIELD NOTES" />
          <div className="research-copy reveal">
            <p className="section-label">[ 005 ] &nbsp; THE SPACE BETWEEN RESEARCH AND PRODUCT</p>
            <h2>
              Models earn their place when they meet the <em>real world.</em>
            </h2>
          </div>
          <div className="research-list">
            <article className="research-item reveal">
              <span>01</span>
              <h3>Language to action</h3>
              <p>
                Intent classification, speech interfaces and agent routing where a request needs to become
                a reliable next step.
              </p>
              <CodeXml size={19} />
            </article>
            <article className="research-item reveal">
              <span>02</span>
              <h3>Attention to language</h3>
              <p>
                Vision and multimodal models that make their focus legible before they produce a generated
                response.
              </p>
              <Sparkles size={19} />
            </article>
            <article className="research-item reveal">
              <span>03</span>
              <h3>Evidence to interface</h3>
              <p>
                Research-shaped technical decisions translated into web systems that offer clarity rather
                than opacity.
              </p>
              <MoveRight size={19} />
            </article>
          </div>
        </section>

        {/* PROFILE */}
        <section className="profile-section dark-section" id="profile" aria-labelledby="profile-title">
          <El number="06" label="PROFILE" />
          <div className="profile-top">
            <div className="profile-title reveal">
              <p className="section-label">[ 006 ] &nbsp; PRACTICE, NOT POSTURING</p>
              <h2 id="profile-title">
                A student of<br />
                <em>applied intelligence.</em>
              </h2>
            </div>
            <div className="profile-statement reveal">
              <p>
                I am a B.Tech student in Artificial Intelligence and Machine Learning at M.S. Ramaiah University
                of Applied Sciences, maintaining an 8.5 CGPA while building through the distance between
                research fundamentals and software people can actually use.
              </p>
              <p>
                The work moves between NLP, computer vision, predictive modelling, systems design and the
                small engineering decisions that make an idea operational.
              </p>
            </div>
          </div>
          <div className="skills-list">
            {TO.map(m => (
              <div className="skill-row" key={m.number}>
                <span>{m.number}</span>
                <h3>{m.title}</h3>
                <div className="skill-detail">
                  <p>{m.core}</p>
                  <small>{m.focus}</small>
                </div>
                <ArrowUpRight size={18} />
              </div>
            ))}
          </div>

          <section className="credential-proof" aria-labelledby="credential-proof-title">
            <div className="credential-proof-heading">
              <p className="section-label">[ 006A ] &nbsp; VERIFIED LEARNING SIGNALS</p>
              <h3 id="credential-proof-title">
                Credentials,<br />
                <em>in context.</em>
              </h3>
              <p>
                Two credentials with clear issuer, date, and verification context. The supporting record
                is maintained on LinkedIn.
              </p>
            </div>
            <div className="credential-proof-list">
              {EO.map(m => (
                <a
                  href="https://www.linkedin.com/in/amuri-rohith/details/certifications/"
                  target="_blank"
                  rel="noreferrer"
                  className="credential-proof-item"
                  key={m.title}
                >
                  <span>{m.number}</span>
                  <div>
                    <small>{m.issuer}</small>
                    <h4>{m.title}</h4>
                    <p>
                      {m.issued} &nbsp; / &nbsp; {m.evidence}
                    </p>
                    <b className="credential-skill-signal">{m.skills}</b>
                  </div>
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
          </section>

          <div className="credentials">
            <div className="credential-card reveal">
              <span>EDUCATION</span>
              <h3>
                M.S. Ramaiah University
                <br />
                of Applied Sciences
              </h3>
              <p>B.Tech, Artificial Intelligence & Machine Learning</p>
              <b>2023—2027 &nbsp; / &nbsp; CGPA 8.5</b>
            </div>
            <div className="credential-card reveal">
              <span>IN THE FIELD</span>
              <h3>
                Learning in public.
                <br />
                Showing up in teams.
              </h3>
              <p>
                Smart India Hackathon participant, Rotaract Club member, and an ongoing student of AI, ML
                and software-development practice.
              </p>
              <b>EDX &nbsp; / &nbsp; COURSERA &nbsp; / &nbsp; UDEMY</b>
            </div>
          </div>
        </section>

        {/* MINI PROJECTS */}
        <section
          className="mini-projects dark-section"
          id="mini-projects"
          aria-labelledby="mini-projects-title"
        >
          <El number="07" label="MINI PROJECTS" />
          <div className="mini-projects-head">
            <div>
              <p className="section-label">[ 007 ] &nbsp; HARVARDX / CS50AI LABS</p>
              <h2 id="mini-projects-title">
                Nine small systems.
                <br />
                <em>One AI foundation.</em>
              </h2>
            </div>
            <div className="mini-projects-proof">
              <span>9 / 9 COMPLETED MODULES</span>
              <p>
                Independent exercises spanning logical inference, search, probabilistic reasoning, constraint
                solving, supervised learning, and reinforcement learning.
              </p>
              <a href="https://github.com/readyplayer000/HarvardX-CS50AI" target="_blank" rel="noreferrer">
                <Github size={15} /> OPEN CS50AI SOURCE <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="mini-projects-grid">
            {AO.map(m => (
              <article className="mini-project" key={m.number}>
                <div className="mini-project-top">
                  <span>{m.number}</span>
                  <small>{m.unit}</small>
                </div>
                <h3>{m.title}</h3>
                <p className="mini-signal">{m.signal}</p>
                <div className="mini-detail">
                  <span>THE QUESTION</span>
                  <p>{m.challenge}</p>
                </div>
                <div className="mini-detail">
                  <span>THE SYSTEM</span>
                  <p>{m.system}</p>
                </div>
                <div className="mini-footer">
                  <p>{m.stack}</p>
                  <a
                    href={`https://github.com/readyplayer000/HarvardX-CS50AI/tree/main/${m.path}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${m.title} source`}
                  >
                    <Github size={15} />
                    <ArrowUpRight size={14} />
                  </a>
                </div>
                <small className="mini-evidence">EVIDENCE / {m.evidence}</small>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-topline">
            <img src={hi.logo} alt="" />
            <span>OPEN TO COLLABORATION</span>
            <span>2026 / BENGALURU</span>
          </div>
          <div className="contact-copy reveal">
            <p className="section-label">[ 008 ] &nbsp; MAKE THE NEXT SYSTEM USEFUL</p>
            <h2 id="contact-title">
              Have a problem
              <br />
              worth <em>following?</em>
            </h2>
          </div>
          <a className="contact-email" href="mailto:rohithamuri135@gmail.com">
            rohithamuri135@gmail.com <ArrowUpRight size={24} />
          </a>
          <div className="contact-links">
            <a href="mailto:rohithamuri135@gmail.com">
              <Mail size={15} /> Email
            </a>
            <a href="https://github.com/readyplayer000/readyplayer000" target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/amuri-rohith/" target="_blank" rel="noreferrer">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1J8frPl79POW25g84t8sPb9AUVpPr5nY0/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={15} /> Resume
            </a>
          </div>
          <img className="contact-symbol" src={hi.logo} alt="" aria-hidden="true" />
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 ROHITH AMURI</span>
        <span>BUILT AS A LIVING SYSTEM LOG</span>
        <button onClick={() => scrollToSection("top")}>
          BACK TO TOP <ArrowUpRight size={14} />
        </button>
      </footer>
    </div>
  );
}
