import Table from './Table';
import { Prices } from './Prices';
import { UpDown } from '../UpDown';

export const Timetable = () => {
	return (
		<div
			id="timetable"
			className="snap-end min-h-[100dvh] w-full flex flex-col items-center justify-between p-6 md:px-16 lg:px-24 xl:px-32 gap-3"
		>
			<UpDown href={'news'} direction={'up'} />
			<div className="w-full flex flex-col gap-3">
				<p className="mx-auto rounded-sm text-center italic font-semibold text-md bg-gradient-to-r from-blue-500 to-purple-500 border-l border-b-2 border-neutral-50 p-3 select-none -rotate-3 hover:rotate-0">
					TIMETABLE & PRICES
				</p>
				<Table />
				<Prices />
			</div>

			<UpDown href={'contact'} direction={'down'} />
		</div>
	);
};
