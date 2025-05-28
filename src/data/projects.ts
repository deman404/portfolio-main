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
];
