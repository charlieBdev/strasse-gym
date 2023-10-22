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
		<section className="flex flex-col w-full gap-3 select-none">
			<div className="flex flex-col md:grid md:grid-cols-2 gap-1 w-full">
				{/* Mon */}
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={{
						...onViewMotion,
						visible: { ...onViewMotion.visible, transition: { delay: 0 } },
					}}
					className="bg-neutral-800 p-2 w-full rounded-t-lg md:rounded-tr-none md:rounded-tl-lg md:max-w-xl ml-auto"
				>
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-md italic border-b mx-1">
							MON - WED - FRI
						</p>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<EveningSVG />
								<p>18:30 - 19:30</p>
							</div>
							<div className="flex items-center justify-between">
								<p>Kickboxing</p>
								{/* <p className="text-xl">🇳🇱</p> */}
							</div>
						</div>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<EveningSVG />
								<p>19:30 - 20:30</p>
							</div>
							<div className="flex items-center justify-between">
								<p>BJJ</p>
								{/* <p className="text-xl">🇧🇷</p> */}
							</div>
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
					className="bg-neutral-800 p-2 w-full md:max-w-xl mr-auto md:rounded-tr-lg"
				>
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-md italic border-b px-1">TUE</p>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<EveningSVG />
								<p>18:30 - 19:30</p>
							</div>
							<div className="flex items-center justify-between">
								<p>BJJ</p>
								{/* <p className="text-xl">🇧🇷</p> */}
							</div>
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
					className="bg-neutral-800 p-2 w-full md:max-w-xl ml-auto md:rounded-bl-lg"
				>
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-md italic border-b px-1">THU</p>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg px-1">
							<div className="flex items-center gap-1 px-1">
								<EveningSVG />
								<p>18:30 - 19:30</p>
							</div>
							<div className="flex items-center justify-between">
								<p>KAPAP</p>
								{/* <p className="text-xl">🇮🇱</p> */}
							</div>
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
					className="bg-neutral-800 p-2 w-full md:max-w-xl mr-auto rounded-b-lg md:rounded-bl-none md:rounded-br-lg"
				>
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-md italic border-b mx-1">SAT</p>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								<p>09:00 - 10:00</p>
							</div>
							<div className="flex items-center justify-between">
								<p>Kids KB & BJJ</p>
								{/* <div className="flex gap-1">
									<p className="text-xl">🧒</p>
									<p className="text-xl">🇳🇱</p>
									<p className="text-xl">🇧🇷</p>
								</div> */}
							</div>
						</div>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								<p>13:00 - 14:00</p>
							</div>
							<div className="flex items-center justify-between">
								<p>KB Sparring</p>
								{/* <p className="text-xl">🇳🇱</p> */}
							</div>
						</div>
						<div className="grid grid-cols-2 hover:bg-blue-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								<p>14:00 - 15:00</p>
							</div>
							<div className="flex items-center justify-between">
								<p>BJJ Sparring</p>
								{/* <p className="text-xl">🇧🇷</p> */}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Table;
