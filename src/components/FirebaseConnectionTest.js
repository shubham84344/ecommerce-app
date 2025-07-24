import React, { useEffect } from 'react';
import { db } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

function FirebaseConnectionTest() {
  useEffect(() => {
    async function testFirestore() {
      try {
        await setDoc(doc(db, "testCollection", "testDoc"), { connected: true, timestamp: Date.now() });
        alert("🎉 Firebase (Firestore) is connected and working!");
      } catch (error) {
        alert("❌ Firebase Firestore error: " + error.message);
      }
    }
    testFirestore();
  }, []);

  return <div>Testing Firebase connection...</div>;
}

export default FirebaseConnectionTest;
