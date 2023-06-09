
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwPAzszoNvx7gjuuLlwurJaShaDlj5RmE",
  authDomain: "curso-react-5ff05.firebaseapp.com",
  projectId: "curso-react-5ff05",
  storageBucket: "curso-react-5ff05.appspot.com",
  messagingSenderId: "491497997988",
  appId: "1:491497997988:web:435356f483f58fb55fc831"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)



