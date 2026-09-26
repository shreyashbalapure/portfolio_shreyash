"use client";

import React, { useState } from "react";
import { FaGithub, FaCode, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

type Project = {
  title: string;
  tagline: string;
  category: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  isFeatured?: boolean;
};

const projects: Project[] = [
  {
    title: "IndiaTechPulse",
    tagline: "AI Job Aggregator, Content Brief Generator & Auto-Applier",
    category: "AI & Full-Stack Platform",
    isFeatured: true,
    highlights: [
      "Built a full-stack job-aggregation platform for the Indian tech market, consolidating listings from multiple sources into a unified, searchable feed.",
      "Integrated Groq’s LLM API to auto-generate concise AI-written briefs for each job listing, improving content scannability.",
      "Designed n8n automation workflows for web scraping, data ingestion, and resume-to-job matching pipelines.",
      "Bypassed anti-bot restrictions (Cloudflare, Akamai) on major job portals by integrating Apify scraping actors.",
      "Developed companion LinkedIn auto-applier control panel ('Antigravity') exposing secure API endpoints for server-side job application automation.",
      "Deployed on Vercel with PostgreSQL (Neon) primary datastore for job listings, skill trends, and user connections."
    ],
    techStack: ["Next.js", "Groq API (LLM)", "n8n", "PostgreSQL (Neon)", "Apify", "Vercel"],
    githubUrl: "https://github.com/shreyashbalapure",
    liveUrl: "https://github.com/shreyashbalapure",
  },
  {
    title: "Uniform Case Management System (UCMS)",
    tagline: "Enterprise Case Processing & Workflow Management System",
    category: "Full-Stack Enterprise",
    isFeatured: true,
    highlights: [
      "Workflow-driven case management system processing 100+ active cases across 5+ lifecycle stages (creation, review, hearing, appeal, closure).",
      "Implemented Redux-based state management across 8+ complex transition flows, reducing state-related bugs by 40%.",
      "Designed RBAC for 4+ user roles securing access to 15+ critical operations with zero unauthorized action attempts.",
      "Integrated 10+ RESTful API endpoints for real-time case updates & document tracking (cutting latency by 35%).",
      "Authored 30+ Jest unit tests across components and API handlers to improve code reliability and prevent regressions.",
      "Optimized application performance by 45% via lazy loading and rendering tuning, reducing initial load time from 4s to <2.5s."
    ],
    techStack: ["React.js", "Redux", "REST APIs", "RBAC", "JWT", "Jest"],
    githubUrl: "https://github.com/shreyashbalapure",
    liveUrl: "https://github.com/shreyashbalapure",
  },
  {
    title: "DocumentCapture by Wingen",
    tagline: "Digital Document Signing & Audit Trail Platform",
    category: "Enterprise Web App",
    isFeatured: true,
    highlights: [
      "Digital document signing platform processing 500+ documents monthly with zero data loss, enabling secure client-service exchange.",
      "Integrated Dropbox Signature API (formerly HelloSign) with full audit trail support, reducing turnaround time by 60%.",
      "Built 12+ FastEndpoints API routes achieving sub-200ms average response time for document retrieval and status operations.",
      "Implemented Angular front-end with real-time tracking, RBAC for 3 user levels, and AES encryption for all stored documents.",
      "Optimized MSSQL queries and added API-level caching, cutting average database query time by 30%."
    ],
    techStack: ["Angular", ".NET Core (FastEndpoints)", "Dropbox Signature API", "MSSQL", "AES Encryption"],
    githubUrl: "https://github.com/shreyashbalapure",
    liveUrl: "https://github.com/shreyashbalapure",
  },
  {
    title: "Ticketing System Application",
    tagline: "Full-Stack End-to-End Issue Tracking & Queue Management",
    category: "Full-Stack System",
    isFeatured: false,
    highlights: [
      "Scalable ticketing system supporting end-to-end issue tracking and priority-based resolution management.",
      "Dual-module RBAC: customer module (create, track, update tickets) and admin module (assign priorities, manage queues, resolve issues).",
      "Integrated ShadCN UI component library for a modern accessible interface, cutting component build time by 30%.",
      "Designed normalized PostgreSQL schema with Prisma ORM, reducing redundant queries by 25%."
    ],
    techStack: ["Next.js", "ShadCN UI", "Prisma", "PostgreSQL", "RBAC"],
    githubUrl: "https://github.com/shreyashbalapure",
    liveUrl: "https://github.com/shreyashbalapure",
  },
  {
    title: "PartingOut.com Website",
    tagline: "E-Commerce & Inventory Management System for Vehicle Parts",
    category: "E-Commerce",
    isFeatured: false,
    highlights: [
      "Responsive e-commerce platform built for vehicle parts catalog management, inventory tracking, and sales.",
      "Implemented RESTful APIs in .NET Core for secure user authentication, product listings, and order lifecycle management.",
      "Optimized relational database queries in MSSQL for high-throughput product searches and cart operations."
    ],
    techStack: ["Angular", ".NET Core", "MSSQL", "REST APIs"],
    githubUrl: "https://github.com/shreyashbalapure",
    liveUrl: "https://github.com/shreyashbalapure",
  },
  {
    title: "Food Ordering & Restaurant Portal",
    tagline: "Responsive Online Food Ordering & Payment System",
    category: "E-Commerce / Full-Stack",
    isFeatured: false,
    highlights: [
      "Full-stack food ordering portal allowing users to browse menu items, filter categories, customize orders, and process payments.",
      "Integrated Stripe API for secure checkout workflows and real-time transaction feedback.",
      "Built admin order management dashboard for live order tracking and menu configuration."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"],
    githubUrl: "https://github.com/shreyashbalapure/food_ordering-main",
    liveUrl: "https://food-ordering-frontend-gbxz.onrender.com",
  },
];

function TechStackBadge({ tech }: { tech: string }) {
  return (
    <span className="px-2.5 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-md">
      {tech}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
    >
      <div className="p-6">
        {/* Category & Badge */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#14b8a6]">
            {project.category}
          </span>
          {project.isFeatured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-[#d946ef] border border-purple-500/20">
              <FaRobot className="w-3 h-3" /> Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
          {project.tagline}
        </p>

        {/* Highlights List */}
        <div className="mb-4">
          <ul className="space-y-2">
            {(isExpanded ? project.highlights : project.highlights.slice(0, 2)).map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="text-[#14b8a6] font-bold text-base leading-none">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {project.highlights.length > 2 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-xs font-bold text-[#d946ef] hover:underline flex items-center gap-1 transition-colors"
            >
              {isExpanded ? (
                <>Show Less <FaChevronUp className="w-3 h-3" /></>
              ) : (
                <>Read {project.highlights.length - 2} More Details <FaChevronDown className="w-3 h-3" /></>
              )}
            </button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-[#d946ef] mb-2 flex items-center gap-1">
            <FaCode className="w-3.5 h-3.5" /> Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <TechStackBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="p-6 pt-0 flex gap-3 mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <FaGithub className="w-4 h-4" /> Code
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#14b8a6] border border-transparent rounded-xl text-sm font-semibold text-white hover:bg-[#10a396] transition-colors"
        >
          <FaExternalLinkAlt className="w-3.5 h-3.5" /> View Project
        </a>
      </div>
    </motion.div>
  );
}

const Portfolio: React.FC = () => {
  return (
    <section
      id="projects"
      className="dark:bg-[#0A0A0A] bg-white overflow-x-hidden py-16 mx-auto px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#d946ef] text-center">
          Featured Projects & Achievements
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Production-grade applications and workflow automation tools designed and deployed with modern full-stack architectures and AI integrations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
