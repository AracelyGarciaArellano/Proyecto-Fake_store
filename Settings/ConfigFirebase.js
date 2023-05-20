import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAfPSHs3FGPIjnSxKPb74FNdsBz_raaj98',
  authDomain: 'fakestore2-56458.firebaseapp.com',
  projectId: 'fakestore2-56458',
  storageBucket: 'fakestore2-56458.appspot.com',
  messagingSenderId: '983958122966',
  appId: '1:983958122966:web:6228211c4874dd979cf477'
};

const fb = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const auth = fb.auth();

export default auth;