import { ContactForm } from './ContactForm';
import { SectionHeading } from '../SectionHeading';
import { SectionWrapper } from '../../hoc';

const Contact = () => {
	return (
		<div
			id='contact'
			className='snap-center min-h-[calc(100vh)] bg-neutral-900 w-full flex flex-col items-center justify-center p-6 md:px-16 lg:px-24 xl:px-32'
		>
			<div className='flex flex-col w-full gap-3'>
				<SectionHeading
					heading={'CONTACT US'}
					subheading={'Send us a message. We would love to hear from you!'}
				/>
				<ContactForm />
			</div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
