"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaCode } from "react-icons/fa";

export default function Education() {
  const educationList = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Savitribai Phule Pune University",
      period: "2023 – 2025",
      score: "CGPA: 7.42 / 10.00",
      description: "Advanced coursework in full-stack development, software engineering, cloud architectures, and database management.",
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Sant Gadge Baba Amravati University",
      period: "2020 – 2023",
      score: "Percentage: 84.57%",
      description: "Core specialization in computer science fundamentals, data structures, algorithms, and object-oriented programming.",
    },
  ];

  const certifications = [
    { name: "Full Stack Web Development Course", issuer: "Udemy" },
    { name: "Java Full Stack Development Course", issuer: "JSpiders Pune" },
    { name: "Web Development Course", issuer: "CCIT Amravati" },
    { name: "Diploma in Java", issuer: "CCIT Amravati" },
    { name: "Certificate in Web Development", issuer: "Sololearn" },
  ];

  const extracurriculars = [
    "Competitive Coding: Active participant on HackerRank and LeetCode, continually honing algorithmic thinking and data structures proficiency.",
    "Cross-Language Versatility: Solved complex algorithmic challenges across JavaScript, Java, and C++, building adaptable problem-solving skills for full-stack & backend engineering.",
  ];

  return (
    <section id="education" className="py-16 bg-white dark:bg-[#0A0A0A] px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#d946ef]">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Academic Background */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg text-[#d946ef]">
                <FaGraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-gray-50 dark:bg-gray-900 border-l-4 border-[#14b8a6] rounded-r-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/10 text-[#14b8a6]">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-[#d946ef] font-medium text-sm mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-2">
                    {edu.score}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Accomplishments */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-teal-500/10 rounded-lg text-[#14b8a6]">
                <FaAward className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications & Achievements
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 flex items-center justify-between"
                >
                  <span className="text-gray-900 dark:text-gray-100 font-semibold text-sm sm:text-base">
                    {cert.name}
                  </span>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-2.5 py-1 rounded-md">
                    {cert.issuer}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Extracurricular / Problem Solving */}
            <div className="bg-gradient-to-r from-purple-900/20 to-teal-900/20 border border-purple-500/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3 text-[#d946ef]">
                <FaCode className="w-5 h-5" />
                <h4 className="font-bold text-gray-900 dark:text-white">
                  Competitive Coding & Versatility
                </h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                {extracurriculars.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#14b8a6] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
