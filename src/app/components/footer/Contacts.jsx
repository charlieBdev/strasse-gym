import { CallSVG } from '../svg/CallSVG';
import { EmailSVG } from '../svg/EmailSVG';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useInView, motion, useAnimation } from 'framer-motion';

export const Contacts = () => {
	const phone = 7732744188;
	const email = 'craig@strassegym.co.uk';
	const whatsApp = `https://wa.me/${phone}`;

	return (
		<div className='flex w-full justify-between items-center gap-6'>
			<motion.a
				href={`tel:+44${Number(phone)}`}
				className='flex items-center justify-center mx-auto gap-1 p-1 px-3 rounded-full hover:bg-blue-500 hover:bg-opacity-10 text-blue-500'
				whileTap={{ scale: 0.9 }}
				aria-label='call Craig'
			>
				<CallSVG />
			</motion.a>
			<motion.a
				href={whatsApp}
				className='flex items-center justify-center mx-auto gap-1 p-1 px-3 rounded-full hover:bg-green-500 hover:bg-opacity-10 text-green-500'
				whileTap={{ scale: 0.9 }}
				aria-label='WhatsApp Craig'
			>
				<AiOutlineWhatsApp className='w-6 h-6' />
			</motion.a>
			<motion.a
				href={`mailto:${email}`}
				className='flex items-center justify-center mx-auto gap-1 p-1 px-3 rounded-full hover:bg-yellow-500 hover:bg-opacity-10 text-yellow-500'
				whileTap={{ scale: 0.9 }}
				aria-label='email Craig'
			>
				<EmailSVG />
			</motion.a>
		</div>
	);
};
