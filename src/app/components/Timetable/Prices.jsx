import React from 'react';
import { DaytimeSVG } from '../svg/DaytimeSVG';
import { EveningSVG } from '../svg/EveningSVG';

export const Prices = () => {
	return (
		<div className="flex flex-col w-full items-center gap-1 select-none">
			<p className="font-bold text-center italic">Prices</p>
			<div className="flex flex-col gap-3 w-full">
				<div className="border rounded-lg shadow-lg shadow-violet-600 p-3 hover:shadow-xl hover:shadow-violet-600">
					<div className="flex flex-col gap-2">
						<div className="grid grid-cols-3 gap-1 p-1 hover:bg-violet-500 rounded-lg">
							<p>Kids</p>
							<p>£5</p>
							<p>50 mins</p>
						</div>
						<div className="grid grid-cols-3 gap-1 p-1 hover:bg-violet-500 rounded-lg">
							<p>Adults</p>
							<p>£6</p>
							<p>1 hour</p>
						</div>
						<div className="grid grid-cols-3 gap-1 p-1 hover:bg-violet-500 rounded-lg">
							<p>Adults</p>
							<p>£10</p>
							<p>2 hours</p>
						</div>
						<div className="grid grid-cols-3 gap-1 p-1 hover:bg-violet-500 rounded-lg">
							<p>Adults</p>
							<p>£60</p>
							<p>Monthly</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
