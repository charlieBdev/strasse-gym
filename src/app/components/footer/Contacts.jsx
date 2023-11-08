// 'use client';

import { CallSVG } from '../svg/CallSVG';
import { EmailSVG } from '../svg/EmailSVG';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useInView, motion, useAnimation } from 'framer-motion';
// import { useEffect, useRef } from 'react';
// import { onViewMotion } from '../../utils/onViewMotion';

export const Contacts = () => {
	// const ref = useRef(null);
	// const isInView = useInView(ref);

	// const controls = useAnimation();

	// useEffect(() => {
	// 	if (isInView) {
	// 		controls.start('visible');
	// 	}
	// }, [controls, isInView]);

	const phone = 7732744188;
	const email = 'craig@strassegym.co.uk';
	const whatsApp = `https://wa.me/${phone}`;

	return (
		<div className='flex w-full justify-between items-center gap-6'>
			<motion.a
				// ref={ref}
				// animate={controls}
				// initial="hidden"
				// variants={{
				// 	...onViewMotion,
				// 	visible: { ...onViewMotion.visible, transition: { delay: 0.25 } },
				// }}
				href={`tel:+44${Number(phone)}`}
				className='flex items-center justify-center mx-auto gap-1 p-1 px-3 rounded-full hover:bg-blue-500 hover:bg-opacity-10 text-blue-500'
				whileTap={{ scale: 0.9 }}
				aria-label='call Craig'
			>
				<CallSVG />
				{/* <p>Call</p> */}
			</motion.a>
			<motion.a
				// ref={ref}
				// animate={controls}
				// initial="hidden"
				// variants={{
				// 	...onViewMotion,
				// 	visible: { ...onViewMotion.visible, transition: { delay: 0.5 } },
				// }}
				href={whatsApp}
				className='flex items-center justify-center mx-auto gap-1 p-1 px-3 rounded-full hover:bg-green-500 hover:bg-opacity-10 text-green-500'
				whileTap={{ scale: 0.9 }}
				aria-label='WhatsApp Craig'
			>
				<AiOutlineWhatsApp className='w-6 h-6' />
				{/* <p>WhatsApp</p> */}
			</motion.a>
			<motion.a
				// ref={ref}
				// animate={controls}
				// initial="hidden"
				// variants={{
				// 	...onViewMotion,
				// 	visible: { ...onViewMotion.visible, transition: { delay: 0.75 } },
				// }}
				href={`mailto:${email}`}
				className='flex items-center justify-center mx-auto gap-1 p-1 px-3 rounded-full hover:bg-yellow-500 hover:bg-opacity-10 text-yellow-500'
				whileTap={{ scale: 0.9 }}
				aria-label='email Craig'
			>
				<EmailSVG />
				{/* <p>E-mail</p> */}
			</motion.a>
		</div>
	);
};
