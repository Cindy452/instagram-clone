// import {seedDatabase} from '../seed';

const firebaseConfig = {
  // your own firebase config
  };

  const firebase = window.firebase.initializeApp(firebaseConfig);
  const FieldValue =  window.firebase.firestore;

//   seedDatabase(firebase);

  export { firebase, FieldValue };