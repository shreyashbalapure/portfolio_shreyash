import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Counter from "./components/hero/Counter";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import TechStack from "./components/technologies/Technologies";
import Portfolio from "./components/projects/Portfolio";
import Education from "./components/education/Education";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="counter">
        <Counter />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="technologies">
        <TechStack />
      </section>
      <section id="projects">
        <Portfolio />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
