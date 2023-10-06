import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvz5u1EH_9EbSQPwItB0MX2k8OQ4p6kdw",
  authDomain: "freak-kingdom.firebaseapp.com",
  projectId: "freak-kingdom",
  storageBucket: "freak-kingdom.appspot.com",
  messagingSenderId: "971524844034",
  appId: "1:971524844034:web:1d154e1019f1c7cbe0951b",
  measurementId: "G-4XF8K41W81"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
