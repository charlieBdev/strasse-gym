'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { AuthContextProvider } from '../context/AuthContext';
import './globals.css';
import { Toaster } from 'sonner';
import { play } from './fonts';

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='!scroll-smooth'>
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
