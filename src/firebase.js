import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAim4TRE_MV91jyH2GwwTD0MX189nOIAtc",
  authDomain: "bookworm-bab10.firebaseapp.com",
  projectId: "bookworm-bab10",
  storageBucket: "bookworm-bab10.appspot.com",
  messagingSenderId: "665972808152",
  appId: "1:665972808152:web:7bbe829938263780957aad"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)