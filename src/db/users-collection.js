"use strict";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const usersRef = collection(db, "users")

const createuser = async (userData) => {
    try{
        await addDoc(usersRef, userData);
    }catch(error){
        console.error(error);
    }
}

const readUser = async (userEmail) => {
    try {
        const userSnapshot = await getDocs(query(usersRef, where("email", "==", userEmail)));

        if (userSnapshot.empty) {
            return { success: false, message: "User not found" };
        }

        const userData = userSnapshot.docs.map((doc) => doc.data());
        return userData[0] ;
    } catch (error) {
        return error;
    }
};

const editUser = async (userEmail, userData) => {
    try {
        const userSnapshot = await getDocs(query(usersRef, where("email", "==", userEmail)));

        if (userSnapshot.empty) {
            return { success: false, message: "User not found" };
        }

        const userDoc = userSnapshot.docs[0];
        await userDoc.ref.update(userData);

        return {success: true, message: "User update"};
    
    } catch (error) {
        return error;
    }
};

export { createuser, readUser, editUser };