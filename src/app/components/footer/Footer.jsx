'use client';

import { Map } from './Map';
import { Bottom } from './Bottom';
import { Contacts } from './Contacts';
import { UpDown } from '../../components/UpDown';
import { Address } from './Address';
import { SectionWrapper } from '../../hoc';

const Footer = () => {
	return (
		<footer
			className='min-h-[calc(100vh-5rem)] w-screen flex flex-col items-center justify-between p-6 md:px-16 lg:px-24 xl:px-32 border-b-2'
			// id='footer'
		>
			<UpDown href={'nav'} direction={'top'} bounce={true} aria={'go to top'} />
			<div className='flex flex-col items-center justify-center gap-6'>
				<div className='flex flex-col items-center justify-center gap-3'>
					<Map />
					<Address />
				</div>
				<Contacts />
			</div>
			<Bottom />
		</footer>
	);
};

export default SectionWrapper(Footer, 'footer');
