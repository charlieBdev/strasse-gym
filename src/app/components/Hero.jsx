'use client';

import { Button } from './Button';
import Link from 'next/link';
import { UpDown } from './UpDown';
import { useEffect, useRef, useState } from 'react';
import { fetchHero } from '../utils/fetchHero';
import { fetchSlogan } from '../utils/fetchSlogan';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});
	// const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
	const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

	const [slogan, setSlogan] = useState('...');
	const [heroUrl, setHeroUrl] = useState('');
	const backgroundImageUrl = '/hero.jpg';
	const fallbackSlogan = 'Unleash Your Inner Warrior!';
	const classes = ['BJJ', 'Kickboxing', 'KAPAP'];

	useEffect(() => {
		const loadSlogan = async () => {
			try {
				const slogan = await fetchSlogan();
				setSlogan(slogan);
			} catch (error) {
				setSlogan(fallbackSlogan);
			}
		};
		loadSlogan();
	}, []);

	useEffect(() => {
		const loadHero = async () => {
			try {
				const url = await fetchHero();
				setHeroUrl(url);
			} catch (error) {
				setHeroUrl(backgroundImageUrl);
			}
		};
		loadHero();
	}, []);

	return (
		<section
			ref={ref}
			id='hero'
			className='relative min-h-[calc(100svh-5rem)] w-full flex flex-col items-center justify-between gap-3 px-6 md:px-16 lg:px-24 xl:px-32'
			style={{
				backgroundImage: `url(${heroUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'bottom',
			}}
		>
			<div></div>
			<motion.div
				style={{ y: textY }}
				className='z-10 relative flex flex-col md:flex-row items-center justify-center w-full gap-3'
			>
				<div className='text-center text-lg md:text-xl lg:text-2xl xl:text-3xl flex flex-col gap-10 w-full select-none bg-neutral-950 opacity-90 p-6 drop-shadow-xl rounded-lg'>
					<h2 className='opacity-100'>{slogan}</h2>
					<ul className={`grid grid-cols-${classes.length} items-center`}>
						{classes.map((classname, index) => (
							<li
								key={classname}
								className={`${
									index === classes.length - 1
										? ''
										: 'border-neutral-600 border-r-2'
								} opacity-100`}
							>
								{classname}
							</li>
						))}
					</ul>
					<h3 className='text-md md:text-lg lg:text-xl xl:text-2xl'>
						@ Meersbrook, Sheffield
					</h3>
					<Link href='#contact' className='mx-auto'>
						<Button text='Get in touch' />
					</Link>
				</div>
			</motion.div>
			<UpDown
				href={'news'}
				direction={'down'}
				bounce={true}
				aria={'page down'}
			/>
		</section>
	);
};
