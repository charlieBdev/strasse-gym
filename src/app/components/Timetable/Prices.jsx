import React from 'react';

export const Prices = () => {
	return (
		<div className="flex flex-col w-full items-center gap-1 select-none">
			<div className="flex flex-col w-full max-w-lg">
				<div className="border rounded-lg shadow-lg shadow-violet-600 p-2 hover:shadow-xl hover:shadow-violet-600">
					<div className="flex flex-col gap-1">
						<div className="grid grid-cols-3 hover:bg-violet-500 rounded-lg px-1">
							<p>Kids</p>
							<p>£5</p>
							<p>50 mins</p>
						</div>
						<div className="grid grid-cols-3 hover:bg-violet-500 rounded-lg px-1">
							<p>Adults</p>
							<p>£6</p>
							<p>1 hour</p>
						</div>
						<div className="grid grid-cols-3 hover:bg-violet-500 rounded-lg px-1">
							<p>Adults</p>
							<p>£10</p>
							<p>2 hours</p>
						</div>
						<div className="grid grid-cols-3 hover:bg-violet-500 rounded-lg px-1">
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
