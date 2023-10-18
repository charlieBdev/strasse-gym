import { motion } from 'framer-motion';

export const ScrollingNews = ({ text }) => {
	return (
		<motion.div
			className="overflow-hidden relative whitespace-nowrap p-3 md:px-16 lg:px-24 xl:px-32 "
			initial={{ x: '100%' }}
			animate={{ x: '-100%' }}
			transition={{
				duration: 40,
				type: 'linear',
				repeat: 'infinite',
			}}
		>
			<p className="italic text-md">{text}</p>
		</motion.div>
	);
};
