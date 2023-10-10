import React from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import logout from '../../firebase/auth/logout';
import { SignoutSVG } from './svg/SignoutSVG';
import { HomeSVG } from './svg/HomeSVG';
import { useAuthContext } from '../../context/AuthContext';
import { motion } from 'framer-motion';

export const AdminDash = () => {
	const { user } = useAuthContext();
	const userChopped = user.email.split('@')[0];
	const router = useRouter();

	const handleLogout = async (e) => {
		e.preventDefault();

		const { result, error } = await logout();

		if (error) {
			toast.error('Logout error');
			return;
		}
		// else
		toast.success('Logout successful');
		return router.push('/');
	};

	return (
		<div className="flex flex-col min-h-screen items-center justify-between">
			<div className="w-full flex items-center justify-between border-b-2 h-20 px-6 md:px-16 lg:px-24 xl:px-32">
				<div className="flex items-center gap-3">
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
					<h2>Admin Area</h2>
				</div>

				<div className="flex items-center gap-3">
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
			</div>
		</div>
	);
};
