/** @format */

const Education = () => {
	return (
		<div>
			<div class="p-4 mt-4" id="education">
				<h1 class="text-4xl text-center font-semibold mb-6 text-gray-100">
					<span class="font-bold underline ">Ed</span>ucation
				</h1>
				<div>
					<div class="flex flex-col md:grid grid-cols-12 text-gray-50">
						<div class="flex md:contents">
							<div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
								<div class="h-full w-6 flex items-center justify-center">
									<div class="h-full w-1 bg-emerald-600 pointer-events-none"></div>
								</div>
								<div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-emerald-600 shadow text-center">
									<i class="fas fa-check-circle text-white/80"></i>
								</div>
							</div>
							<div class="bg-emerald-600 hover:shadow-md hover:shadow-fuchsia-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
								<h3 class="font-semibold text-lg mb-1">
									Higher Secondary Certificate
								</h3>
								<p class="leading-tight text-justify w-full ">
									Digendra Barman Govt. College
								</p>
								<p class="leading-tight text-justify w-full">
									1st January , 2024
								</p>
							</div>
						</div>
						<div class="flex md:contents">
							<div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
								<div class="h-full w-6 flex items-center justify-center">
									<div class="h-full w-1 bg-emerald-600 pointer-events-none"></div>
								</div>
								<div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-emerald-600 shadow text-center">
									<i class="fas fa-check-circle text-white/80"></i>
								</div>
							</div>
							<div class="bg-emerald-600 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
								<h3 class="font-semibold text-lg mb-1">
									Secondary School Certificate
								</h3>
								<p class="leading-tight text-justify w-full ">
									Ratergaon High School & sCollege
								</p>
								<p class="leading-tight text-justify w-full">
									1st January , 2020
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
