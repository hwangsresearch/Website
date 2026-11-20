export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/team", label: "People" },
];

export type ResearchArea = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  video?: string; // shown as a featured field on the home page
};

export const researchAreas: ResearchArea[] = [
  {
    id: "federated-learning",
    title: "Federated Learning",
    description:
      "Training one model across many clients whose data and architectures differ, without collecting the data.",
    longDescription:
      "We study federated learning when clients are genuinely different: different data, different model architectures, different participation patterns. AdaFed examined seven heterogeneous driving models and found that no aggregation strategy beat local training, so the useful question became which one loses the least. CI-FL borrows ideas from caching to reduce communication between rounds.",
    tags: ["heterogeneity", "aggregation", "communication"],
    video: "/videos/typing",
  },
  {
    id: "autonomous-driving",
    title: "Autonomous Driving",
    description:
      "End-to-end driving models built on state-space sequence models, evaluated in closed loop in CARLA.",
    longDescription:
      "We build end-to-end driving stacks on Mamba state-space models, which handle long input sequences at lower cost than attention. H2PFUser is our main effort here. We evaluate in CARLA and report closed-loop results alongside the per-model baselines.",
    tags: ["end-to-end", "Mamba", "CARLA"],
    video: "/videos/driving",
  },
  {
    id: "time-series-forecasting",
    title: "Time-Series Forecasting",
    description:
      "Forecasting architectures for non-stationary data, balancing context length against inference cost.",
    longDescription:
      "Real forecasting data drifts over time and mixes short and long patterns. NyRA is a new architecture aimed at that setting. We measure accuracy and inference cost together, because a model that is accurate but too slow to run is of limited use.",
    tags: ["forecasting", "sequence modelling"],
    video: "/videos/data",
  },
  {
    id: "computational-biology",
    title: "Computational Biology",
    description:
      "Topological data analysis of gene expression, and careful baselines for single-cell disease classification.",
    longDescription:
      "We apply topological data analysis to genomic data. H2C used persistent homology in an autoencoder latent space to find a 37-gene pan-cancer panel that standard univariate tests miss. Our CKAIA 2026 benchmark tested the same family of methods on Alzheimer's single-nucleus data and found that simple pseudobulk averaging did better. We report both results.",
    tags: ["persistent homology", "RNA-seq", "single-cell"],
  },
  {
    id: "security",
    title: "Robustness & Security",
    description:
      "How deep learning models fail under adversarial input, and which defences actually help.",
    longDescription:
      "Our ICAIIC 2026 paper measured how a modulation classifier for wireless signals behaves under FGSM, DeepFool, and C&W attacks. Accuracy fell from 54% to 11% in the worst case. Adversarial training helped across attacks; a denoising autoencoder kept clean accuracy but did little against iterative attacks.",
    tags: ["adversarial attacks", "defences", "wireless"],
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing",
    description:
      "A qubit simulator for prototyping gate-based and variational algorithms before running on hardware.",
    longDescription:
      "PRISM is a qubit simulator we use to write and test gate-based and variational algorithms before moving them to real hardware. It is built for researchers trying out ideas, with a short path from an idea to a working circuit.",
    tags: ["simulation", "variational algorithms"],
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
      "A federated learning framework that applies caching ideas to cut the communication needed between training rounds.",
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
    tagline: "Adaptive Selective Aggregation for Heterogeneous FL",
    description:
      "Selective aggregation for federated learning across models with different architectures. Models share only the backbone layers they have in common, blend shared and local weights adaptively, and roll back any round that makes validation worse. Evaluated on seven driving models in CARLA.",
    tags: [
      "Federated Learning",
      "Autonomous Driving",
      "Heterogeneous Models",
      "Adaptive Aggregation",
    ],
    status: "Active",
    featured: false,
    github: "https://github.com/hwangsresearch/AdaFed",
  },
  {
    id: "prism",
    name: "PRISM",
    tagline: "Quantum Simulator",
    description:
      "A qubit simulator for prototyping quantum algorithms, including hybrid quantum-classical workloads.",
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
      "A new architecture for time-series forecasting, designed to stay accurate on drifting data without a large inference cost.",
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
    bio: "Founded Hwang's Research in 2025 and sets its research direction, working on federated learning across heterogeneous models, Mamba-based autonomous driving, topological analysis of genomic data, and quantum simulation. First author on all of the laboratory's papers to date.",
    areas: ["Federated Learning", "Autonomous Driving", "Computational Biology", "Quantum Computing"],
    links: [
      { label: "Website", href: "https://www.sjhwang.com/" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=6X2EVE0AAAAJ" },
      { label: "GitHub", href: "https://github.com/justinbrianhwang" },
    ],
  },
  {
    id: "dohyun-hwang",
    name: "Dohyun Hwang",
    role: "Assistant Researcher",
    avatar: "/dohyun-hwang.png",
    bio: "Co-author on each of the laboratory's publications, working on experiments and system development across federated learning, autonomous driving, genomics, and adversarial robustness.",
    areas: ["Federated Learning", "Autonomous Driving", "Computational Biology", "Robustness"],
    links: [
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=zU73WlUAAAAJ" },
      { label: "GitHub", href: "https://github.com/ezwez1203" },
      { label: "Website", href: "https://ezwez1203.github.io/myPortfolio/home" },
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
  status?: "Accepted" | "Published";
};

export const publications: Publication[] = [
  {
    id: "pseudobulk-vs-topological-ad-ckaia-2026",
    title:
      "Simple Pseudobulk Outperforms Topological and Quantum-Geometric Readouts of Single-Nucleus Chromatin and Transcriptomes for Donor-Level Alzheimer's Classification: A Rigorous Benchmark in a Powered Multiome Cohort",
    authors: ["Sunjun Hwang", "Dohyun Hwang"],
    venue: "2026 Conference of the Korea Artificial Intelligence Association",
    venueShort: "CKAIA 2026",
    year: 2026,
    abstract:
      "Topological data analysis and quantum-geometric distances have been proposed as donor-level readouts of single-cell disease state, on the premise that the geometry and shape of a cell-state manifold within a cell type carry information that simple pseudobulk averaging discards. We tested this premise rigorously in a powered, openly available Alzheimer's disease multiome cohort with 111 donors, 6 brain regions, and over 2.2 million transcriptomic and 1.2 million chromatin nuclei. We first established that donor-level pathology is genuinely detectable: RNA pseudobulk classified late-AD versus non-AD donors at AUC 0.86, and chromatin pseudobulk reached AUC 0.91 in excitatory neurons, with consistent positive controls. We then benchmarked persistent-homology features under classical and quantum-geometric distances, on both a standard latent and a learned geometry-preserving autoencoder latent. Under repeated cross-validation and covariate adjustment, simple pseudobulk-mean was the most robust readout across all six cell types; topological and quantum-geometric features performed at or near chance and never robustly exceeded pseudobulk. A single apparent win did not replicate under repeated cross-validation and collapsed to chance after sequencing-depth adjustment, illustrating how single-split evaluation and depth confounding can manufacture false topological signal. We conclude that parsimonious pseudobulk is the appropriate baseline for this task, and that topological readouts require this baseline, repeated cross-validation, and depth control before any claim of added value.",
    tags: [
      "Single-Cell Genomics",
      "Alzheimer's Disease",
      "Topological Data Analysis",
      "Pseudobulk",
      "Benchmark",
    ],
  },
  {
    id: "h2c-tda-cancer-coins-2026",
    title:
      "H2C: A Pan-Cancer Gene Panel Discovered via Persistent Homology in Topological Autoencoder Latent Space",
    authors: ["Sunjun Hwang", "Dohyun Hwang", "Eunho Choi"],
    venue:
      "2026 IEEE International Conference on Omni-Layer Intelligent Systems",
    venueShort: "IEEE COINS 2026",
    year: 2026,
    status: "Accepted",
    abstract:
      "RNA-seq-based cancer biomarker discovery predominantly relies on Euclidean statistics such as t-tests and fold-change analysis, which cannot capture multivariate nonlinear interactions among genes. We propose a pipeline combining Topological Autoencoders (TAE) with Persistent Homology (PH) to analyze the topological structure of gene expression data. Applied to TCGA-BRCA (1,215 samples, 20,862 genes), our pipeline encodes RNA-seq profiles into a 32-dimensional latent space with topology-preserving constraints and computes Vietoris–Rips persistent homology. Size-matched permutation tests show that tumor samples exhibit approximately 2.5× more H1 loops than normal samples (p < 0.001). Through decoder Jacobian-based gene traceback, we identify 37 genes (the H2C panel) that rank within the TDA top 200 yet are not significant under standard univariate analysis. H2C achieves strong classification performance (AUC = 0.993 for BRCA, AUC = 0.977 for pan-cancer across 33 cancer types) and significant prognostic value (log-rank p = 2.03×10⁻⁷). These results suggest TDA provides a complementary perspective for identifying cancer-associated signals beyond standard Euclidean analysis.",
    tags: [
      "Topological Data Analysis",
      "Persistent Homology",
      "Cancer Genomics",
      "Autoencoder",
      "RNA-seq",
    ],
  },
  {
    id: "adafed-heterogeneous-fl-icufn-2026",
    title:
      "AdaFed: Adaptive Selective Aggregation for Heterogeneous Federated Learning in Autonomous Driving",
    authors: ["Sunjun Hwang", "Dohyun Hwang"],
    venue:
      "2026 International Conference on Ubiquitous and Future Networks",
    venueShort: "ICUFN 2026",
    year: 2026,
    status: "Accepted",
    abstract:
      "We present a comprehensive empirical study of federated learning (FL) for seven heterogeneous autonomous driving models and propose AdaFed, an adaptive selective aggregation strategy. We introduce a tier-based partial backbone sharing framework that groups models by shared architectural components (ResNet-34/50 backbones, BEV encoders, and BEV-Lift modules) and evaluate six FL strategies: FedAvg, FedProx, SCAFFOLD, FedMD, FedDF, and AdaFed. Across all seven models, no FL strategy surpasses the per-model imitation-learning baseline; the practical question is therefore which strategy minimises degradation. AdaFed applies a tier-specific base strategy, blends aggregated and local weights with an adaptive coefficient, and reverts any round-level update that worsens validation error. Experiments on CARLA 0.9.16 reveal that partial backbone averaging stays closest to the IL baseline for ResNet-50 models, knowledge-distillation approaches degrade performance, and AdaFed yields the best FL result for the two models most exposed to negative transfer — VAD and UniAD. These findings provide practical guidelines for heterogeneous FL deployment in autonomous driving.",
    tags: [
      "Federated Learning",
      "Autonomous Driving",
      "Heterogeneous Models",
      "Adaptive Aggregation",
      "CARLA",
    ],
  },
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
    status: "Published",
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
