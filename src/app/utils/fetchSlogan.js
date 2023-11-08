import { db } from '../../../config';
import { doc, getDoc } from 'firebase/firestore';

export async function fetchSlogan() {
	const docRef = doc(db, 'slogan', '1');
	try {
		const docSnapshot = await getDoc(docRef);
		if (docSnapshot.exists()) {
			const sloganData = docSnapshot.data();
			const slogan = sloganData.slogan;
			return slogan;
		} else {
			// console.log('Document does not exist');
		}
	} catch (error) {
		// console.error('Error getting slogan:', error);
	}
}
