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
              I am a Software Developer with a strong passion for crafting
              cutting-edge full-stack applications that drive business growth
              and enhance user experiences. Specializing in modern web
              technologies, I excel at building scalable, high-performance
              solutions with intuitive front-end interfaces and robust backend
              architectures.
            </p>
            <p>
              Holding a Bachelor's degree in Computer Applications (BCA), I have
              developed expertise in Angular, React.js, Next.js, and backend
              technologies, along with a solid foundation in database management
              and RESTful API development. My problem-solving mindset, combined
              with algorithmic thinking, allows me to create optimized and
              efficient solutions for complex technical challenges.
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

        {/* Image Section */}
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
      </div>
    </section>
  );
}
