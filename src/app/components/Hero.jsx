import React from 'react';
import { Button } from './Button';
import Image from 'next/image';
import Link from 'next/link';
import { UpDown } from './UpDown';
// import hero from '/hero.jpg';

export const Hero = () => {
	const mainText = 'Stand up and fight!';

	return (
		<section
			id="hero"
			className="snap-end min-h-[calc(100dvh-5rem)] w-full flex flex-col items-center justify-between gap-3 p-6 md:px-16 lg:px-24 xl:px-32"
		>
			<div></div>
			<div className="flex flex-col md:flex-row w-full gap-3">
				<div className="flex flex-col gap-6 w-full select-none">
					<h2 className="text-lg italic font-semibold uppercase font-headings">
						{mainText}
					</h2>
					<ul className="list-disc list-inside">
						<li className="text-lg">Kickboxing</li>
						<li className="text-lg">BJJ</li>
						<li className="text-lg">KAPAP</li>
					</ul>
					<h3 className="text-sm">@ Meersbrooke, Sheffield.</h3>
					<Link href="#contact" className="mx-auto">
						<Button text="Get in touch" />
					</Link>
				</div>
				<Image
					style={{ objectFit: 'cover' }}
					// fill={true}
					// placeholder="blur"
					priority
					// loading="lazy"
					src="/hero.jpg"
					alt="Two men competing in a BJJ competition on the floor. One, on the bottom, looks like but isn't Craig."
					width={750}
					height={750}
					className="rounded-sm w-full md:w-1/2 aspect-[16/9] shadow-xl shadow-neutral-950"
				/>
			</div>
			<UpDown href={'news'} direction={'down'} />
		</section>
	);
};
