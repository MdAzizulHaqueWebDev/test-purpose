"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
	return (
		<section id="projects" class=" text-gray-200 py-10 ">
			<h1 class="text-4xl text-center font-bold my-4">My Latest Projects</h1>
			<div class="overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-4 mx-8">
				<section class="flex flex-col-reverse justify-center border hover:border-fuchsia-400 shadow-md  p-3">
					<div class="p-4">
						<div class="space-y-3">
							<h1 class="text-2xl font-semibold">Tourist Guide BD</h1>
							<small>
								"A comprehensive single-page web app for tourist guides in
								Bangladesh. Users can explore and book guided tours. The app
								features a Firebase authentication system with secure login and
								private routes. There is a dashboard for both tourists and
								guides, allowing guides to manage tours (CRUD operations) and
								tourists to review tours and track their bookings."
							</small>
							<div class="gap-1 flex flex-wrap text-sm">
								<p class="bg-emerald-800  p-1 rounded-sm">React.js</p>
								<p class="bg-emerald-800  p-1 rounded-sm">Node.js</p>
								<p class="bg-emerald-800  p-1 rounded-sm">MongoDB</p>
								<p class="bg-emerald-800  p-1 rounded-sm">Express.js</p>
								<p class="bg-emerald-800  p-1 rounded-sm">Firebase</p>
							</div>
							<div class="flex gap-2">
								<Link href="">
									<button class="flex gap-1 items-center hover:border-fuchsia-300 border shadow-xl p-2">
										<FaLink /> Live Site
									</button>
								</Link>
								<Link href="">
									<button class="flex gap-1 items-center hover:border-fuchsia-300 border shadow-xl p-2">
										<FaGithub />
										Source Code
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="relative overflow-hidden h-64 w-full p-5 rounded ring-1 ring-black ring-opacity-5">
						<img
							loading="lazy"
							style={{
								color: "transparent",
							}}
							src={
								"https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
							}
							alt={"alt"}
							className="absolute top-0 left-0 w-full transition-transform duration-1000 ease-in-out hover:transform hover:-translate-y-[80%] rounded"
						/>
					</div>
				</section>
				<section class="flex flex-col-reverse justify-center border hover:border-fuchsia-400 shadow-md  p-3">
					<div class="p-4">
						<div class="space-y-3">
							<h1 class="text-2xl font-semibold">Tourist Guide BD</h1>
							<small>
								"A comprehensive single-page web app for tourist guides in
								Bangladesh. Users can explore and book guided tours. The app
								features a Firebase authentication system with secure login and
								private routes. There is a dashboard for both tourists and
								guides, allowing guides to manage tours (CRUD operations) and
								tourists to review tours and track their bookings."
							</small>
							<div class="gap-1 flex flex-wrap text-sm">
								<p class="bg-emerald-800  p-1 rounded-sm">React.js</p>
								<p class="bg-emerald-800  p-1 rounded-sm">Node.js</p>
								<p class="bg-emerald-800  p-1 rounded-sm">MongoDB</p>
								<p class="bg-emerald-800  p-1 rounded-sm">Express.js</p>
								<p class="bg-emerald-800  p-1 rounded-sm">Firebase</p>
							</div>
							<div class="flex gap-2">
								<Link href="">
									<button class="flex gap-1 items-center hover:border-fuchsia-300 border shadow-xl p-2">
										<FaLink /> Live Site
									</button>
								</Link>
								<Link href="">
									<button class="flex gap-1 items-center hover:border-fuchsia-300 border shadow-xl p-2">
										<FaGithub />
										Source Code
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="relative overflow-hidden h-64 w-full p-5 rounded ring-1 ring-black ring-opacity-5">
						<img
							loading="lazy"
							style={{
								color: "transparent",
							}}
							src={
								"https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
							}
							alt={"alt"}
							className="absolute top-0 left-0 w-full transition-transform duration-1000 ease-in-out hover:transform hover:-translate-y-[80%] rounded"
						/>
					</div>
				</section>
				<section class="flex flex-col-reverse justify-center border hover:border-fuchsia-400 shadow-md  p-3">
					<div class="p-4">
						<div class="space-y-3">
							<h1 class="text-2xl font-semibold">Tourist Guide BD</h1>
							<small>
								"A comprehensive single-page web app for tourist guides in
								Bangladesh. Users can explore and book guided tours. The app
								features a Firebase authentication system with secure login and
								private routes. There is a dashboard for both tourists and
								guides, allowing guides to manage tours (CRUD operations) and
								tourists to review tours and track their bookings."
							</small>
							<div class="gap-1 flex flex-wrap text-sm">
								<p class="bg-emerald-800  p-1 rounded-sm">React.js</p>
								<p class="bg-emerald-800  p-1 rounded-sm">Node.js</p>
								<p class="bg-emerald-800  p-1 rounded-sm">MongoDB</p>
								<p class="bg-emerald-800  p-1 rounded-sm">Express.js</p>
								<p class="bg-emerald-800  p-1 rounded-sm">Firebase</p>
							</div>
							<div class="flex gap-2">
								<Link href="">
									<button class="flex gap-1 items-center hover:border-fuchsia-300 border shadow-xl p-2">
										<FaLink /> Live Site
									</button>
								</Link>
								<Link href="">
									<button class="flex gap-1 items-center hover:border-fuchsia-300 border shadow-xl p-2">
										<FaGithub />
										Source Code
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="relative overflow-hidden h-64 w-full p-5 rounded ring-1 ring-black ring-opacity-5">
						<img
							loading="lazy"
							style={{
								color: "transparent",
							}}
							src={
								"https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
							}
							alt={"alt"}
							className="absolute top-0 left-0 w-full transition-transform duration-1000 ease-in-out hover:transform hover:-translate-y-[80%] rounded"
						/>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Projects;
