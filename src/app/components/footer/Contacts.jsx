'use client';

import { CallSVG } from '../svg/CallSVG';
import { EmailSVG } from '../svg/EmailSVG';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';
import { onViewMotion } from '../../utils/onViewMotion';

export const Contacts = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [controls, isInView]);

	const phone = 7732744188;
	const email = 'craig@strassegym.co.uk';
	const whatsApp = `https://wa.me/${phone}`;

	return (
		<div className="flex flex-col lg:flex-row lg:justify-between lg:w-full items-center justify-center gap-6">
			<motion.a
				ref={ref}
				animate={controls}
				initial="hidden"
				variants={{
					...onViewMotion,
					visible: { ...onViewMotion.visible, transition: { delay: 0.25 } },
				}}
				href={`tel:+44${Number(phone)}`}
				className="flex justify-center gap-1 p-1 px-3 rounded-full hover:bg-neutral-800 text-blue-500"
				whileTap={{ scale: 0.9 }}
			>
				<CallSVG />
				<p>Call</p>
			</motion.a>
			<motion.a
				ref={ref}
				animate={controls}
				initial="hidden"
				variants={{
					...onViewMotion,
					visible: { ...onViewMotion.visible, transition: { delay: 0.5 } },
				}}
				href={whatsApp}
				className="flex justify-center gap-1 p-1 px-3 rounded-full hover:bg-neutral-800 text-green-500"
				whileTap={{ scale: 0.9 }}
			>
				<AiOutlineWhatsApp className="w-6 h-6" />
				<p>WhatsApp</p>
			</motion.a>
			<motion.a
				ref={ref}
				animate={controls}
				initial="hidden"
				variants={{
					...onViewMotion,
					visible: { ...onViewMotion.visible, transition: { delay: 0.75 } },
				}}
				href={`mailto:${email}`}
				className="flex justify-center gap-1 p-1 px-3 rounded-full hover:bg-neutral-800 text-yellow-500"
				whileTap={{ scale: 0.9 }}
			>
				<EmailSVG />
				<p>E-mail</p>
			</motion.a>
		</div>
	);
};
