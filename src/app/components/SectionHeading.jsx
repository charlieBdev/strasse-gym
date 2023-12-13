import { motion } from 'framer-motion';
import { slideIn, fadeIn } from '../utils/motion';

export const SectionHeading = ({ heading }) => {
	return (
		<motion.p
			className='tracking-wide mx-auto text-center italic font-semibold text-md bg-gradient-to-r from-blue-500 to-purple-500 border-l border-b-2 border-neutral-50 p-3 select-none rounded-sm -rotate-3 hover:rotate-0'
			variants={fadeIn('right', 'spring', 0.2, 1)}
		>
			{heading}
		</motion.p>
	);
};
