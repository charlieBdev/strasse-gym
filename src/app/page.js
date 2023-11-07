'use client';

import { Hero } from './components/Hero';
import { News } from './components/news/News';
import { Timetable } from './components/Timetable/Timetable';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/Navbar';
import Head from 'next/head';
import { metadata } from './metadata';

export default function Home() {
	return (
		<>
			<Head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='./favicon_io/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='./favicon_io/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='./favicon_io/favicon-16x16.png'
				/>
				<link rel='manifest' href='./favicon_io/site.webmanifest' />
			</Head>
			<main className='snap-y snap-proximity flex flex-col items-center justify-between overflow-x-hidden'>
				<div className='snap-center min-h-[100svh] w-full'>
					<Navbar />
					<Hero />
				</div>
				<News />
				<Timetable />
				<Contact />
				<Footer />
			</main>
		</>
	);
}
