'use client';

import { Map } from './Map';
import { Bottom } from './Bottom';
import { Contacts } from './Contacts';
import { UpDown } from '../../components/UpDown';
import { Address } from './Address';

export const Footer = () => {
	return (
		<div
			id="footer"
			className="snap-end min-h-[100dvh] w-full flex flex-col items-center justify-between border-b-2 p-6 md:px-16 lg:px-24 xl:px-32"
		>
			<UpDown href={'nav'} direction={'top'} animate={'bounce'} />
			<div className="flex flex-col items-center justify-center gap-6">
				<div className="flex flex-col items-center justify-center gap-6">
					<Map />
					<Address />
				</div>
				<Contacts />
			</div>

			<Bottom />
		</div>
	);
};
