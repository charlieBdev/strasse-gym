import { SectionHeading } from '../SectionHeading';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { testimonials } from '../../constants';
import Image from 'next/image';
// import { Tilt } from 'react-tilt';

const TestimonialCard = ({ testimonial, name, pic, index }) => {
	return (
		// <Tilt>
		<motion.div
			variants={fadeIn('', 'spring', index * 0.5, 0.75)}
			className='w-full flex flex-col bg-neutral-800 p-3 rounded-lg hover:shadow-xl'
		>
			<p className='text-white font-black text-5xl'>&quot;</p>
			<div className='flex flex-col gap-3 justify-between h-full'>
				<p>{testimonial}</p>
				<div className='flex items-end justify-between'>
					<p className='text-gray-400'>{name}</p>
					<Image
						src={pic}
						alt={name}
						height={100}
						width={100}
						className='w-12 h-12 object-cover rounded-full'
					/>
				</div>
			</div>
		</motion.div>
		// </Tilt>
	);
};

const Testimonials = () => {
	return (
		<div className='snap-center min-h-[calc(100vh)] bg-neutral-900 w-full flex flex-col items-center justify-center p-6 md:px-16 lg:px-24 xl:px-32 gap-3'>
			<div className='flex flex-col w-full gap-3'>
				<SectionHeading heading={'TESTIMONIALS'} />
				<p className='text-center'>What our patrons say...</p>
			</div>
			<div className='flex flex-wrap md:grid md:grid-cols-3 gap-3'>
				{testimonials.map((testimonial, index) => (
					<TestimonialCard
						key={`tesimonial-${index}`}
						index={index}
						{...testimonial}
					/>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Testimonials, '');
