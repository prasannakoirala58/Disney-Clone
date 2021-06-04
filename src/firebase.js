import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaxzQq82slcScQbtQ0bbmongl4VEW0OlU",
  authDomain: "disneyplus-clone-487a1.firebaseapp.com",
  projectId: "disneyplus-clone-487a1",
  storageBucket: "disneyplus-clone-487a1.appspot.com",
  messagingSenderId: "515932490397",
  appId: "1:515932490397:web:28b7ec2cc61d91bfbfe274",
  measurementId: "G-505KQX2ZW1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAaxzQq82slcScQbtQ0bbmongl4VEW0OlU",
    authDomain: "disneyplus-clone-487a1.firebaseapp.com",
    projectId: "disneyplus-clone-487a1",
    storageBucket: "disneyplus-clone-487a1.appspot.com",
    messagingSenderId: "515932490397",
    appId: "1:515932490397:web:28b7ec2cc61d91bfbfe274",
    measurementId: "G-505KQX2ZW1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/
