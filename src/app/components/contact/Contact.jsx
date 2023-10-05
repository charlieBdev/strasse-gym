import React from 'react';
import { Form } from './Form';

export const Contact = () => {
	return (
		<div
			id="contact"
			className="bg-pink-400 min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center border-b-2 px-6 md:px-16 lg:px-24 xl:px-32"
		>
			<Form />
		</div>
	);
};
