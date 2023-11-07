import './globals.css';
import { Toaster } from 'sonner';
import { play } from './fonts';

export const metadata = {
	title: 'Strasse Gym',
	description: 'Some say the best gym in Sheffield',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='!scroll-smooth'>
			<body className={play.className}>
				{children}
				<Toaster richColors />
			</body>
		</html>
	);
}
