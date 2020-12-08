import firebase from 'firebase/app'; 
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/database';
import { data } from 'autoprefixer';

const firebaseConfig = {
    apiKey: "AIzaSyBX8JddAcpetxfRcQZrYD1cA-L1GlrUHQ4",
    authDomain: "expensify-701d3.firebaseapp.com",
    databaseURL: "https://expensify-701d3-default-rtdb.firebaseio.com",
    projectId: "expensify-701d3",
    storageBucket: "expensify-701d3.appspot.com",
    messagingSenderId: "525825257059",
    appId: "1:525825257059:web:afed928d0f72a6556c5256",
    measurementId: "G-CKZ54T2TF6"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.analytics();

  const database = firebase.database();

//   database.ref().set({
//       name: 'Siddhant Mittal',
//       age: 19,
//       isSingle: true,
//       location: {
//           city: 'Delhi',
//           country: 'India'
//       }
//   }).then(()=>{
//       console.log('Data is saved');
//   }).catch((e)=>{
//       console.log('This failed.',e);
//   });

// database.ref('isSingle').remove().then(() => {
//     console.log('Success!')
// }).catch((e)=>{
//     console.log('Error:',e);
// });

database.ref('isSingle').set(null);



