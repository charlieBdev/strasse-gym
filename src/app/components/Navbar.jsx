'use client';

import Link from 'next/link';
import { NewsSVG } from './svg/NewsSVG';
import { CalendarSVG } from './svg/CalendarSVG';
import { PinSVG } from './svg/PinSVG';
import { motion } from 'framer-motion';
import { BlackBelt } from '../components/BlackBelt';
import { AdminSVG } from './svg/AdminSVG';
import { useAuthContext } from '../../context/AuthContext';

export const Navbar = () => {
	const { user } = useAuthContext();
	return (
		<nav className='z-20 fixed top-0 left-0 w-full h-20 flex justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 bg-neutral-900 border-b-2'>
			<Link href='#nav'>
				<motion.h1
					className='font-black text-xl'
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					<div className='flex flex-col items-center justify-center'>
						STRASSE GYM
						<BlackBelt />
					</div>
				</motion.h1>
			</Link>
			<ul className='flex gap-1 items-center'>
				<li>
					<Link href='#news' aria-label='Go to News section'>
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
							<span className='hidden md:block rounded-full px-3 py-1 hover:bg-neutral-800 hover:bg-opacity-50'>
								News
							</span>
							<NewsSVG />
						</motion.div>
					</Link>
				</li>
				<li>
					<Link href='#timetable' aria-label='Go to Timetable section'>
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
							<span className='hidden md:block rounded-full px-3 py-1 hover:bg-neutral-800 hover:bg-opacity-50'>
								Timetable
							</span>
							<CalendarSVG />
						</motion.div>
					</Link>
				</li>
				<li>
					<Link href='#footer' aria-label='Go to Footer section'>
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
							<span className='hidden md:block rounded-full px-3 py-1 hover:bg-neutral-800 hover:bg-opacity-50'>
								Location
							</span>
							<PinSVG />
						</motion.div>
					</Link>
				</li>
				{user && (
					<li>
						<Link href='/admin' aria-label='Go to Admin page - only for admins'>
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
								<span className='hidden md:block rounded-full px-3 py-1 select-none hover:bg-green-500 hover:bg-opacity-10'>
									Admin
								</span>
								<AdminSVG />
							</motion.div>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};
