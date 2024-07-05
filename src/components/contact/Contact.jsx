
"use client";
/** @format */
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaGithub, FaMailBulk } from "react-icons/fa";
import { SiSocialblade } from "react-icons/si";
const Contact = () => {
	return (
		<div id="contact" class="min-h-dvh">
			<div
				class="mx-auto max-w-7xl px-4 text-gray-200 sm:px-6 lg:px-8 py-8"
				data-aos-duration="2000"
				data-aos="zoom-up-right"
			>
				<div class="mb-4">
					<div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
						<h2 class="font-heading mb-4 font-bold tracking-tight  dark:text-white text-3xl sm:text-5xl">
							Get in Touch
						</h2>
					</div>
				</div>
				<div class="flex items-stretch justify-center">
					<div class="grid md:grid-cols-2">
						<div class="h-full pr-6">
							<p class="mt-3 mb-12 text-lg text-gray-300 dark:text-slate-400">
								I'd Love to hear from you. Whether you have a question or just
								want to say Hi, feel free to drop a message. I'll try my best to
								get back to you!
							</p>
							<ul class="mb-6 md:mb-0">
								<li class="flex">
									<div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="h-6 w-6"
										>
											<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
											<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
										</svg>
									</div>
									<div class="ml-4 mb-4">
										<h3 class="mb-2 text-lg font-medium leading-6  dark:text-white">
											My Address
										</h3>
										<p class="text-gray-300 dark:text-slate-400">
											Sunamganj, Bangladesh
										</p>
									</div>
								</li>
								<li class="flex">
									<div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="h-6 w-6"
										>
											<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
											<path d="M15 7a2 2 0 0 1 2 2"></path>
											<path d="M15 3a6 6 0 0 1 6 6"></path>
										</svg>
									</div>
									<div class="ml-4 mb-4">
										<h3 class="mb-2 text-lg font-medium leading-6  dark:text-white">
											Phone
										</h3>
										<p class="text-gray-300 dark:text-slate-400">
											Mobile: +8801761539611
										</p>
									</div>
								</li>
								<li class="flex">
									<div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
										<FaMailBulk />
									</div>
									<div class="ml-4 mb-4">
										<h3 class="mb-2 text-lg font-medium leading-6  dark:text-white">
											Email
										</h3>
										<p class="text-gray-300 dark:text-slate-400">
											azizulhoq909@gmail.com{" "}
											<button class="p-2 border hover:border-fuchsia-500">
												Send Mail
											</button>
										</p>
									</div>
								</li>
								<li class="flex">
									<div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
										<SiSocialblade />
									</div>
									<div class="ml-4 mb-4">
										<h3 class="mb-2 text-lg font-medium leading-6  dark:text-white">
											Social
										</h3>
										<div class="flex gap-1 text-4xl">
											<Link href="#">
												<CiLinkedin class="hover:scale-105 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-1" />
											</Link>

											<Link href="#">
												<FaFacebook class="hover:scale-105 hover:bg-blue-500 rounded-full p-1" />
											</Link>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="border h-fit max-w-6xl p-5 md:p-12" id="form">
							<form id="" data-aos-duration="3000" data-aos="fade-right">
								<div class="mb-6">
									<div class="mx-0 mb-1 sm:mb-4">
										<div class="mx-0 mb-1 sm:mb-4">
											<label
												for="name"
												class="pb-1 text-xs uppercase tracking-wider"
											></label>
											<input
												type="text"
												id="name"
												autocomplete="given-name"
												placeholder="Your name"
												class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
												name="name"
											/>
										</div>
										<div class="mx-0 mb-1 sm:mb-4">
											<label
												for="email"
												class="pb-1 text-xs uppercase tracking-wider"
											></label>
											<input
												type="email"
												id="email"
												autocomplete="email"
												placeholder="Your email address"
												class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
												name="email"
											/>
										</div>
									</div>
									<div class="mx-0 mb-1 sm:mb-4">
										<label
											for="textarea"
											class="pb-1 text-xs uppercase tracking-wider"
										></label>
										<textarea
											id="textarea"
											name="textarea"
											cols="30"
											rows="5"
											placeholder="Write your message..."
											class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
										></textarea>
									</div>
								</div>
								<div class="text-center">
									<button
										type="submit"
										class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
