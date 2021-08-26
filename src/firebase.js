import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
  apiKey: "AIzaSyCRtWIQFbQ8HdIYNB-OYous_5HTgb_NORc",
  authDomain: "fir-chat-2a0bd.firebaseapp.com",
  projectId: "fir-chat-2a0bd",
  storageBucket: "fir-chat-2a0bd.appspot.com",
  messagingSenderId: "323645240037",
  appId: "1:323645240037:web:c05f4f3ff0d529b6e4da0c",
}).auth();
