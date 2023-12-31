'use client';

import { useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';
import { onViewMotion } from '../../utils/onViewMotion';
import { fadeIn } from '../../utils/motion';

const Prices = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [controls, isInView]);

	return (
		<section className='flex flex-col w-full items-center gap-1 select-none'>
			<div className='flex flex-col w-full md:max-w-xl'>
				<motion.div
					// ref={ref}
					// animate={controls}
					// initial='hidden'
					// variants={{
					// 	...onViewMotion,
					// 	visible: { ...onViewMotion.visible, transition: { delay: 1.25 } },
					// }}
					variants={fadeIn('', 'spring', 4 * 0.5 + 1, 0.75)}
					className='bg-neutral-800 rounded-lg p-2'
				>
					<div className='flex flex-col gap-1'>
						<div className='grid grid-cols-3 hover:bg-purple-500 rounded-lg px-1'>
							<p>Kids</p>
							<p>£5</p>
							<p>50 mins</p>
						</div>
						<div className='grid grid-cols-3 hover:bg-purple-500 rounded-lg px-1'>
							<p>Adults</p>
							<p>£6 / £10</p>
							<p>1 hr / 2hrs</p>
						</div>
						<div className='grid grid-cols-3 hover:bg-purple-500 rounded-lg px-1'>
							<p>Adults</p>
							<p>£60</p>
							<p>Monthly</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Prices;
