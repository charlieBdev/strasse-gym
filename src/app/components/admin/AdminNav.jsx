'use client';

import { motion } from 'framer-motion';
import { SignoutSVG } from '../svg/SignoutSVG';
import { HomeSVG } from '../svg/HomeSVG';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import logout from '../../../firebase/auth/logout';
import { useAuthContext } from '../../../context/AuthContext';

export const AdminNav = () => {
	const { user } = useAuthContext();
	const userChopped = user.email.split('@')[0];
	const router = useRouter();

	const handleLogout = async (e) => {
		e.preventDefault();

		try {
			const { result, error } = await logout();

			if (error) {
				throw new Error('Logout error');
			}

			toast.success('Logout successful!');
			router.push('/');
		} catch (error) {
			toast.error('Logout failed. Please try again.');
		}
	};

	return (
		<nav className='w-full flex items-center justify-between border-b-2 h-20 px-6 md:px-16 lg:px-24 xl:px-32'>
			<div className='flex items-center gap-3'>
				<motion.button
					onClick={() => router.push('/')}
					whileTap={{ scale: 0.9 }}
					initial={{ scale: 0 }}
					animate={{ rotate: 360, scale: 1 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}
				>
					<HomeSVG />
				</motion.button>
				<h2 className='font-black text-xl'>ADMIN</h2>
			</div>

			<div className='flex items-center gap-3'>
				<p>{userChopped}</p>
				<motion.button
					onClick={handleLogout}
					whileTap={{ scale: 0.9 }}
					initial={{ scale: 0 }}
					animate={{ rotate: 360, scale: 1 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}
				>
					<SignoutSVG />
				</motion.button>
			</div>
		</nav>
	);
};
