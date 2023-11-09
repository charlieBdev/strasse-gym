'use client';

import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { createContext, useContext, useState, useEffect } from 'react';
import { firebase_app } from '../../config';
import { Loading } from '../app/components/Loading';

const auth = getAuth(firebase_app);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			setLoading(false);
		});
		return () => unsubscribe;
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{/* {loading ? <Loading /> : children} */}
			{children}
		</AuthContext.Provider>
	);
};
