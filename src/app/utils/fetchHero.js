import { storage } from '../../../config';
import { getDownloadURL, ref } from '@firebase/storage';

export async function fetchHero() {
	try {
		const storageRef = ref(storage, '/hero.jpg');
		const url = await getDownloadURL(storageRef);
		return url;
	} catch (error) {
		console.error('Error getting download URL:', error);
	}
}
