'use client';

import { useAuthContext } from '../../context/AuthContext';
import { AdminDash } from '../components/AdminDash';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { BackSVG } from '../components/svg/BackSVG';
import { Login } from '../components/Login';

export default function Admin() {
	const { user } = useAuthContext();

	if (user) {
		return <AdminDash />;
	} else {
		return (
			<Login />
			// <div className="min-h-screen flex flex-col items-center justify-center gap-3">
			// 	<p>Only logged in admins can view this page.</p>
			// 	<motion.div
			// 		whileTap={{ scale: 0.9 }}
			// 		initial={{ scale: 0 }}
			// 		animate={{ rotate: 360, scale: 1 }}
			// 		transition={{
			// 			type: 'spring',
			// 			stiffness: 260,
			// 			damping: 20,
			// 		}}
			// 	>
			// 		<Link href="/">
			// 			<BackSVG />
			// 		</Link>
			// 	</motion.div>
			// </div>
		);
	}
}
