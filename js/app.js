import{initializeApp} from 'firebase/app';
import { getFirestore, collection, onSnapshot, 
    addDoc, deleteDoc, doc,
    query, where, orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore';
import {
    createUserWithEmailAndPassword, getAuth, 
    signOut, signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDNjVvMiXm58y6mdbq4sl6vHFhpfqBIjHE",
    authDomain: "chatroom-c0733.firebaseapp.com",
    projectId: "chatroom-c0733",
    storageBucket: "chatroom-c0733.appspot.com",
    messagingSenderId: "761637094597",
    appId: "1:761637094597:web:22728f82c39f0253b99cac"
  };

// Initialize app
initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore();
const auth = getAuth();

// Collection Reference
const collectionRef = collection(db, 'chats');

// queries
const q = query(collectionRef, orderBy('created_at', 'asc'));

// Real Time collection of data
onSnapshot(q, (snapshot) => {
    let chats = [];
    snapshot.docs.forEach(doc => {
        chats.push({...doc.data(), id: doc.id});
    })
    console.log(chats);
})
