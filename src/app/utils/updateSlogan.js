import { toast } from 'sonner';
import { db } from '../../../config';
import { doc, updateDoc } from 'firebase/firestore';

export async function updateSlogan(newSlogan) {
	const sloganDocRef = doc(db, 'slogan', '1');
	try {
		await updateDoc(sloganDocRef, { slogan: newSlogan });
		toast.success('Updated slogan!');
	} catch (error) {
		toast.error('Error updating slogan');
	}
}
