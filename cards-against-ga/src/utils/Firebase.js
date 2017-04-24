import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCQuQ3BaTytQc7paPDl4E0J4b8OIBv3Rfg",
  authDomain: "cards-against-ga.firebaseapp.com",
  databaseURL: "https://cards-against-ga.firebaseio.com",
  projectId: "cards-against-ga",
  storageBucket: "cards-against-ga.appspot.com",
  messagingSenderId: "970468826138"
  };
firebase.initializeApp(config);

export default firebase;
