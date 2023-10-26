'use client';

import { BackSVG } from './svg/BackSVG';
import { motion } from 'framer-motion';
import { NewsForm } from '../components/admin/NewsForm';
import Link from 'next/link';
import { AdminNav } from './admin/AdminNav';

export const AdminDash = (props) => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<AdminNav />
			<div className='min-h-[calc(100dvh-5rem)] w-full flex flex-col items-center justify-center gap-3 p-6 md:px-16 lg:px-24 xl:px-32'>
				<NewsForm {...props} />
				{/* Back button */}
				<motion.div
					whileTap={{ scale: 0.9 }}
					initial={{ scale: 0 }}
					animate={{ rotate: 360, scale: 1 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}
				>
					<Link href='/'>
						<BackSVG />
					</Link>
				</motion.div>
			</div>
		</div>
	);
};
