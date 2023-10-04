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
						<p className="font-semibold text-md italic border-b">
							MON, WED, and FRI
						</p>
						<div className="grid grid-cols-2 gap-2">
							<div className="flex items-center gap-1">
								<EveningSVG />
								18:30 - 19:30
							</div>
							<p>Kickboxing</p>

							<div className="flex items-center gap-1">
								<EveningSVG />
								19:30 - 20:30
							</div>
							<p>BJJ</p>
						</div>
					</div>
				</div>
				{/* Tues */}
				<div className="border rounded-lg shadow-lg shadow-violet-600 p-3 hover:shadow-xl hover:shadow-violet-600">
					<div className="flex flex-col gap-2">
						<p className="font-semibold text-md italic border-b">TUE</p>
						<div className="grid grid-cols-2 gap-2">
							<div className="flex items-center gap-1">
								<EveningSVG />
								18:30 - 19:30
							</div>
							<p>
								BJJ <span className="text-neutral-500 italic">tbc</span>
							</p>
						</div>
					</div>
				</div>
				{/* Weds
				<div className="border rounded-lg shadow-lg shadow-violet-600 p-3 hover:shadow-xl hover:shadow-violet-600">
					<div className="flex flex-col gap-2">
						<p className="font-semibold text-md italic border-b">WED</p>
						<div className="grid grid-cols-2 gap-2">
							<div className="flex items-center gap-1">
								<EveningSVG />
								18:30 - 19:30
							</div>
							<p>Kickboxing</p>

							<div className="flex items-center gap-1">
								<EveningSVG />
								19:30 - 20:30
							</div>
							<p>BJJ</p>
						</div>
					</div>
				</div> */}
				{/* Thurs */}
				<div className="border rounded-lg shadow-lg shadow-violet-600 p-3 hover:shadow-xl hover:shadow-violet-600">
					<div className="flex flex-col gap-2">
						<p className="font-semibold text-md italic border-b">THU</p>
						<div className="grid grid-cols-2 gap-2">
							<div className="flex items-center gap-1">
								<EveningSVG />
								18:30 - 19:30
							</div>
							<p>
								KAPAP <span className="text-neutral-500 italic">tbc</span>
							</p>

							<div className="flex items-center gap-1">
								<EveningSVG />
								19:30 - 20:30
							</div>
							<p>
								KB Sparring <span className="text-neutral-500 italic">tbc</span>
							</p>
						</div>
					</div>
				</div>
				{/* Fri
				<div className="border rounded-lg shadow-lg shadow-violet-600 p-3 hover:shadow-xl hover:shadow-violet-600">
					<div className="flex flex-col gap-2">
						<p className="font-semibold text-md italic border-b">FRI</p>
						<div className="grid grid-cols-2 gap-2">
							<div className="flex items-center gap-1">
								<EveningSVG />
								18:30 - 19:30
							</div>
							<p>| Kickboxing</p>

							<div className="flex items-center gap-1">
								<EveningSVG />
								19:30 - 20:30
							</div>
							<p>| BJJ Sparring</p>
						</div>
					</div>
				</div> */}
				{/* Sat */}
				<div className="border rounded-lg shadow-lg shadow-violet-600 p-3 hover:shadow-xl hover:shadow-violet-600">
					<div className="flex flex-col gap-2">
						<p className="font-semibold text-md italic border-b">SAT</p>
						<div className="grid grid-cols-2 gap-2">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								09:00 - 9:50
							</div>
							<p>Kids KB & BJJ</p>

							<div className="flex items-center gap-1">
								<DaytimeSVG />
								13:00 - 14:00
							</div>
							<p>KB Sparring</p>

							<div className="flex items-center gap-1">
								<DaytimeSVG />
								14:00 - 15:00
							</div>
							<p>BJJ Sparring</p>
						</div>
					</div>
				</div>
				{/* Sun
				<div className="border rounded-lg shadow-lg shadow-violet-600 p-3">
					<div className="flex flex-col gap-2">
						<p className="font-semibold text-md italic border-b">SUN</p>
						<div className="grid grid-cols-2 gap-2">
							<p>Closed</p>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Table;
