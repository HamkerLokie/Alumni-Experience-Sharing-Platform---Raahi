import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA_ZwQRqWpAy8lQ68d49ihiKcnYEON3SW8",
  authDomain: "raahi-esp.firebaseapp.com",
  projectId: "raahi-esp",
  storageBucket: "raahi-esp.appspot.com",
  messagingSenderId: "889909791436",
  appId: "1:889909791436:web:24069ffa3cf66b492ed069",
  measurementId: "G-QPN4PM6Y8T"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);