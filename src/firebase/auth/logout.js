import { signOut, getAuth } from 'firebase/auth';
import { firebase_app } from '../../../config';

const auth = getAuth(firebase_app);

export default async function logout() {
	let result = null;
	let error = null;

	try {
		result = await signOut(auth);
	} catch (e) {
		error = e;
	}

	return { result, error };
}
