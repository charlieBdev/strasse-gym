import React from 'react';
import { Button } from './Button';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
	return (
		<div className="min-h-[calc(100vh-5rem)] w-full flex flex-col md:flex-row items-center justify-center gap-3 p-6 md:px-16 lg:px-24 xl:px-32 border-b-2">
			<div className="flex flex-col gap-3 w-full select-none">
				<h2 className="text-lg italic font-semibold uppercase">
					Be the best version of you!
				</h2>
				<h3>Located in Meersbrooke, Sheffield.</h3>
				<ul className="list-disc list-inside">
					We offer training in:
					<li>Kickboxing</li>
					<li>BJJ</li>
					<li>KAPAP</li>
				</ul>
				<Link href="#contact" className="mx-auto">
					<Button text="Get in touch" />
				</Link>
			</div>
			<Image
				style={{ objectFit: 'fit' }}
				// fill={true}
				// placeholder="blur"
				loading="lazy"
				src="/hero.jpg"
				alt="Two men competing in a BJJ competition on the floor. One, on the bottom, looks like but isn't Craig."
				width={500}
				height={500}
				className="rounded-lg max-w-96 shadow-neutral-50"
			/>
		</div>
	);
};
