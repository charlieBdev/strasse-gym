'use client';

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

export const ScrollingNews = ({ text }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<motion.div
			ref={ref}
			animate={isInView ? 'visible' : 'hidden'}
			// initial="hidden"
			variants={{
				hidden: { x: '100vw' },
				visible: { x: '-100vw' },
			}}
			className="overflow-hidden relative"
			initial={{ x: '125vw' }}
			// animate={{ x: '-100vw' }}
			transition={{
				delay: 1,
				duration: 40,
				type: 'linear',
				repeat: 'infinite',
			}}
		>
			<div className="whitespace-nowrap">
				<p className="italic text-md p-3">{text}</p>
			</div>
		</motion.div>
	);
};
