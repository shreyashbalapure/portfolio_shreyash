"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="dark:bg-[#0A0A0A] overflow-x-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 md:pl-12 mb-5"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#d946ef]">About Me</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 lg:text-lg leading-relaxed">
            <p>
              I am a <strong>Full-Stack Software Developer</strong> with over 2 years of professional experience delivering scalable, workflow-driven web applications and AI-powered products. My core stack includes <strong>React.js, Next.js, Angular, and .NET Core</strong>, backed by strong relational database architecture using <strong>MSSQL and PostgreSQL (Neon)</strong>.
            </p>
            <p>
              Currently at <strong>Baxture Technologies</strong>, I design state-driven user interfaces, architect secure JWT authentication with Role-Based Access Control (RBAC), and build high-performance RESTful APIs. I also specialize in <strong>AI Integration & Workflow Automation</strong>—leveraging <strong>Groq LLM APIs</strong> and <strong>n8n automation pipelines</strong> to power intelligent content generation and data processing workflows.
            </p>
            <p>
              Holding a <strong>Master of Computer Application (MCA)</strong> degree from Savitribai Phule Pune University (CGPA 7.42) and a <strong>BCA</strong> (84.57%), I combine theoretical computer science fundamentals with an active competitive programming mindset (LeetCode / HackerRank). I thrive in Agile/Scrum environments shipping reliable, production-grade software on time.
            </p>
          </div>
    </motion.div>

        {/* Image Section */ }
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="w-full md:w-1/2"
  >
    <Image
      src="/about.jpg"
      height={500}
      width={500}
      alt="Professional Profile"
      className="lg:ml-48"
      quality={100}
    />
  </motion.div>
      </div >
    </section >
  );
}
