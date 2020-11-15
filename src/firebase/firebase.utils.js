import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBe_yIJj4YSROdIH9C1IN3ZNfvqJru-vdw",
  authDomain: "milan-ecommerce.firebaseapp.com",
  databaseURL: "https://milan-ecommerce.firebaseio.com",
  projectId: "milan-ecommerce",
  storageBucket: "milan-ecommerce.appspot.com",
  messagingSenderId: "420893278878",
  appId: "1:420893278878:web:9f824ccd701f7a929ff18f",
  measurementId: "G-L8D8WYY3EN",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
