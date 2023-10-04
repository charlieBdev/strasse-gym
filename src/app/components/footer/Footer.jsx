'use client';

import React from 'react';
import { Map } from './Map';
import { CallSVG } from '../svg/CallSVG';
import { EmailSVG } from '../svg/EmailSVG';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { motion } from 'framer-motion';

export const Footer = () => {
	const phone = 7732744188;
	const email = 'craig@strassegym.co.uk';
	const whatsApp = `https://wa.me/${phone}`;
	return (
		<div className="min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-between border-b-2 p-8 md:p-16 gap-3">
			<Map />
			<div className="flex flex-col md:flex-row items-center justify-center gap-3">
				<motion.a
					href={`tel:+44${Number(phone)}`}
					className="flex items-center gap-1 p-1 px-3 rounded-full hover:bg-neutral-800"
					whileTap={{ scale: 0.9 }}
				>
					<CallSVG />
					<p>Call Craig</p>
				</motion.a>

				<motion.a
					href={`mailto:${email}`}
					className="flex items-center gap-1 p-1 px-3 rounded-full hover:bg-neutral-800"
					whileTap={{ scale: 0.9 }}
				>
					<EmailSVG />
					<p>Email us</p>
				</motion.a>

				<motion.a
					href={whatsApp}
					className="flex items-center gap-1 p-1 px-3 rounded-full hover:bg-neutral-800"
					whileTap={{ scale: 0.9 }}
				>
					<AiOutlineWhatsApp className="w-6 h-6 text-green-500" />
					<p>WhatsApp</p>
				</motion.a>
			</div>
			<p>© 2023 Strasse Gym</p>
		</div>
	);
};
