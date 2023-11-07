'use client';

import { useSearchParams } from 'next/navigation';
import { useAuthContext } from '../../context/AuthContext';
import { AdminDash } from '../components/AdminDash';
import { Login } from '../components/Login';

// export const metadata = {
// 	title: 'Strasse Admin',
// 	description: 'Some say the best gym in Sheffield',
// };

export default function Admin() {
	const { user } = useAuthContext();
	const searchParams = useSearchParams();
	const id = searchParams.get('id');
	const title = searchParams.get('title');
	const content = searchParams.get('content');
	const imageAlt = searchParams.get('imageAlt');
	const imageUrl = searchParams.get('imageUrl');
	const newsToEdit = {
		id,
		title,
		content,
		imageAlt,
		// imageUrl,
	};
	const imageToEdit = {
		id,
		imageUrl,
	};

	if (user) {
		return <AdminDash newsToEdit={newsToEdit} imageToEdit={imageToEdit} />;
	} else {
		return <Login />;
	}
}
