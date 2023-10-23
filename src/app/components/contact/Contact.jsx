import { Form } from './Form';
import { UpDown } from '../UpDown';
import { SectionHeading } from '../SectionHeading';

export const Contact = () => {
	return (
		<div
			id="contact"
			className="snap-center h-[100vh] bg-neutral-900 w-full flex flex-col items-center justify-center p-6 md:px-16 lg:px-24 xl:px-32"
		>
			{/* <UpDown href={'timetable'} direction={'up'} /> */}
			<div className="flex flex-col w-full gap-3">
				<SectionHeading heading={'CONTACT US'} />
				<p className="text-center">
					Send us a message. We would love to hear from you!
				</p>
				<Form />
			</div>

			{/* <UpDown href={'footer'} direction={'down'} /> */}
		</div>
	);
};
