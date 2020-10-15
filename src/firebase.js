import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCGrYI3a1lz1ie9sFYIaYF9IVXG4DqEc18",
    authDomain: "clone-3fda5.firebaseapp.com",
    databaseURL: "https://clone-3fda5.firebaseio.com",
    projectId: "clone-3fda5",
    storageBucket: "clone-3fda5.appspot.com",
    messagingSenderId: "31219456980",
    appId: "1:31219456980:web:a591398bdee9cb53be9441"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {auth};