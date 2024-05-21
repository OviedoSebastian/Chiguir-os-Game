"use strict";

import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const usersRef = collection(db, "checkpoint2")

const createcheckpoint = async (userData) => {
    try {
        // Suponiendo que el userData tiene un campo 'email' para identificar al usuario de manera única
        const userQuery = query(usersRef, where("email", "==", userData.email));
        const querySnapshot = await getDocs(userQuery);

        if (querySnapshot.empty) {
            // Si no se encontró ningún documento, crea un nuevo usuario
            await addDoc(usersRef, userData);
            console.log("checkpoint created successfully");
        } else {
            // Si se encontró al menos un documento, el usuario ya existe
            console.log("checkpoint up successfully");
            editCheckpoint(userData.email, userData)
        }
    } catch (error) {
        console.error("Error creating checkpoint:", error);
    }
};


const readCheckpoint = async (userEmail) => {
    try {
        const userSnapshot = await getDocs(query(usersRef, where("email", "==", userEmail)));

        if (userSnapshot.empty) {
            return { success: false, message: "User not found" };
        }

        const userData = userSnapshot.docs.map((doc) => doc.data());
        return userData[0];
    } catch (error) {
        return console.error("Error reading checkpoint:", error);
    }
};

const editCheckpoint = async (userEmail, userData) => {
    try {
        const userSnapshot = await getDocs(
            query(usersRef, where("email", "==", userEmail))
        );

        if (userSnapshot.empty) {
            return { success: false, message: "User not found" };
        }
        
        const userDoc = userSnapshot.docs[0];
        await updateDoc(userDoc.ref, userData);
        console.log("Progreso Guardado con Exito");
        return {success: true, message: "User update"};
    
    } catch (error) {
        return error;
    }
};

export { createcheckpoint, readCheckpoint, editCheckpoint };
