import React from 'react';
import { EveningSVG } from '../svg/EveningSVG';
import { DaytimeSVG } from '../svg/DaytimeSVG';

const Table = () => {
	return (
		<section className="flex flex-col w-full gap-1 select-none">
			<div className="flex flex-col md:grid md:grid-cols-2 gap-3">
				{/* Mon */}
				<div className="border rounded-lg p-2 hover:shadow-sm hover:shadow-neutral-50">
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-md italic border-b font-headings mx-1">
							MON - WED - FRI
						</p>
						<div className="grid grid-cols-2 hover:bg-violet-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<EveningSVG />
								<p>18:30 - 19:30</p>
							</div>
							<p>Kickboxing</p>
							{/* <p>🥊</p> */}
						</div>
						<div className="grid grid-cols-2 hover:bg-violet-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<EveningSVG />
								<p>19:30 - 20:30</p>
							</div>
							<p>BJJ</p>
							{/* <p>🥋</p> */}
						</div>
					</div>
				</div>
				{/* Tues */}
				<div className="border rounded-lg p-2 hover:shadow-sm hover:shadow-neutral-50">
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-md italic border-b font-headings mx-1">
							TUE
						</p>
						<div className="grid grid-cols-2 hover:bg-violet-500 rounded-lg">
							<div className="flex items-center gap-1 px-1">
								<EveningSVG />
								<p>18:30 - 19:30</p>
							</div>
							<p>BJJ</p>
							{/* <p>🥋</p> */}
						</div>
					</div>
				</div>
				{/* Thurs */}
				<div className="border rounded-lg p-2 hover:shadow-sm hover:shadow-neutral-50">
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-md italic border-b font-headings mx-1">
							THU
						</p>
						<div className="grid grid-cols-2 hover:bg-violet-500 rounded-lg">
							<div className="flex items-center gap-1 px-1">
								<EveningSVG />
								<p>18:30 - 19:30</p>
							</div>
							<p>KAPAP</p>
							{/* <p></p> */}
						</div>
					</div>
				</div>
				{/* Sat */}
				<div className="border rounded-lg p-2 hover:shadow-sm hover:shadow-neutral-50">
					<div className="flex flex-col gap-1">
						<p className="font-semibold text-md italic border-b font-headings mx-1">
							SAT
						</p>
						<div className="grid grid-cols-2 hover:bg-violet-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								<p>09:00 - 10:00</p>
							</div>
							<p>Kids KB & BJJ</p>
							{/* <p>🧒🥊🥋</p> */}
						</div>
						<div className="grid grid-cols-2 hover:bg-violet-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								<p>13:00 - 14:00</p>
							</div>
							<p>KB Sparring</p>
							{/* <p>🥊</p> */}
						</div>
						<div className="grid grid-cols-2 hover:bg-violet-500 rounded-lg px-1">
							<div className="flex items-center gap-1">
								<DaytimeSVG />
								<p>14:00 - 15:00</p>
							</div>
							<p>BJJ Sparring</p>
							{/* <p>🥋</p> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Table;
