import React from 'react';
import Table from './Table';
import { Prices } from './Prices';

export const Timetable = () => {
	return (
		<div
			id="timetable"
			className="snap-end min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center border-b-2 p-6 md:px-16 lg:px-24 xl:px-32 gap-2"
		>
			<p className="text-center italic font-semibold text-md underline">
				TIMETABLE & PRICES
			</p>
			<Table />
			<Prices />
		</div>
	);
};
