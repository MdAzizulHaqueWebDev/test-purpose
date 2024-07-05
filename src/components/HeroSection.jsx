/** @format */
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
// import HeroTypeWrite from "@/style/HeroTypeWrite";
const HeroSection = () => {
	return (
		<div class="pt-14">
			<section class="relative flex flex-col-reverse items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:pt-12 xl:max-w-6xl">
				<div class="w-full h-96 lg:w-1/2 lg:h-[600px] relative">
					<img
						width={"100%"}
						class="h-full px-1 rounded lg:p-0 md:rounded w-full object-cover"
						src="https://i.postimg.cc/MZnXBnhD/Whats-App-Image-2023-12-21-at-11-04-25-c77f60b4.jpg"
						alt="my image"
					/>
					<div class="absolute top-14 right-14 text-4xl lg:text-7xl filter text-blue-500 animate-spin transition-all ">
						<FaReact />
					</div>
					<div class="absolute bottom-14 right-14 text-4xl lg:text-7xl text-emerald-400 animate-pulse transition-all ">
						<FaNodeJs />
					</div>
				</div>

				<div class="max-w-lg bg-[#111] md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
					<div class="flex flex-col p-8 md:px-12 space-y-3 text-gray-300">
						<h2 class="text-2xl font-medium uppercase text-emerald-500 lg:text-4xl">
							Hi there , I'm Azizul Haque <br />
						</h2>
						{/* <HeroTypeWrite /> */}
						<p class="">
							A self-motivated and enthusiastic web developer passionate about
							leveraging my skills to contribute to both personal and company
							growth. I aim to build confidence and recognition in the web
							development field while showcasing my innovative and creative
							abilities. I am always eager to learn new technologies and embrace
							new experiences
						</p>
						<div class="flex gap-4 text-4xl">
							<Link href="#">
								<CiLinkedin class="hover:scale-105 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-1" />
							</Link>
							<Link href="#">
								<FaGithub class="hover:scale-105 hover:shadow-md rounded-full p-1" />
							</Link>
							<Link href="#">
								<FaFacebook class="hover:scale-105 hover:bg-blue-500 rounded-full p-1" />
							</Link>
						</div>
						<div class="space-y-1 lg:space-x-2">
							<a
								download="/MY Resume.pdf"
								href="/MY Resume.pdf"
							>
								<button
									href="#"
									class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-emerald-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
								>
									Resume
								</button>
							</a>
							<Link
								href="/#contact"
								class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-emerald-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
							>
								Contact Me
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HeroSection;
