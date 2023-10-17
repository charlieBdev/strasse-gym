import React from 'react';
import { Button } from './Button';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
	// const mottos = [
	// 	'Be the best version of you!',
	// 	'Get fit, have fun, and learn how to protect yourself!',
	// 	'Insert catchy slogan here!',
	// 	'Stand up and fight!',
	// ];

	// const randomMottoIndex = Math.floor(Math.random() * mottos.length);

	return (
		<div className="snap-center min-h-[100dvh] w-full flex flex-col md:flex-row items-center justify-center gap-3 p-6 md:px-16 lg:px-24 xl:px-32 border-b-2">
			<div className="flex flex-col gap-3 w-full select-none">
				<h2 className="text-lg italic font-semibold uppercase font-headings">
					{/* {`${mottos[randomMottoIndex]}`} */}
					Stand up and fight!
				</h2>
				<ul className="list-disc list-inside">
					<li className="font-headings text-lg">Kickboxing</li>
					<li className="font-headings text-lg">BJJ</li>
					<li className="font-headings text-lg">KAPAP</li>
				</ul>
				<h3 className="text-sm">@ Meersbrooke, Sheffield.</h3>
				<Link href="#contact" className="mx-auto">
					<Button text="Get in touch" />
				</Link>
			</div>
			<Image
				// style={{ objectFit: 'fit' }}
				// fill={true}
				// placeholder="blur"
				loading="lazy"
				src="/hero.jpg"
				alt="Two men competing in a BJJ competition on the floor. One, on the bottom, looks like but isn't Craig."
				width={500}
				height={500}
				className="rounded-lg"
			/>
		</div>
	);
};
