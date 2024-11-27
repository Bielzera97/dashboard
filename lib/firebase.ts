import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOH5O9mFsBvAzMODZBOpSUOifBjUlVGRg",
  authDomain: "dashboard-overview-83cc7.firebaseapp.com",
  projectId: "dashboard-overview-83cc7",
  storageBucket: "dashboard-overview-83cc7.firebasestorage.app",
  messagingSenderId: "126396893556",
  appId: "1:126396893556:web:25e4a6433917df5e398421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
