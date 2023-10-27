import { Button } from './Button';
import Image from 'next/image';
import Link from 'next/link';
import { UpDown } from './UpDown';
// import { Navbar } from './Navbar';
// import hero from '/hero.jpg';

export const Hero = () => {
	const backgroundImageUrl = '/hero.jpg';
	const mainText = 'Unleash Your Inner Warrior!';
	const classes = ['Kickboxing', 'BJJ', 'KAPAP'];

	return (
		<section
			id='hero'
			className='h-[calc(100%-5rem)] w-full flex flex-col items-center justify-between gap-3 px-6 md:px-16 lg:px-24 xl:px-32'
			style={{
				backgroundImage: `url(${backgroundImageUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div></div>
			<div className='flex flex-col md:flex-row items-center justify-center w-full gap-3'>
				<div className='flex flex-col gap-6 w-full select-none bg-neutral-950 opacity-90 p-3 rounded-lg'>
					<h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl italic uppercase'>
						{mainText}
					</h2>
					<ul className='list-disc list-inside'>
						{classes.map((classname) => (
							<li
								key={classname}
								className='text-lg md:text-xl lg:text-2xl xl:text-3xl'
							>
								{classname}
							</li>
						))}
					</ul>
					<h3 className='text-md md:text-lg lg:text-xl xl:text-2xl'>
						Meersbrook, Sheffield
					</h3>
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
