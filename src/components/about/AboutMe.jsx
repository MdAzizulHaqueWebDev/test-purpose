
"use client";
/** @format */
import "@/style/aboutMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
AOS.init();
const AboutMe = () => {
	return (
		<div id="about" class="min-h-dvh bg-gray-800 text-gray-200">
			<div class="flex flex-col-reverse lg:flex-row-reverse items-center mx-auto max-w-screen-xl">
				<div
					class="sm:w-1/2 p-10"
					data-aos="zoom-in-left"
					data-aos-duration="2000"
				>
					<div class="outer">
						<div class="dot"></div>
						<div class="card">
							<img
								loading="lazy"
								src="https://i.postimg.cc/wTXZDCPT/Whats-App-Image-2023-12-21-at-11-02-16-24efd585-removebg.png"
							/>
							<div class="line topl"></div>
							<div class="line leftl"></div>
							<div class="line bottoml"></div>
							<div class="line rightl"></div>
						</div>
					</div>
				</div>
				<div class="sm:w-1/2 p-5">
					<div class="text">
						<h1 class="text-3xl font-semibold my-4">
							<span class="font-bold underline">Ab</span>out Me
						</h1>
						<p data-aos="fade-up-right" data-aos-duration="3000">
							I am a MERN-Stack WEB Developer. I am working with React, Node.js
							and MongoDB. I also have experience in developing static websites
							using HTML5, CSS3 and JavaScript (ES6). I am a quick learner. I
							believe in hard work and efficiency. That's why I am always ready
							to accomplish any task by working hard. I always focus on learning
							new technology. My goal is to become A World-Class Professional
							Web Developer.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
