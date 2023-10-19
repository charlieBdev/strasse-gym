import { motion } from 'framer-motion';
import Link from 'next/link';

export const UpDown = ({ href, direction, animate }) => {
	return (
		<Link href={`#${href}`} className="mx-auto">
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
				{direction === 'up' ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className={`${
							animate ? `animate-${animate}` : ''
						} w-8 h-8 p-1 rounded-full hover:bg-neutral-800`}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 15.75l7.5-7.5 7.5 7.5"
						/>
					</svg>
				) : direction === 'down' ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className={`${
							animate ? `animate-${animate}` : ''
						} w-8 h-8 p-1 rounded-full hover:bg-neutral-800`}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 8.25l-7.5 7.5-7.5-7.5"
						/>
					</svg>
				) : direction === 'top' ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className={`${
							animate ? `animate-${animate}` : ''
						} w-8 h-8 p-1 rounded-full hover:bg-neutral-800`}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
						/>
					</svg>
				) : null}
			</motion.div>
		</Link>
	);
};
