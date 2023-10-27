import {
	collection,
	getDocs,
	query,
	orderBy,
	limit,
	startAfter,
} from 'firebase/firestore';
import { db } from '../../../config';

export async function fetchNews(startAfterDoc = null) {
	const limitCount = 3;
	const newsCollection = collection(db, 'news');
	let newsQuery = query(
		newsCollection,
		orderBy('created', 'desc'),
		limit(limitCount)
	);

	if (startAfterDoc) {
		newsQuery = query(
			newsCollection,
			orderBy('created', 'desc'),
			startAfter(startAfterDoc.created),
			limit(limitCount)
		);
	}

	const querySnapshot = await getDocs(newsQuery);

	const data = [];

	querySnapshot.forEach((doc) => {
		data.push({
			id: doc.id,
			...doc.data(),
		});
	});

	const lastQuery = query(newsCollection, orderBy('created', 'asc'), limit(1));

	const lastQuerySnapshot = await getDocs(lastQuery);
	const lastId = lastQuerySnapshot.docs[0].id;

	return { data, lastId };
}
