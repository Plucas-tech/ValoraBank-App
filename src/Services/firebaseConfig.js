import { initializeApp } from 'firebase/app';

import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbPZpqDgAR33M9LfLQ3BaDtqsBKv7bpmQ",
  authDomain: "banco-digital-f4e46.firebaseapp.com",
  projectId: "banco-digital-f4e46",
  storageBucket: "banco-digital-f4e46.firebasestorage.app",
  messagingSenderId: "1006570478481",
  appId: "1:1006570478481:web:841f455a1f923acaad5830",
  measurementId: "G-94426QJC4G"
};

const app = initializeApp(firebaseConfig);
let auth;

try {

  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });

} catch(error) {

  auth = getAuth(app);

}

const db = getFirestore(app);

export { auth, db };