import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD1f7kumhfXYguPyqv-mVtlyr9N6gGocCw",
  authDomain: "pro-c71-84bf2.firebaseapp.com",
  projectId: "pro-c71-84bf2",
  storageBucket: "pro-c71-84bf2.appspot.com",
  messagingSenderId: "443840800493",
  appId: "1:443840800493:web:cb6e6007815d388ffb0ee4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
