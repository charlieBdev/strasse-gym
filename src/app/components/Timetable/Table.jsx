'use client';

import { DaytimeSVG, EveningSVG } from '../svg';
import { useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';
import { timetable } from '../../constants';
import { fadeIn } from '../../utils/motion';

const Table = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [controls, isInView]);

	const TimetableCard = ({ day, index }) => {
		return (
			<motion.div
				className='bg-neutral-800 p-2 w-full rounded-lg md:max-w-xl ml-auto'
				variants={fadeIn('', 'spring', index * 0.5 + 1, 0.75)}
			>
				<div className='flex flex-col gap-1'>
					<p className='font-semibold text-md italic border-b mx-1'>
						{day.day}
					</p>
					{day.sessions.map((session, index) => (
						<div
							key={`session-${index}`}
							className='grid grid-cols-2 rounded-lg px-1 hover:bg-blue-500'
						>
							<div className='flex items-center gap-1'>
								{session.icon === 'EveningSVG' ? (
									<EveningSVG />
								) : (
									<DaytimeSVG />
								)}
								<p>{session.time}</p>
							</div>
							<div className='flex items-center justify-between'>
								<p>{session.type}</p>
							</div>
						</div>
					))}
				</div>
			</motion.div>
		);
	};

	return (
		<section className='flex flex-col w-full gap-3 select-none'>
			<div className='flex flex-col md:grid md:grid-cols-2 gap-1 w-full'>
				{timetable.map((day, index) => (
					<TimetableCard key={`timetable-${index}`} index={index} day={day} />
				))}
			</div>
		</section>
	);
};

export default Table;
