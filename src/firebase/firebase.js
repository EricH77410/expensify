import * as firebase from 'firebase';
import { setTimeout } from 'timers';
import { log } from 'util';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

 const database = firebase.database();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export  { firebase, googleAuthProvider, database as default };

//  database.ref('expenses').on('child_removed', (snap)=>{
//      console.log(snap.key, snap.val())
//  })

//  database.ref('expenses').on('child_changed', (snp)=>{
//      console.log(snp.key, snp.val())
//  })

//  database.ref('expenses').on('child_added', (snap)=>{
//     console.log(snap.key, snap.val())
//  })

//  const sub = database.ref('expenses')
//     .once('value')
//     .then((snap)=>{
//         const expenses = [];
//         snap.forEach((childSnap)=>{
//             expenses.push({
//                 id: childSnap.key,
//                 ...childSnap.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses').on('value', (snap)=>{
//     const expenses = [];
//     snap.forEach((child)=>{
//         expenses.push({
//             id:child.key,
//             ...child.val()
//         })
//     })
//     console.log(expenses)
// })
// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'Credit maison',
//     amount: 90000,
//     createdAt: 123800
// })

// database.ref('expenses').push({
//     description: 'Food',
//     note: 'Courses',
//     amount: 13700,
//     createdAt: 124890
// })
// database.ref('expenses').push({
//     description: 'Essence',
//     note: 'Yaris',
//     amount: 5200,
//     createdAt: 127900
// })


//  database.ref('notes').push({
//     title: 'Note 2',
//     body:'continue training !'
// })

// const notes = [
//     {
//         id:12,
//         title: 'Note 1',
//         body: 'this is my first note'
//     },{
//         id:13,
//         title: 'Note 3',
//         body: 'this is my third note'
//     }
// ]

// const firebaseNote = {
//     notes: {

//     }
// }

// database.ref('notes').set(notes)
//     .then(()=>{console.log('added')})
//     .catch((e)=>console.log(e))

// const onValueChanged = database.ref().on('value', (snap)=>{
//     const data = snap.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// }, (e)=>{console.log(e)});

// setTimeout(()=>{
//     database.ref('job').update({
//         title: 'Plus rien'
//     })
// }, 3500)



// const onValuechanged = database.ref().on('value', (snap)=>{
//     console.log(snap.val())
// });

// setTimeout(()=>{
//     database.ref('age').set(48);
// }, 3500)

// setTimeout(()=>{
//     database.ref().off('value',onValuechanged);
// }, 7000)

// setTimeout(()=>{
//     database.ref('age').set(30);
// }, 10500)

// database.ref('location/city').once('value')
//   .then((snapshot)=>{
//     const data = snapshot.val();
//     console.log(data)
//   })
//   .catch((e)=>{
//       console.log(e);
//   })

// database.ref().set({
//       name: 'Rico H',
//       age:47,
//       job: {
//           title: 'Manager de stars',
//           company: 'Carestream Dental'
//       },
//       stressLevel: 6,
//       location: {
//           city: 'Fresnes sur marne',
//           country: 'France'
//       }
//   }).then(()=>{
//       console.log('data added')
//   }).catch((err)=>{console.log(err)})


//     database.ref().update({
//         stressLevel: 2,
//         'job/company': 'Google',
//         'location/city': 'Poitier'
        
//     })
//     .then(()=>console.log('Update Ok'))
//     .catch((e)=>console.log(e));

// database.ref('isSingle')
// .remove()
// .then(()=>{console.log('Data removed')})
// .catch((e)=>{console.log(e)})