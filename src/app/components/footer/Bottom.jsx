import Link from 'next/link';

export const Bottom = () => {
	return (
		<div className="flex w-full justify-between text-sm">
			<p>© 2023 Strasse Gym</p>
			<p>
				Site by{' '}
				<Link href="https://charliebdev.vercel.app/" target="_blank">
					charlieBdev
				</Link>
			</p>
		</div>
	);
};
