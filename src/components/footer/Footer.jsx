
"use client";
import React from "react";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<footer class="flex flex-col space-y-10 justify-center border-t-2 py-3">
				<nav class="flex justify-center flex-wrap gap-6 text-gray-300 font-medium">
					<a class="hover:text-gray-900" href="#">
						Home
					</a>
					<a class="hover:text-gray-900" href="#">
						About
					</a>
					<a class="hover:text-gray-900" href="#">
						Services
					</a>
				</nav>

				<div class="flex justify-center space-x-5">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
					</a>
					<a href="" class="text-xl text-green-300">
						<FaMailBulk />
					</a>
				</div>
				<div>
					<p class="text-center text-gray-200 font-medium">
						Designed and Developed by Azizul Haque
					</p>
					<p class="text-center text-gray-400 font-medium">
						&copy; Copyright 2024, All Rights Reserved
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
