
"use client";

import HeroSection from "@/components/HeroSection";
import "@/style/heroSection.css";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import AboutMe from "@/components/about/AboutMe";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Education from "@/components/education/Education";

export default function Home() {
	return (
		<main className="bg-gray-800">
			<section className="min-h-dvh hero-bg">
				<HeroSection />
			</section>
			<AboutMe />
			{/* <Skills /> */}
			{/* <Education /> */}
			{/* <Projects /> */}
			{/* <Contact /> */}
			{/* <Footer /> */}
		</main>
	);
}
