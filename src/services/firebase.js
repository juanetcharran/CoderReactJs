import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEwBoeX0Ji6OBDNMJ00Hb2HJl-vJNCiq8",
    authDomain: "reactcoder-80b12.firebaseapp.com",
    projectId: "reactcoder-80b12",
    storageBucket: "reactcoder-80b12.firebasestorage.app",
    messagingSenderId: "997928705246",
    appId: "1:997928705246:web:24376643abd5884dc5b64f"
};

let db = null;

const app = initializeApp(firebaseConfig);
db = getFirestore(app);

export const firestore = db;
