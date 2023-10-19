import { Form } from './Form';
import { UpDown } from '../UpDown';

export const Contact = () => {
	return (
		<div
			id="contact"
			className="bg-gradient-to-b from-neutral-900 via-purple-500 to-neutral-900 snap-end min-h-[100dvh] w-full flex flex-col items-center justify-between p-6 md:px-16 lg:px-24 xl:px-32"
		>
			<UpDown href={'timetable'} direction={'up'} />
			<div className="flex flex-col w-full gap-3">
				<p className="mx-auto text-center italic font-semibold text-md bg-gradient-to-r from-purple-900 from-1% to-purple-500 border-l border-b-2 border-neutral-50 p-3 select-none rounded-sm -rotate-3 hover:rotate-0">
					CONTACT US
				</p>
				<p className="text-center">
					Send us a message. We would love to hear from you!
				</p>
				<Form />
			</div>

			<UpDown href={'footer'} direction={'down'} />
		</div>
	);
};
