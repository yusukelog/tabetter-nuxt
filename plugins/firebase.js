import firebase from 'firebase'

// .env に設定した値を取得してる
const config = {
  apiKey: 'AIzaSyDFZ0qi__u1r4XV-jWJBeKf7xW_mvpewF8',
  authDomain: 'tabetter-bc20e.firebaseapp.com',
  databaseURL: 'https://tabetter-bc20e.firebaseio.com',
  projectId: 'tabetter-bc20e',
  storageBucket: 'tabetter-bc20e.appspot.com',
  messagingSenderId: '375311212777',
  appId: '1:375311212777:web:5d2ff7a7ebff25e6365078'
}

firebase.initializeApp(config)

export default firebase
