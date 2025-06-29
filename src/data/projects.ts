import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ai-automation",
    title: "AlphaMition AI Workforce",
    description:
      "AI automation platform that replaces 10 human workloads with intelligent task orchestration",
    category: "AI Automation",
    tags: [
      "AI Agents",
      "Workflow Automation",
      "RPA",
      "LLMs",
      "Next.js",
      "Node.js",
      "Firebase",
      "MongoDB",
    ],
    imageUrl: "/alphamition.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    date: "January 2025",
    clientName: "Enterprise Solutions Inc.",
    projectUrl: "https://alphamition.vercel.app/",
    content: {
      overview:
        "AlphaMition deploys AI workers that autonomously handle repetitive business processes - equivalent to a 10-person team - with 99.8% accuracy and 24/7 availability. The platform learns organizational workflows and continuously optimizes task execution.",
      challenge:
        "Businesses face unsustainable scaling costs (avg. $1.2M/year for 10 employees) and operational bottlenecks from manual processes. Human teams can't maintain consistency across high-volume repetitive tasks.",
      solution: [
        "Built AI Orchestrator Engine combining LLMs (GPT-4, Claude) with RPA for complex decision-making",
        "Developed no-code workflow builder with 150+ pre-trained automation templates",
        "Implemented real-time monitoring dashboard showing AI vs human productivity metrics",
        "Created hybrid validation system where AI proposes actions and humans approve exceptions",
      ],
      results: [
        "87% reduction in operational costs for first 50 clients",
        "300% faster process completion vs human teams",
        "5.2x ROI within first 6 months of implementation",
        "92% user adoption rate (vs industry avg 35% for automation tools)",
      ],
      technologies: [
        "Next.js (App Router)",
        "Node.js (NestJS)",
        "Firebase (Auth/Realtime DB)",
        "MongoDB Atlas",
        "Python (AI models)",
        "RabbitMQ (task queue)",
        "Docker/Kubernetes",
        "Stripe (billing)",
      ],
      gallery: [
        "/alphamition.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "/alphacanvas.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "/alphaboard.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],
    },
  },
  {
    id: "alphalise",
    title: "Alphalise AI Trading Analysis",
    description:
      "AI-powered trading analysis platform providing real-time market insights and precise trading signals.",
    category: "AI Trading Analysis",
    tags: [
      "AI Agents",
      "Trading Signals",
      "Technical Analysis",
      "Machine Learning",
      "Next.js",
      "Node.js",
      "supabase",
      "MySQL",
    ],
    imageUrl: "/Alphalise.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    date: "mai 2025",
    clientName: "Alphalise Inc.",
    projectUrl: "https://www.alphalise.com/",
    content: {
      overview:
        "Alphalise leverages advanced AI models to analyze market data and chart patterns in real time, delivering accurate entry points and trading signals. The platform continuously learns and adapts to market trends to optimize trading decisions for users.",
      challenge:
        "Traders struggle to process massive volumes of market data and identify reliable signals quickly. Manual technical analysis is time-consuming and prone to human error, limiting trading efficiency and profitability.",
      solution: [
        "Developed AI-driven analytics engine combining LLMs and technical indicators to generate actionable trading signals",
        "Built real-time dashboard to visualize market trends, signal strength, and trade recommendations",
        "Implemented adaptive learning algorithms to personalize signals based on user trading behavior and market changes",
        "Integrated secure user authentication and subscription management via Firebase and Stripe",
      ],
      results: [
        "Improved signal accuracy by over 90%, reducing false positives",
        "Enhanced trader decision-making speed by 3x through real-time AI insights",
        "Achieved high user retention and engagement through personalized analytics",
        "Scalable platform supporting hundreds of simultaneous users with minimal latency",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "Supabse (Auth, database)",
        "MySQL",
        "Python (AI/ML models)",
        "Stripe (payments)",
      ],
      gallery: [
        "/Alphalise.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "/alphalise-dashboard.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "/alphalise-signals.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],
    },
  },
  {
  "id": "dailydone",
  "title": "DailyDone",
  "description": "Application SaaS simple et intuitive pour suivre et gérer ses habitudes quotidiennes, avec un suivi précis et une interface conviviale.",
  "category": "SaaS Habits Tracker",
  "tags": [
    "Next.js",
    "Firebase",
    "Firebase Auth",
    "Habit Tracking",
    "SaaS",
    "React",
    "TypeScript"
  ],
  "imageUrl": "/DailyDone.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "featured": true,
  "date": "juin 2025",
  "clientName": "Ayman Azhar",
  "projectUrl": "https://daily-done-blue.vercel.app/",
  "content": {
    "overview": "DailyDone permet aux utilisateurs de créer, suivre et gérer facilement leurs habitudes quotidiennes. L'application propose une interface simple pour marquer chaque jour si une habitude a été accomplie, et fournit des statistiques hebdomadaires pour suivre la progression et encourager la constance.",
    "challenge": "De nombreux utilisateurs ont du mal à maintenir la régularité dans leurs habitudes, faute d'outils simples et motivants pour suivre leurs progrès. Il fallait concevoir une solution légère, rapide et sécurisée, accessible à tous.",
    "solution": [
      "Création d'un système d'authentification sécurisé via Firebase pour la gestion des utilisateurs",
      "Développement d'un tableau de bord interactif pour gérer les habitudes et visualiser les progrès",
      "Implémentation d'un suivi quotidien avec possibilité de cocher l'accomplissement d'une habitude",
      "Utilisation de Supabase comme base de données temps réel pour stocker habitudes et logs",
      "Mise en place d'un design responsive et ergonomique avec Next.js et React"
    ],
    "results": [
      "Application fonctionnelle en 3H (MVP) avec toutes les fonctionnalités principales",
      "Interface claire et facile à utiliser, favorisant l'engagement des utilisateurs",
      "Stockage fiable des données avec mise à jour en temps réel des statistiques",
      "Base solide pour futures évolutions telles que notifications et statistiques avancées"
    ],
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase (authentification, base de données temps réel)",
      "Firebase Authentication",
      "TailwindCSS"
    ],
    "gallery": [
      "/DailyDone.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "/dailydone-dashboard.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      
      "dailydoneDatabase.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  }
}

];
