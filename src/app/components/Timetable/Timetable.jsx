import Table from './Table';
// import { UpDown } from '../UpDown';
import { SectionHeading } from '../SectionHeading';

export const Timetable = () => {
	return (
		<div
			id='timetable'
			className='snap-center min-h-[100vh] w-full flex flex-col items-center justify-center p-6 md:px-16 lg:px-24 xl:px-32 gap-3'
		>
			{/* <UpDown href={'nav'} direction={'top'} bounce={false} /> */}
			{/* <UpDown href={'news'} direction={'up'} /> */}
			<div className='w-full flex flex-col gap-3'>
				<SectionHeading heading={'TIMETABLE & PRICES'} />
				<div className='flex flex-col gap-1'>
					<Table />
				</div>
			</div>

			{/* <UpDown href={'contact'} direction={'down'} bounce={false} /> */}
		</div>
	);
};
