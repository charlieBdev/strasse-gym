import Table from './Table';
import { Prices } from './Prices';

export const Timetable = () => {
	return (
		<div
			id="timetable"
			className="snap-end min-h-[100dvh] w-full flex flex-col items-center justify-center p-6 md:px-16 lg:px-24 xl:px-32 gap-3"
		>
			<p className="rounded-sm text-center italic font-semibold text-md bg-neutral-900 border-l border-b-2 border-neutral-50 p-3 -rotate-3 hover:rotate-0 select-none">
				TIMETABLE & PRICES
			</p>
			<Table />
			<Prices />
		</div>
	);
};
