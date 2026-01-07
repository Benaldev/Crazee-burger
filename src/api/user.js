import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
  //const docRef = doc(CHEMIN);
  const docRef = doc(db, "users", idUser);

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const userReveived = docSnapshot.data();
    return userReveived;
  }
};

export const createUser = (userId) => {
  //CACHETTE
  const docRef = doc(db, "users", userId);

  //NOURRITURE
  const newDoc = {
    username: userId,
    menu: fakeMenu.LARGE,
  };

  //setDoc(CACHETTE, NOURRITURE);
  setDoc(docRef, newDoc);
};
