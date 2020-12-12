import firebase from 'firebase/app'; 
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

  firebase.analytics();

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  export { firebase, googleAuthProvider, database as default };

//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.key,snapshot.val());
//   });

//   database.ref('expenses').on('child_changed',(snapshot) => {
//       console.log(snapshot.key,snapshot.val());
//   });

//   database.ref('expenses').on('child_added',(snapshot) => {
//     console.log(snapshot.key,snapshot.val());
// });

//   database.ref('expenses')
//   .on('value',(snapshot)=>{
//       const expenses = [];
//       snapshot.forEach((childsnapshot)=>{
//           expenses.push({
//               id:childsnapshot.key,
//               ...childsnapshot.val()
//           });
//       });
//       console.log(expenses);
//   }, (e)=>{
//       console.log('Error extracting data: ',e);
//   });

//   database.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//       const expenses = [];
//       snapshot.forEach((childSnapshot)=>{
//           expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//           });
//       });
//       console.log(expenses);
//   });

//   database.ref('expenses').push({
//       description: 'Rent',
//       note: '',
//       amount: 19000,
//       created: 39482934
//   });

  
//   database.ref('notes/-MO2W0hEFpLjlDkC7hWG').update({
//       body: 'Buy food'
//   });

//   database.ref('notes').push({
//       title:'To do',
//       body: 'Go for a run'
//   });

//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   });

//   database.ref().once('value').then((snapshot)=>{
//       const val = snapshot.val();
//       console.log(val);
//   }).catch((e)=>{
//       console.log('Error fetching data',e);
//   });

// const onValueChange = database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// },(e)=>{
//     console.log('Error with data fetching', e);
// });

// setTimeout(()=>{
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(()=>{
//     database.ref().off('value',onValueChange);
// }, 7000);

// setTimeout(()=>{
//     database.ref('age').set(30);
// }, 10500); 

//   database.ref().set({
//       name: 'Siddhant Mittal',
//       age: 19,
//       stressLevel: 6,
//       job: {
//           title:'Software Developer',
//           company: 'Google'
//       },
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

// database.ref('isSingle').set(null);

// database.ref().update({
//     name: 'Mike',
//     age: 29
// });





