import financePreview from "../assets/images/projects/finance-preview.png";
import cryptoPreview from "../assets/images/projects/crypto-preview.png";
import maisonPreview from "../assets/images/projects/maisonPreview.png";

export type Project = {
    title: string;
    description: string;
    tech: string[];
    liveUrl: string;
    githubUrl: string;
    image?: string;
};

export const projects: Project[] = [
    {
        title: "Personal Finance Platform",
        description:
            "A responsive personal finance dashboard for managing income, expenses, budgets, and user authentication.",
        tech: ["React", "JavaScript", "CSS"],
        liveUrl: "https://budgetbee-finance.vercel.app/",
        githubUrl: "https://github.com/Dev-Workspace-Lab/budgetbee-finance",
        image: financePreview,
    },
    {
        title: "Crypto Price Tracker",
        description:
            "A live cryptocurrency price tracker with conversion tools for comparing crypto values with fiat currencies.",
        tech: ["React", "JavaScript", "CSS"],
        liveUrl: "https://crypto-price-tracker-gilt.vercel.app/",
        githubUrl: "https://github.com/Dev-Workspace-Lab/crypto-price-tracker",
        image: cryptoPreview,
    },
    {
        title: "MAISON Operations Ledger",
        description:
            "A luxury retail operations dashboard for visualizing business metrics, reports, and performance insights.",
        tech: ["React", "TypeScript", "SCSS", "Recharts"],
        liveUrl: "https://maison-ops-seven.vercel.app/",
        githubUrl: "https://github.com/Dev-Workspace-Lab/maison-ops",
        image: maisonPreview,
    },
];