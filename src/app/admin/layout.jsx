import { AuthContextProvider } from '../../context/AuthContext';

export const metadata = {
	title: 'Strasse Admin',
	description: 'Some say the best gym in Sheffield',
};

export default function Admin({ children }) {
	return <AuthContextProvider>{children}</AuthContextProvider>;
}
