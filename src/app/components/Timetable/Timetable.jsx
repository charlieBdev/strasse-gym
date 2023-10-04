import React from 'react';
import Table from './Table';

export const Timetable = () => {
	return (
		<div
			id="timetable"
			className="bg-violet-400 min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center border-b-2 p-8 md:p-16"
		>
			<Table />
		</div>
	);
};
