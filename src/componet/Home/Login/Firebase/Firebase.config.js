const firebaseConfig = {
  // apiKey: "AIzaSyD3fmLpq-oN4HFL1Yg52a8pjVoND_VBpc8",
  // authDomain: "sohel-academic-care.firebaseapp.com",
  // projectId: "sohel-academic-care",
  // storageBucket: "sohel-academic-care.appspot.com",
  // messagingSenderId: "843965815416",
  // appId: "1:843965815416:web:3b4c6e0d7fb3eb63692b8d",

  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID1,
};
export default firebaseConfig;
