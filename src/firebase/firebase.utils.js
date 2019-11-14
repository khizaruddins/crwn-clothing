import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCL5ZS4G0Zv7_vv9SCXS-fmGTrsQn8bZ1g",
    authDomain: "crwn-db-11.firebaseapp.com",
    databaseURL: "https://crwn-db-11.firebaseio.com",
    projectId: "crwn-db-11",
    storageBucket: "crwn-db-11.appspot.com",
    messagingSenderId: "370391707212",
    appId: "1:370391707212:web:9e6b1088bd125a10300ee9"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;