import React from 'react';
import Table from './Table';
import { Prices } from './Prices';

export const Timetable = () => {
	return (
		<div
			id="timetable"
			className="bg-violet-400 min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center border-b-2 p-6 md:px-16 lg:px-24 xl:px-32 gap-3"
		>
			<Table />
			<Prices />
		</div>
	);
};
