'use client';

import React from 'react';
import { Map } from './Map';
import { Bottom } from './Bottom';
import { Contacts } from './Contacts';

export const Footer = () => {
	return (
		<div
			id="footer"
			className="snap-end min-h-[100dvh] w-full flex flex-col items-center justify-between border-b-2 gap-3 p-6 md:px-16 lg:px-24 xl:px-32"
		>
			<div className="h-full flex flex-col items-center justify-center gap-8">
				<div className="flex flex-col items-center justify-center gap-3">
					<Map />
					<div className="flex flex-col">
						<p>Meersbrook Enterprise Centre</p>
						<p>Unit 208, Valley Rd</p>
						<p>Sheffield </p>
						<p>S8 9FT</p>
					</div>
				</div>
				<Contacts />
			</div>

			<Bottom />
		</div>
	);
};
