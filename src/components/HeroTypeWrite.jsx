/** @format */

"use client";
/** @format */
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroTypeWrite = () => {
	return (
		<>
			<h1 style={{ margin: "auto 0", fontWeight: "normal" }}>
				<span>A</span> <span style={{ color: "red", fontWeight: "bold",marginLeft:"10px",fontSize:"2em" }}>
					<Typewriter
						words={["Front-end Developer", "Jr. MERN Developer", "Coder", "!"]}
						loop={Infinity}
						cursor
						cursorStyle="_"
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={1000}
					/>
				</span>
			</h1>
		</>
	);
};

export default HeroTypeWrite;
