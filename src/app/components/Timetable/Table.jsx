import React from 'react';
import { EveningSVG } from '../svg/EveningSVG';
import { DaytimeSVG } from '../svg/DaytimeSVG';

const Table = () => {
	return (
		<div className="flex flex-col w-full gap-1 select-none">
			<p className="font-bold text-center italic">Timetable</p>
			<div className="flex flex-col md:grid md:grid-cols-2 gap-3">
				{/* Mon */}
				<div className="border rounded-lg shadow-lg shadow-violet-600 p-3 hover:shadow-xl hover:shadow-violet-600">
					<div className="flex flex-col gap-2">
						<p className="font-semibold text-md italic border-b p-1">
							MON - WED - FRI
						</p>
						<div className="grid grid-cols-2 gap-1 p-1 hover:bg-violet-500 rounded-lg">
							<div className="flex items-center gap-1">
								<EveningSVG />
								<p>18:30 - 19:30</p>
							</div>
							<p>Kickboxing</p>
						</div>
						<div className="grid grid-cols-2 gap-1 p-1 hover:bg-violet-500 rounded-lg">
							<div className="flex items-center gap-1">
								<EveningSVG />
								<p>19:30 - 20:30</p>
							</div>
							<p>BJJ</p>
						</div>
					</div>
				</div>
				{/* Tues */}
				<div className="border rounded-lg shadow-lg shadow-violet-600 p-3 hover:shadow-xl hover:shadow-violet-600">
					<div className="flex flex-col gap-2">
						<p className="font-semibold text-md italic border-b p-1">TUE</p>
						<div className="grid grid-cols-2 gap-1 p-1 hover:bg-violet-500 rounded-lg">
							<div className="flex items-center gap-1">
								<EveningSVG />
								<p>18:30 - 19:30</p>
							</div>
							<p>BJJ</p>
						</div>
					</div>
				</div>
				{/* Thurs */}
				<div className="border rounded-lg shadow-lg shadow-violet-600 p-3 hover:shadow-xl hover:shadow-violet-600">
					<div className="flex flex-col gap-2">
						<p className="font-semibold text-md italic border-b p-1">TUE</p>
						<div className="grid grid-cols-2 gap-1 p-1 hover:bg-violet-500 rounded-lg">
							<div className="flex items-center gap-1">
								<EveningSVG />
								<p>18:30 - 19:30</p>
							</div>
							<p>KAPAP</p>
						</div>
					</div>
				</div>
				{/* Sat */}
				<div className="border rounded-lg shadow-lg shadow-violet-600 p-3 hover:shadow-xl hover:shadow-violet-600">
					<div className="flex flex-col gap-2">
						<p className="font-semibold text-md italic border-b p-1">SAT</p>
						<div className="grid grid-cols-2 gap-1 p-1 hover:bg-violet-500 rounded-lg">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								<p>09:00 - 09:50</p>
							</div>
							<p>Kids KB & BJJ</p>
						</div>
						<div className="grid grid-cols-2 gap-1 p-1 hover:bg-violet-500 rounded-lg">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								<p>13:00 - 14:00</p>
							</div>
							<p>KB Sparring</p>
						</div>
						<div className="grid grid-cols-2 gap-1 p-1 hover:bg-violet-500 rounded-lg">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								<p>14:00 - 15:00</p>
							</div>
							<p>BJJ Sparring</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Table;
