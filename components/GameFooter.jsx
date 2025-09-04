import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithubAlt } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";

const GameFooter = () => {
	const levels = Array.from({ length: 9 }, (_, i) => i + 1);

	return (
		<div className="fixed bottom-0 left-0 w-[100vw] bg-neutral-800 py-[1.5vh] px-[2vw] flex items-center justify-between">
			<button className="text-[2vh] flex gap-[1vw] text-white">
				Sound
				<FaVolumeMute className="text-white text-[3.25vh]" />
			</button>
			<div className="flex gap-[0.5vw]">
				{levels.map((level, i) => (
					<div
						key={i}
						className={`relative rounded-full border-[1px] h-[3.5vh] w-[3.5vh] group ${
							i === 1 ? "bg-white border-white" : "border-white"
						}`}
					>
						<p className="absolute top-[7vh] left-0 min-w-fit w-fit text-[1.5vh] items-center justify-center flex flex-nowrap text-white py-[1.25vh] px-[1vw] rounded-[0.75vh] bg-neutral-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
							Part {level}. Introduction
						</p>
					</div>
				))}
			</div>
			<div className="flex gap-[1vw]">
				<Link href={"/"}>
					<FaGithubAlt className="text-white text-[3.25vh]" />
				</Link>
				<Link href={"/"}>
					<FaLinkedinIn className="text-white text-[3.25vh]" />
				</Link>
				<Link href={"/"}>
					<HiOutlineMail className="text-white text-[3.25vh]" />
				</Link>
			</div>
		</div>
	);
};

export default GameFooter;
