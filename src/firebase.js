import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDgF-KT5SuR6y56eqXMyaxgcuzlmsFSQ_U",
  authDomain: "messenger-46f50.firebaseapp.com",
  databaseURL: "https://messenger-46f50.firebaseio.com",
  projectId: "messenger-46f50",
  storageBucket: "messenger-46f50.appspot.com",
  messagingSenderId: "740240374279",
  appId: "1:740240374279:web:004e1922d6a474a1a688a2",
  measurementId: "G-ZVC07ZX26N"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };