import React from 'react';
import { Form } from './Form';

export const Contact = () => {
	return (
		<div
			id="contact"
			className="bg-gradient-to-b from-violet-500 to-neutral-900 snap-end min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center border-b-2 p-6 md:px-16 lg:px-24 xl:px-32 gap-2"
		>
			<p className="font-bold text-center italic underline">CONTACT</p>
			{/* <p>
				We would love to hear from you if you have any queries about classes or
				private classes.
			</p> */}
			<Form />
		</div>
	);
};
