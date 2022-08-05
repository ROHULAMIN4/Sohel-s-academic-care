import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initailizeFirebase = () => {
  const app = initializeApp(firebaseConfig);
};
export default initailizeFirebase;
