'use client';

import Link from 'next/link';
import { Button } from './Button';
import { NewsSVG } from './svg/NewsSVG';
import { CalendarSVG } from './svg/CalendarSVG';
import { motion } from 'framer-motion';
import { AdminSVG } from './svg/AdminSVG';
import { useAuthContext } from '../../context/AuthContext';

export const Navbar = () => {
	const { user } = useAuthContext();
	return (
		<div
			id="top"
			className="sticky top-0 left-0 w-full h-20 flex justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 bg-neutral-950 border-b-2"
		>
			<Link href="#top">
				{/* STRASSE <span className="hidden md:inline-block">GYM</span> */}
				<motion.h1
					className="font-black italic text-xl"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					STRASSE GYM
				</motion.h1>
			</Link>
			<div className="flex gap-1 items-center">
				<Link href="#news">
					<motion.div
						// whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 20,
						}}
					>
						<span className="hidden md:block rounded-full px-3 py-1 hover:bg-neutral-800 font-headings">
							News
						</span>
						<NewsSVG />
					</motion.div>
				</Link>
				<Link href="#timetable">
					<motion.div
						// whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 20,
						}}
					>
						<span className="hidden md:block rounded-full px-3 py-1 hover:bg-neutral-800">
							Timetable
						</span>
						<CalendarSVG />
					</motion.div>
				</Link>
				<Link href={user ? '/admin' : '/login'}>
					<motion.div
						// whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 20,
						}}
						className={`${user ? 'text-green-500' : 'text-neutral-500'}`}
					>
						<span className="hidden md:block rounded-full px-3 py-1 hover:bg-neutral-800">
							Admin
						</span>
						<AdminSVG />
					</motion.div>
				</Link>
				<Link href="#contact">
					<Button text="Contact" />
				</Link>
			</div>
		</div>
	);
};
