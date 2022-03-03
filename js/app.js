import{initializeApp} from 'firebase/app';
import { getFirestore, collection, onSnapshot, 
    addDoc, deleteDoc, doc,
    query, where, orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNjVvMiXm58y6mdbq4sl6vHFhpfqBIjHE",
    authDomain: "chatroom-c0733.firebaseapp.com",
    projectId: "chatroom-c0733",
    storageBucket: "chatroom-c0733.appspot.com",
    messagingSenderId: "761637094597",
    appId: "1:761637094597:web:22728f82c39f0253b99cac"
  };

  const app = initializeApp();

  const db = getFirestore();