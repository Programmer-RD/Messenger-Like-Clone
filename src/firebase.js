import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBuIcM6ElM-yqfPydeS8dkuVjigeIdVE7I",
  authDomain: "messenger-app-react-js-rd.firebaseapp.com",
  databaseURL: "https://messenger-app-react-js-rd.firebaseio.com",
  projectId: "messenger-app-react-js-rd",
  storageBucket: "messenger-app-react-js-rd.appspot.com",
  messagingSenderId: "782371269785",
  appId: "1:782371269785:web:614c84fe3b8f40c12ddc08",
  measurementId: "G-LD1DKS637P"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
