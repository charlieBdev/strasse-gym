'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { AuthContextProvider } from '../context/AuthContext';
import './globals.css';
import { Toaster } from 'sonner';
import { play } from './fonts';
import { metadata } from './metadata';
import Head from 'next/head';

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='!scroll-smooth'>
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
				<link rel='manifest' href='/site.webmanifest' />
			</Head>
			<body className={play.className}>
				<NextUIProvider>
					<AuthContextProvider>
						{children}
						<Toaster richColors />
					</AuthContextProvider>
				</NextUIProvider>
			</body>
		</html>
	);
}
