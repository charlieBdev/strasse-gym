'use client';

import { EveningSVG } from '../svg/EveningSVG';
import { DaytimeSVG } from '../svg/DaytimeSVG';
import { useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';
import { onViewMotion } from '../../utils/onViewMotion';

const Table = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [controls, isInView]);

	return (
		<section className="flex flex-col w-full gap-1 select-none">
			<div className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full">
				{/* Mon */}
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={{
						...onViewMotion,
						visible: { ...onViewMotion.visible, transition: { delay: 0 } },
					}}
					className="border rounded-sm p-2 w-full md:max-w-xl ml-auto"
				>
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-md italic border-b font-headings mx-1">
							MON - WED - FRI
						</p>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<EveningSVG />
								<p>18:30 - 19:30</p>
							</div>
							<p>Kickboxing</p>
							{/* <p>🥊</p> */}
						</div>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<EveningSVG />
								<p>19:30 - 20:30</p>
							</div>
							<p>BJJ</p>
							{/* <p>🥋</p> */}
						</div>
					</div>
				</motion.div>
				{/* Tues */}
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={{
						...onViewMotion,
						visible: { ...onViewMotion.visible, transition: { delay: 0.25 } },
					}}
					className="border rounded-sm p-2 w-full md:max-w-xl mr-auto"
				>
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-md italic border-b font-headings mx-1">
							TUE
						</p>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg">
							<div className="flex items-center gap-1 px-1">
								<EveningSVG />
								<p>18:30 - 19:30</p>
							</div>
							<p>BJJ</p>
							{/* <p>🥋</p> */}
						</div>
					</div>
				</motion.div>
				{/* Thurs */}
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={{
						...onViewMotion,
						visible: { ...onViewMotion.visible, transition: { delay: 0.5 } },
					}}
					className="border rounded-sm p-2 w-full md:max-w-xl ml-auto"
				>
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-md italic border-b font-headings mx-1">
							THU
						</p>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg">
							<div className="flex items-center gap-1 px-1">
								<EveningSVG />
								<p>18:30 - 19:30</p>
							</div>
							<p>KAPAP</p>
							{/* <p></p> */}
						</div>
					</div>
				</motion.div>
				{/* Sat */}
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={{
						...onViewMotion,
						visible: { ...onViewMotion.visible, transition: { delay: 0.75 } },
					}}
					className="border rounded-sm p-2 w-full md:max-w-xl mr-auto"
				>
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-md italic border-b font-headings mx-1">
							SAT
						</p>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								<p>09:00 - 10:00</p>
							</div>
							<p>Kids KB & BJJ</p>
							{/* <p>🧒🥊🥋</p> */}
						</div>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								<p>13:00 - 14:00</p>
							</div>
							<p>KB Sparring</p>
							{/* <p>🥊</p> */}
						</div>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								<p>14:00 - 15:00</p>
							</div>
							<p>BJJ Sparring</p>
							{/* <p>🥋</p> */}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Table;
