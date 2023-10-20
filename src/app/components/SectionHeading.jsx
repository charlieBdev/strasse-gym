import React from 'react';

export const SectionHeading = ({ heading }) => {
	return (
		<p className="mx-auto text-center italic font-semibold text-md bg-gradient-to-r from-blue-500 to-purple-500 border-l border-b-2 border-neutral-50 p-3 select-none rounded-sm -rotate-3 hover:rotate-0">
			{heading}
		</p>
	);
};
