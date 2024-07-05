
"use client";
/** @format */
import { VscVscodeInsiders } from "react-icons/vsc";
import "@/style/skillsSection.css";
import "@/style/skillPercentage.css";
import { RiTailwindCssFill, RiFirebaseLine } from "react-icons/ri";
import {
	SiDevdotto,
	SiExpress,
	SiFigma,
	SiJsonwebtokens,
	SiMongodb,
	SiRetool,
} from "react-icons/si";
import {
	FaCss3,
	FaGithub,
	FaHtml5,
	FaJs,
	FaNodeJs,
	FaReact,
} from "react-icons/fa";
const Skills = () => {
	return (
		<div
			id="skills"
			class="min-h-dvh skills-bg text-gray-200 py-10"
			data-aos-duration="1000"
			data-aos="fade-up"
			data-aso-delay="2000"
		>
			<h1 class="text-3xl text-center font-bold my-2">
				<span class="font-bold underline">Sk</span>ills
			</h1>

			<div class="grid grid-cols-8 gap-2 p-4">
				<section class="col-span-full lg:col-span-4 border-e-2  p-4">
					<h1 class="text-3xl font-semibold ">
						<span class="font-bold underline">Fr</span>ont-end
					</h1>
					<div class="flex flex-wrap gap-3  p-4">
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<FaHtml5 />
							</div>
						</div>
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl text-blue-400  rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<FaCss3 />
							</div>
						</div>
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl text-emerald-400  rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<RiTailwindCssFill />
							</div>
						</div>
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl text-yellow-400  rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<FaJs />
							</div>
						</div>
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl text-blue-300  rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<FaReact />
							</div>
						</div>
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl text-yellow-400  rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<RiFirebaseLine />
							</div>
						</div>
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl text-cyan-400  rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<SiJsonwebtokens />
							</div>
						</div>
					</div>
				</section>
				<section class="col-span-full lg:col-span-4 p-4">
					<h1 class="text-3xl font-semibold">
						<span class="font-bold underline">Ba</span>ck-end
					</h1>
					<div class="pt-3 flex flex-wrap gap-3  p-4">
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl text-emerald-400 rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<FaNodeJs />
							</div>
						</div>
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl text-emerald-400 rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<SiMongodb />
							</div>
						</div>
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl text-emerald-400  rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<SiExpress />
							</div>
						</div>
					</div>
				</section>

				{/* <section class="col-span-full lg:col-span-3 border-t-2 p-4">
					<h1 class="text-3xl font-semibold">
						<span class="font-bold underline">St</span>ats
					</h1>
					<div class="flex flex-col mx-auto gap-2 max-w-xl p-2">
						<div>
							<span class="text-xl font-bold">Front-End</span>
							<div class="relative">
								<div class="w-full bg-gray-200 rounded-sm h-4">
									<div
										class="bg-emerald-400 h-full rounded-sm pb-1 text-black"
										style={{ width: "80%" }}
									>
										80%
									</div>
								</div>
							</div>
						</div>

						<div>
							<span class="text-xl font-bold">Backend</span>
							<div class="relative">
								<div class="w-full bg-gray-200 rounded-sm h-4">
									<div
										class="bg-emerald-600 h-full rounded-sm pb-1 text-black"
										style={{ width: "30%" }}
									>
										30%
									</div>
								</div>
							</div>
						</div>

						<div>
							<span class="text-xl font-bold">Tools</span>
							<div class="relative">
								<div class="w-full bg-gray-200 rounded-sm h-4">
									<div
										class="bg-green-500 h-full rounded-sm p-1 text-black"
										style={{ width: "90%" }}
									>
										90%
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}
				<section class="col-span-full border-t-2 justify-center p-4">
					<h1 class="text-3xl font-semibold">
						<span class="font-bold underline">To</span>ols
					</h1>
					<section class="p-4 flex flex-wrap gap-2">
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<FaGithub />
							</div>
						</div>
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl text-blue-400  rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<VscVscodeInsiders />
							</div>
						</div>
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl text-blue-400  rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<SiRetool />
							</div>
						</div>
						<div class="w-20 h-20 bg-gray-700 group rounded-xl flex justify-center items-center overflow-hidden">
							<div class="text-4xl text-emerald-400  rounded-3xl duration-500 [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-95px_85px_75px_#FF00FF]">
								<SiFigma />
							</div>
						</div>
					</section>
				</section>
			</div>
		</div>
	);
};

export default Skills;
