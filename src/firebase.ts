import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZ_6anxuEwy8-wkLXoH1vspH2ar0ItUUw",
  authDomain: "twitter-challenge-67593.firebaseapp.com",
  projectId: "twitter-challenge-67593",
  storageBucket: "twitter-challenge-67593.appspot.com",
  messagingSenderId: "117024799416",
  appId: "1:117024799416:web:919bcb41cbbcd6618d124d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
