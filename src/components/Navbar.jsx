/** @format */

import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
	return (
		<>
			<header class="absolute inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-md border border-gray-100  py-3 shadow backdrop-blur-lg md:top-3 md:rounded-3xl lg:max-w-screen-lg ">
				<div class="px-4">
					<div class="flex items-center justify-between">
						<div class="flex shrink-0">
							<a aria-current="page" class="flex items-center" >
								<img
									
									class="h-10 rounded-full w-auto"
									src="https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif"
									alt="logo"
								/>
							</a>
						</div>
						<div class="hidden md:flex md:items-center md:justify-center md:gap-5">
							<Link
								aria-current="page"
								class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-200 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
								href="/#about"
							>
								About
							</Link>
							<Link
								aria-current="page"
								class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-200 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
								href="/#skills"
							>
								Skills
							</Link>
							<Link
								aria-current="page"
								class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-200 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
								href="/#projects"
							>
								Projects
							</Link>
							<Link
								aria-current="page"
								class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-200 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
								href="/#education"
							>
								Education
							</Link>
							<Link
								aria-current="page"
								class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-200 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
								href="/#contact"
							>
								Contact
							</Link>
						</div>
						<div class="flex items-center justify-end gap-3">
							<a
								target="_blank"
								href="https://drive.google.com/file/d/1_QVSNNI0JsaK9L8ceFdf72E-3BIYG2xq/view?usp=drive_link"
							>
								<button class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-emerald-600 border-solid border-2 border-gray-600 py-2 px-6 hover:bg-green-800 hover:shadow-md">
									Resume
								</button>
							</a>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
