// import {seedDatabase} from '../seed';

const firebaseConfig = {
    apiKey: "AIzaSyA2TOO2xYzV4k63L3QMzlcAlIv5oQKHMbI",
    authDomain: "instagram-clone-b6522.firebaseapp.com",
    databaseURL: "https://instagram-clone-b6522.firebaseapp.com",
    projectId: "instagram-clone-b6522",
    storageBucket: "instagram-clone-b6522.appspot.com",
    messagingSenderId: "315488847001",
    appId: "1:315488847001:web:cb4503679bdc211696e408"
  };

  const firebase = window.firebase.initializeApp(firebaseConfig);
  const FieldValue =  window.firebase.firestore;

//   seedDatabase(firebase);

  export { firebase, FieldValue };