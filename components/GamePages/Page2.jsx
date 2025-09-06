"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Page2 = () => {
	const [showFix, setShowFix] = useState(false);
	const [feedback, setFeedback] = useState("");
	const [mood, setMood] = useState("confused");

	const codeString = `<html lang="en">
  <body>
    <h1>My name is Yevheniia Simaka</h1>
    <h2>Facts about me:</h2>
    <ul>
      <li>I use TypeScript and JavaScript to code
      <li>I do frontend and sometimes fullstack</li>
      <li>I won 10+ hackathons</li>
    </ul>
  </body>
</html>`;

	const fixedCodeString = `<html lang="en">
  <body>
    <h1>My name is Yevheniia Simaka</h1>
    <h2>Facts about me:</h2>
    <ul>
      <li>I use TypeScript and JavaScript to code</li>
      <li>I do frontend and sometimes fullstack</li>
      <li>I won 10+ hackathons</li>
    </ul>
  </body>
</html>`;

	const handleAnswer = (choice) => {
		if (choice === "li") {
			setFeedback("Great, Now the bug is fixed and I can relax");
			setShowFix(true);
			setMood("happy");
		} else {
			setFeedback("Ugh, that didn’t fix the bug...");
			setMood("upset");
		}
	};

	const characterImage =
		mood === "happy"
			? "/imgs/peep-happy.png"
			: mood === "upset"
			? "/imgs/peep-upset.png"
			: "/imgs/peep-confused.png";

	return (
		<>
			{/* Continue button (only shows when bug is fixed) */}
			{showFix && (
				<motion.button
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.5 }}
					className="absolute cursor-pointer bottom-[13.5vh] right-[6vw] flex items-center justify-center  w-[10vw] h-[5vh]"
				>
					<img
						src="/imgs/frame1.png"
						className="w-[10vw] h-[5vh] absolute top-0 left-0 z-0 object-cover"
						alt=""
					/>
					<span className="z-10 text-[2.25vh] flex items-center justify-center w-full h-full handlee font-semibold tracking-[1px]">
						Continue
					</span>
				</motion.button>
			)}
			<div className="flex gap-[2vw] items-center justify-center min-h-[90vh] w-[85vw] mx-auto relative">
				<div className="flex flex-col max-w-[30vw]">
					<motion.h2
						className="text-[4vh] handlee font-extrabold"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.3 }}
					>
						{mood === "happy"
							? "Yay, the bug is fixed!"
							: mood === "upset"
							? "Oh no, that wasn’t it..."
							: "I don't like bugs..."}
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.5 }}
						className="mb-[3vh] handlee font-medium mt-[1.5vh] text-[3vh]"
					>
						{mood === "happy"
							? "Thanks for helping me fix the code. I feel so much better now!"
							: mood === "upset"
							? "That didn’t fix the bug... Can you try another option?"
							: "There is a code on the right telling you some more about me, but there is a bug that is driving me crazy!"}
					</motion.p>

					<div className="w-[19vw]">
						<AnimatePresence mode="wait">
							<motion.img
								key={characterImage}
								src={characterImage}
								alt="Character"
								className="w-full"
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
							/>
						</AnimatePresence>
					</div>
				</div>

				<div className="w-[45vw] pb-[3vh] flex flex-col items-center">
					<SyntaxHighlighter
						language="html"
						style={dracula}
						showLineNumbers
						wrapLines
						customStyle={{
							borderRadius: "12px",
							padding: "16px",
							fontSize: "2vh",
						}}
					>
						{showFix ? fixedCodeString : codeString}
					</SyntaxHighlighter>

					<div className="flex flex-col gap-4 mt-6 w-full px-4 items-center">
						<div className="flex gap-4 flex-wrap justify-center">
							<button
								onClick={() => handleAnswer("h1")}
								className="relative cursor-pointer flex items-center justify-center w-[12rem] h-[4rem]"
							>
								<img
									src="/imgs/frame1.png"
									className="w-full h-full absolute top-0 left-0 z-0 object-cover"
									alt="frame"
								/>
								<span className="z-10 text-[2vh] handlee font-semibold tracking-[0.5px]">
									Change &lt;h1&gt; to &lt;h2&gt;
								</span>
							</button>

							<button
								onClick={() => handleAnswer("li")}
								className="relative cursor-pointer flex items-center justify-center w-[14rem] h-[4rem]"
							>
								<img
									src="/imgs/frame1.png"
									className="w-full h-full absolute top-0 left-0 z-0 object-cover"
									alt="frame"
								/>
								<span className="z-10 text-[2vh] handlee font-semibold tracking-[0.5px]">
									Close the missing &lt;/li&gt;
								</span>
							</button>

							<button
								onClick={() => handleAnswer("ul")}
								className="relative cursor-pointer flex items-center justify-center w-[14rem] h-[4rem]"
							>
								<img
									src="/imgs/frame1.png"
									className="w-full h-full absolute top-0 left-0 z-0 object-cover"
									alt="frame"
								/>
								<span className="z-10 text-[2vh] handlee font-semibold tracking-[0.5px]">
									Add a missing &lt;/ul&gt; tag
								</span>
							</button>
						</div>

						<button
							onClick={() => {
								setShowFix(true);
								setMood("happy");
							}}
							className="text-black handlee underline text-[2.25vh] cursor-pointer"
						>
							Just show me the fix
						</button>

						{feedback && <TypewriterText text={feedback} />}
					</div>
				</div>
			</div>
		</>
	);
};

export default Page2;

const TypewriterText = ({ text }) => {
	const [displayedText, setDisplayedText] = useState("");

	useEffect(() => {
		setDisplayedText("");
		let timeouts = [];
		for (let i = 0; i < text.length; i++) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + text[i]);
			}, i * 20);
			timeouts.push(timeout);
		}
		return () => timeouts.forEach((t) => clearTimeout(t));
	}, [text]);

	return (
		<p className="mt-3 text-black text-[3vh] font-extrabold handlee text-center">
			{displayedText}
		</p>
	);
};
