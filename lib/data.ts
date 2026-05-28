export type ResearchArea = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  icon:
    | "Network"
    | "Car"
    | "Atom"
    | "Cpu"
    | "Bot"
    | "ShieldCheck"
    | "Smartphone"
    | "LineChart";
};

export const researchAreas: ResearchArea[] = [
  {
    id: "federated-learning",
    title: "Federated Learning",
    description:
      "Privacy-preserving distributed learning across heterogeneous clients. Adaptive aggregation, continual participation, and communication efficiency.",
    longDescription:
      "We train models across many clients without raw data leaving the device. Our work focuses on adaptive aggregation under heterogeneous data, continual and incremental client participation, and communication-efficient protocols that scale to thousands of edge nodes. We treat federated learning as a systems problem as much as an optimization one.",
    tags: ["distributed", "privacy", "optimization", "continual"],
    icon: "Network",
  },
  {
    id: "autonomous-driving",
    title: "Autonomous Driving",
    description:
      "Mamba state-space models for efficient long-horizon perception and planning in end-to-end autonomous systems.",
    longDescription:
      "End-to-end autonomous driving stacks built on modern sequence models. We're exploring Mamba-based state-space architectures as a more efficient alternative to attention for long-horizon perception and planning — preserving accuracy at a fraction of the compute cost, which is what real on-vehicle deployment demands.",
    tags: ["perception", "planning", "SSM", "Mamba"],
    icon: "Car",
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing",
    description:
      "Quantum circuit simulation and algorithm prototyping for hybrid classical-quantum workloads.",
    longDescription:
      "Quantum algorithm prototyping and circuit simulation for the era of hybrid classical-quantum systems. Our PRISM simulator focuses on making it easy to express and test variational and gate-based algorithms before deploying to real hardware, with a workflow geared toward researchers rather than vendors.",
    tags: ["algorithms", "simulation", "variational", "hybrid"],
    icon: "Atom",
  },
  {
    id: "ai-systems",
    title: "AI Systems",
    description:
      "Scalable infrastructure and inference engines for training and serving large AI models efficiently.",
    longDescription:
      "The infrastructure layer of modern AI — scalable training, inference engines, and serving platforms. We work on the systems plumbing that lets research move at the speed of ideas rather than the speed of GPUs.",
    tags: ["systems", "inference", "training", "scale"],
    icon: "Cpu",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Multi-agent frameworks, tool use, and autonomous reasoning systems built on top of foundation models.",
    longDescription:
      "Multi-agent systems that combine foundation models with tools, memory, and structured reasoning. We're interested in what changes when agents can call into each other and operate over longer time horizons than a single chat turn — including the evaluation problem that comes with it.",
    tags: ["LLM", "tools", "reasoning", "evaluation"],
    icon: "Bot",
  },
  {
    id: "security",
    title: "Security",
    description:
      "Robust and secure ML systems with adversarial resilience and verifiable privacy guarantees.",
    longDescription:
      "Robust and secure machine learning — adversarial resilience, secure aggregation in federated settings, and verifiable privacy guarantees for systems that handle sensitive data. Security as a first-class research concern, not an afterthought.",
    tags: ["adversarial", "privacy", "verification"],
    icon: "ShieldCheck",
  },
  {
    id: "edge-ai",
    title: "Edge AI",
    description:
      "On-device inference, model compression, and resource-efficient learning for constrained environments.",
    longDescription:
      "On-device intelligence under tight compute, memory, and energy constraints. Model compression, quantization, and architecture search for hardware that runs on milliwatts — the kind of work that decides whether an idea actually deploys.",
    tags: ["compression", "quantization", "efficiency"],
    icon: "Smartphone",
  },
  {
    id: "time-series-forecasting",
    title: "Time-Series Forecasting",
    description:
      "New architectures for forecasting sequential data — efficiency, accuracy, and adaptation across non-stationary domains.",
    longDescription:
      "Time-series forecasting under real-world conditions: non-stationary distributions, multi-scale temporal dependencies, and the trade-off between long-context capacity and inference cost. We design new model architectures that target accuracy and efficiency together, with an eye on what actually deploys in production forecasting systems.",
    tags: ["forecasting", "sequence modeling", "deep learning"],
    icon: "LineChart",
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: "Active" | "Research" | "Archived";
  featured: boolean;
  github: string | null;
};

export const projects: Project[] = [
  {
    id: "ci-fl",
    name: "CI-FL",
    tagline: "Cache-Inspired Federated Learning",
    description:
      "Cache-inspired federated learning framework for efficient communication and scalable edge intelligence.",
    tags: ["Federated Learning", "Communication Efficiency", "Edge Intelligence"],
    status: "Active",
    featured: true,
    github: "https://github.com/hwangsresearch/CI-FL",
  },
  {
    id: "h2pfuser",
    name: "H2PFUser",
    tagline: "Mamba-based Autonomous Driving",
    description:
      "End-to-end autonomous driving stack built on Mamba state-space models for efficient long-horizon perception and planning.",
    tags: ["Autonomous Driving", "Mamba", "SSM", "Perception"],
    status: "Active",
    featured: true,
    github: null,
  },
  {
    id: "adafed",
    name: "AdaFed",
    tagline: "Adaptive Federated Learning",
    description:
      "Adaptive aggregation and client-side optimization for federated learning under heterogeneous data and compute.",
    tags: ["Federated Learning", "Adaptive Optimization"],
    status: "Active",
    featured: false,
    github: "https://github.com/hwangsresearch/AdaFed",
  },
  {
    id: "prism",
    name: "PRISM",
    tagline: "Quantum Simulator",
    description:
      "Quantum qubit simulator for quantum computing research and experimentation. Designed for algorithm prototyping and hybrid quantum-classical workloads.",
    tags: ["Quantum", "Simulation", "Algorithms"],
    status: "Active",
    featured: false,
    github: "https://github.com/hwangsresearch/PRISM",
  },
  {
    id: "nyra",
    name: "NyRA",
    tagline: "Time-Series Forecasting Model",
    description:
      "A new model architecture for time-series forecasting, exploring novel designs for sequential data prediction with a focus on accuracy and efficiency.",
    tags: ["Time-Series Forecasting", "Sequence Modeling", "Deep Learning"],
    status: "Research",
    featured: false,
    github: "https://github.com/hwangsresearch/NyRA",
  },
];

export type Member = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  areas: string[];
  links: { label: string; href: string }[];
};

