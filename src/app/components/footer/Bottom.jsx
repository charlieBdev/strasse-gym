import Link from 'next/link';

export const Bottom = () => {
	return (
		<div className='flex w-full items-center justify-between text-sm'>
			<p>© 2023 Strasse Gym</p>
			<p>
				<Link
					href='https://charliebdev.vercel.app/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Site by
				</Link>
			</p>
		</div>
	);
};
