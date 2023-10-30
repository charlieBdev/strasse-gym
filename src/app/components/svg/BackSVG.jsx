import React from 'react';

export const BackSVG = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='w-8 h-8 p-1 rounded-full hover:bg-neutral-500 hover:bg-opacity-10'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
			/>
		</svg>
	);
};
