import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAYR-nD0vBbxTPiMMjm3NFhlh7RLnY7nvI",
    authDomain: "lh-shop-db.firebaseapp.com",
    projectId: "lh-shop-db",
    storageBucket: "lh-shop-db.appspot.com",
    messagingSenderId: "494374510449",
    appId: "1:494374510449:web:7f5e905625a6b886f820d0",
    measurementId: "G-6RNYBF45XQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;