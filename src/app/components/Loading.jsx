import React from 'react';

export const Loading = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<div className="bg-neutral-50 rounded-full w-24 h-24 animate-ping"></div>
		</div>
	);
};
