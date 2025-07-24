// src/firebase/authService.js
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";
  import { auth } from "./firebase";
  
  // Email/password registration
  export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  // Email/password login
  export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  // Google sign-in
  export function googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  