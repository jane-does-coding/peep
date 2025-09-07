"use client";
import React, { useState } from "react";
import GameFooter from "./GameFooter";
import Page1 from "./GamePages/Page1";
import Page2 from "./GamePages/Page2";
import Intro from "./GamePages/Intro";
import { AnimatePresence, motion } from "framer-motion";

const TheGame = () => {
	const [step, setStep] = useState(0);

	const goNext = () => setStep((prev) => prev + 1);
	const goBack = () => setStep((prev) => Math.max(prev - 1, 0));

	// pages array with labels for footer
	const pages = [
		{
			component: <Intro goNext={goNext} />,
			key: "intro",
			label: "Introduction",
		},
		{
			component: <Page1 goNext={goNext} goBack={goBack} />,
			key: "page1",
			label: "Page 1",
		},
		{
			component: <Page2 goNext={goNext} goBack={goBack} />,
			key: "page2",
			label: "Page 2",
		},
	];

	return (
		<div className="min-h-[80vh]">
			<AnimatePresence mode="wait">
				<motion.div
					key={pages[step].key}
					initial={{ opacity: 0, filter: "blur(10px)" }}
					animate={{ opacity: 1, filter: "blur(0px)" }}
					exit={{ opacity: 0, filter: "blur(10px)" }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className="absolute inset-0 w-full"
				>
					{pages[step].component}
				</motion.div>
			</AnimatePresence>

			{/* Pass step + labels to footer */}
			<GameFooter step={step} pages={pages} />
		</div>
	);
};

export default TheGame;
