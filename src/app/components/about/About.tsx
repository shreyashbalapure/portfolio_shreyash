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
          <div className="space-y-4 text-gray-600 dark:text-gray-300 lg:text-lg">
            <p>
              With over 2 years of experience as a Software Developer, I have a
              strong passion for crafting scalable, workflow-driven full-stack
              applications that drive business growth. Specializing in modern web
              technologies like React.js, Next.js, Angular, and .NET, I excel at
              building high-performance solutions with state-driven front-end
              interfaces and robust backend REST API architectures.
            </p>
          <p>
            Holding a Master of Computer Application (MCA) degree, I have
            developed expertise in Next.js, React.js, Angular, Redux, and
            .NET technologies, along with a solid foundation in extensive
            database management (MSSQL, PostgreSQL) and RESTful API development.
            My problem-solving mindset, combined with algorithmic thinking,
            allows me to create optimized and efficient solutions for complex
            technical challenges.
          </p>
          <p>
            Beyond development, I actively contribute to open-source projects
            and continuously expand my knowledge to stay at the forefront of
            emerging technologies. I thrive in collaborative environments,
            where I can mentor others, share insights, and drive meaningful
            digital innovation.
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
