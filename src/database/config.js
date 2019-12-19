import * as firebase from "firebase";

import "firebase/auth";


var config = {
  apiKey: "AIzaSyC4ne4HUbSkNVdtheIcYhOBuJxrgeKme7k",
  authDomain: "jeffseniorproject-28d79.firebaseapp.com",
  databaseURL: "https://jeffseniorproject-28d79.firebaseio.com",
  projectId: "jeffseniorproject-28d79",
  storageBucket: "jeffseniorproject-28d79.appspot.com",
  messagingSenderId: "24593699641",
  appId: "1:24593699641:web:f05b6e8cac64ad146d8ee8"
};

firebase.initializeApp(config)

const database = firebase.database()

export {database}