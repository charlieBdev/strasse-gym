import React from 'react';
import { Form } from './Form';

export const Contact = () => {
	return (
		<div
			id="contact"
			className="bg-gradient-to-b from-neutral-900 via-purple-500 to-neutral-900 snap-end min-h-[100dvh] w-full flex flex-col items-center justify-center p-6 md:px-16 lg:px-24 xl:px-32 gap-3"
		>
			<p className="text-center italic font-semibold text-md bg-purple-500 border-l border-b-2 border-neutral-50 p-3 -rotate-3 hover:rotate-0 select-none rounded-sm">
				CONTACT
			</p>
			{/* <p>
				We would love to hear from you if you have any queries about classes or
				private classes.
			</p> */}
			<Form />
		</div>
	);
};
