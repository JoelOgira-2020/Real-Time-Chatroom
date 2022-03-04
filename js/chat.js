// Adding new chat documents
// seting up a real-time listener to get new chats
// updating the username
// updating the room

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

initializeApp(firebaseConfig);

const db = getFirestore();

class ChatRoom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = collection(db, 'chats');
    }
    async addChat(message) {
        // format a chat object
        const now = new Date();
        const chat = {
            message, 
            username: this.username,
            room: this.room,
            created_at: serverTimestamp(now)
        }
        // saving chat object to database
        const response = await this.chats.doc().set(chat);
        return response;
    }
}
const chatroom = new ChatRoom('gaming', 'Kenzie');

chatroom.addChat('Hi am new here')
    .then(() => console.log('chat added'))
    // .catch(err => console.error(err.message));