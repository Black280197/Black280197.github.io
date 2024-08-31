import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCz7Ev2arYz2MknkAG1LHNyx3PM_1kh1ZE",
    authDomain: "appformom-d49e8.firebaseapp.com",
    projectId: "appformom-d49e8",
    storageBucket: "appformom-d49e8.appspot.com",
    messagingSenderId: "386765130646",
    appId: "1:386765130646:web:66a9a6093a8013c90debb7"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Thêm dữ liệu vào Firestore
async function addData() {
  try {
    await addDoc(collection(db, 'messages'), {
      text: 'Hello from Node.js!',
      timestamp: new Date()
    });
    console.log('Document successfully written!');
  } catch (error) {
    console.error('Error writing document: ', error);
  }
}

// Đọc dữ liệu từ Firestore
async function getData() {
  try {
    const querySnapshot = await getDocs(collection(db, 'messages'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().text}`);
    });
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
}

// Gọi các hàm
addData();
getData();
