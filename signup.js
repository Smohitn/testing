// signup.js

// Import Firebase modules
import firebase from 'firebase/app';
import 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA9xTh60_jNkbFjks4EqsHlgMYMktrlM_o',
  authDomain: 'vervein-76022.firebaseapp.com',
  projectId: 'vervein-76022',
  storageBucket: 'vervein-76022.appspot.com',
  messagingSenderId: "568730235574",
  appId: "1:568730235574:web:f6bc2471dbf5856e24ec17"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Your registration logic using Firebase Auth
function register() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('Email').value;
  const password = document.getElementById('password').value;

  // Use Firebase Auth API to create a new user
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      // Handle successful registration

      // Redirect to a new page after successful registration
      window.location.href = 'index.html ';
    })
    .catch(error => {
      // Handle registration errors
      console.error(error.message);
    });
}

// Other functions or logic related to signup.js
