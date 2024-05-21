"use strict";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const usersRef = collection(db, "users")

const createuser = async (userData) => {
    try {
        // Suponiendo que el userData tiene un campo 'email' para identificar al usuario de manera única
        const userQuery = query(usersRef, where("email", "==", userData.email));
        const querySnapshot = await getDocs(userQuery);

        if (querySnapshot.empty) {
            // Si no se encontró ningún documento, crea un nuevo usuario
            await addDoc(usersRef, userData);
            console.log("User created successfully");
        } else {
            // Si se encontró al menos un documento, el usuario ya existe
            console.log("User already exists");
        }
    } catch (error) {
        console.error("Error creating user:", error);
    }
};


const readUser = async (userEmail) => {
    try {
        const userSnapshot = await getDocs(query(usersRef, where("email", "==", userEmail)));

        if (userSnapshot.empty) {
            return { success: false, message: "User not found" };
        }

        const userData = userSnapshot.docs.map((doc) => doc.data());
        return userData[0];
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
        console.log("Progreso Guardado");
        return {success: true, message: "User update"};
    
    } catch (error) {
        return error;
    }
};

export { createuser, readUser, editUser };