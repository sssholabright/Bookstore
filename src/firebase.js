import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAL_hZn8SGm7tQ96Fn9kZVwf0azw7lgTKA',
  authDomain: 'let-novel.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'let-novel',
  storageBucket: 'your-project-id-1234.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:602765755738:android:6b3aeead52369b6bb81f63',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}