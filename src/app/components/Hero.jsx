'use client';

import { Button } from './Button';
import Image from 'next/image';
import Link from 'next/link';
import { UpDown } from './UpDown';
// import { Navbar } from './Navbar';
// import hero from '/hero.jpg';
// import { ref, getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { fetchHero } from '../utils/fetchHero';

export const Hero = () => {
	const [heroUrl, setHeroUrl] = useState('');
	const backgroundImageUrl = '/hero.jpg';
	const mainText = 'Unleash Your Inner Warrior!';
	const classes = ['BJJ', 'Kickboxing', 'KAPAP'];

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
			id='hero'
			className='h-[calc(100%-5rem)] w-full flex flex-col items-center justify-between gap-3 px-6 md:px-16 lg:px-24 xl:px-32'
			style={{
				backgroundImage: `url(${heroUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div></div>
			<div className='flex flex-col md:flex-row items-center justify-center w-full gap-3'>
				<div className='text-center text-lg md:text-xl lg:text-2xl xl:text-3xl flex flex-col gap-10 w-full select-none bg-neutral-950 opacity-90 p-6 drop-shadow-xl rounded-lg'>
					<h2 className='opacity-100 uppercase'>{mainText}</h2>
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
					{/* <h3 className='text-md md:text-lg lg:text-xl xl:text-2xl'>
						@ Meersbrook, Sheffield
					</h3> */}
					<Link href='#contact' className='mx-auto'>
						<Button text='Get in touch' />
					</Link>
				</div>
				{/* <Image
					style={{ objectFit: 'cover' }}
					// fill={true}
					// placeholder="blur"
					priority
					// loading="lazy"
					src={backgroundImageUrl}
					alt="Two men competing in a BJJ competition on the floor. One, on the bottom, looks like but isn't Craig."
					width={750}
					height={750}
					className='rounded-sm h-full w-full md:w-1/2 aspect-[16/9] shadow-xl shadow-neutral-950'
				/> */}
			</div>
			<UpDown href={'news'} direction={'down'} bounce={true} />
		</section>
	);
};
