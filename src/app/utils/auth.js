import firebase from 'firebase/app';
import 'firebase/auth';

export const signIn = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return true; // Authentication success
  } catch (error) {
    console.error('Authentication error:', error);
    return false; // Authentication failed
  }
};

export const signOut = async () => {
  await firebase.auth().signOut();
};
