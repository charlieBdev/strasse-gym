import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../../config';

export async function fetchNews() {
	const newsCollection = collection(db, 'news');
	const newsQuery = query(newsCollection, orderBy('created', 'desc'), limit(5));

	const querySnapshot = await getDocs(newsQuery);
	const data = [];

	querySnapshot.forEach((doc) => {
		data.push({
			id: doc.id,
			...doc.data(),
		});
	});
	return data;
}