export const team: Member[] = [
  {
    id: "sunjun-hwang",
    name: "Sunjun Hwang",
    role: "Founder",
    avatar: "/sunjun-hwang.png",
    bio: "Founder of Hwang's Research. Working on the systems that connect AI research to real-world deployment — federated learning infrastructure, Mamba-based perception stacks for autonomous driving, and quantum algorithm simulation. Publishes openly and runs the research direction of the lab.",
    areas: [
      "AI Systems",
      "Autonomous Driving",
      "Quantum Computing",
      "Intelligent Systems",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/justinbrianhwang" },
      { label: "Web", href: "https://www.sjhwang.com/" },
      { label: "CV", href: "https://www.sjhwangcv.com/" },
      { label: "Research", href: "https://sjhwangresearch.com/" },
      { label: "Papers", href: "https://sjhwangpaper.com/" },
      { label: "Wiki", href: "https://sjhwangwiki.com/" },
    ],
  },
  {
    id: "dohyun-hwang",
    name: "Dohyun Hwang",
    role: "Assistant Researcher",
    avatar: "/dohyun-hwang.png",
    bio: "Assistant researcher supporting experimental work, system development, and day-to-day research infrastructure across the lab's active projects.",
    areas: [
      "Research Assistance",
      "System Development Support",
      "Experimental Support",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ezwez1203" },
      { label: "Web", href: "https://ezwez1203.github.io/myPortfolio/home" },
    ],
  },
];

export const contact = {
  email: "sunjun7559@gmail.com",
  github: "https://github.com/hwangsresearch",
};

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueShort: string;
  year: number;
  month?: string;
  location?: string;
  doi?: string;
  url?: string;
  pdf?: string;
  abstract: string;
  tags: string[];
};

export const publications: Publication[] = [
  {
    id: "amc-adversarial-robustness-icaiic-2026",
    title:
      "Adversarial Robustness Analysis of Deep Learning-Based Automatic Modulation Classification in Wireless Communication",
    authors: ["Sunjun Hwang", "Eunho Choi", "Dohyun Hwang"],
    venue:
      "2026 International Conference on Artificial Intelligence in Information and Communication",
    venueShort: "ICAIIC 2026",
    year: 2026,
    month: "February",
    location: "Tokyo, Japan",
    doi: "10.1109/ICAIIC68212.2026.11454198",
    url: "https://ieeexplore.ieee.org/document/11454198",
    abstract:
      "Deep learning-based Automatic Modulation Classification (AMC) has emerged as a critical technology for spectrum sensing and cognitive radio applications. However, the vulnerability of these models to adversarial attacks poses significant security concerns in wireless communication systems. This paper presents a comprehensive evaluation of adversarial robustness for a VTCNN2-based AMC model using the RadioML2016.10A dataset. We systematically analyze three representative adversarial attacks — FGSM, DeepFool, and C&W — and evaluate two defense mechanisms: adversarial training and Denoising Autoencoder (DAE). Our experimental results demonstrate that the baseline model is highly susceptible to adversarial perturbations, with accuracy dropping from 54.02% to as low as 10.80% under DeepFool attack. FGSM-based adversarial training improves robustness across multiple attacks, with a modest clean-accuracy drop. DAE preprocessing preserves clean accuracy but provides only limited gains under iterative L2 attacks. These findings highlight the urgent need for robust defense mechanisms in deep learning-based wireless communication systems.",
    tags: [
      "Adversarial Robustness",
      "Security",
      "Wireless Communication",
      "Deep Learning",
    ],
  },
];
