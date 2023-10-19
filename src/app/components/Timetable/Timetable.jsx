import Table from './Table';
import { Prices } from './Prices';

export const Timetable = () => {
	return (
		<div
			id="timetable"
			className="snap-end min-h-[100dvh] w-full flex flex-col items-center justify-center p-6 md:px-16 lg:px-24 xl:px-32 gap-3"
		>
			<p className="text-center italic font-semibold text-md underline">
				TIMETABLE & PRICES
			</p>
			<Table />
			<Prices />
		</div>
	);
};
