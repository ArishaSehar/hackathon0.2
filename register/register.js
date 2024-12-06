// import { getAuth, createUserWithEmailAndPassword, doc, setDoc, db } from "../firebase.js";

// const registerButton = document.getElementById("register");
// const email = document.getElementById("accountEmail");
// const password = document.getElementById("account-Password");
// const name = document.getElementById("userName");
// const address = document.getElementById("Address");
// const phoneNum = document.getElementById("phoneNum");

// const auth = getAuth();

// registerButton.addEventListener("click", async (e) => {
//     e.preventDefault();

//     if (email.value.trim() && password.value.trim() && name.value.trim() && address.value.trim() && phoneNum.value.trim()) {
//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
//             const user = userCredential.user;

//             await setDoc(doc(db, "usersWithId", user.uid), {
//                 name: name.value,
//                 address: address.value,
//                 phoneNo: phoneNum.value,
//                 email: email.value,
//             });

//             Swal.fire({
//                 icon: "success",
//                 title: "Signed up successfully!",
//                 timer: 1000,
//                 showConfirmButton: false
//             });

//             setTimeout(() => {
//                 location.href = "login.html";
//             }, 1000);

//         } catch (error) {
//             console.error(error);
//             let errorMessage = "An error occurred. Please try again.";
//             if (error.code === "auth/weak-password") {
//                 errorMessage = "Password should be at least 6 characters long.";
//             } else if (error.code === "auth/email-already-in-use") {
//                 errorMessage = "Email is already registered. Please sign in.";
//             }
//             Swal.fire({
//                 icon: "error",
//                 title: "Sign-up Error",
//                 text: errorMessage,
//             });
//         }
//     } else {
//         Swal.fire({
//             icon: "error",
//             title: "Missing Fields",
//             text: "Please fill out all fields."
//         });
//     }
// });

import { getAuth, createUserWithEmailAndPassword, doc, setDoc, db } from "../firebase.js";

const registerButton = document.getElementById("register");
const email = document.getElementById("accountEmail");
const password = document.getElementById("account-Password");
const name = document.getElementById("userName");
const address = document.getElementById("Address");
const phoneNum = document.getElementById("phoneNum");

const auth = getAuth();

registerButton.addEventListener("click", async (e) => {
    e.preventDefault(); // Prevents the form from submitting the default way.

    // Ensure all fields are filled in
    if (email.value.trim() && password.value.trim() && name.value.trim() && address.value.trim() && phoneNum.value.trim()) {
        try {
            // Create a new user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
            const user = userCredential.user;

            // Save additional user data (name, address, phone, etc.) to Firestore
            await setDoc(doc(db, "usersWithId", user.uid), {
                name: name.value,
                address: address.value,
                phoneNo: phoneNum.value,
                email: email.value,
            });

            // Display success message
            Swal.fire({
                icon: "success",
                title: "Signed up successfully!",
                timer: 1000,
                showConfirmButton: false
            });

            // Redirect to login page after successful sign-up
            setTimeout(() => {
                location.href = "../login/login.html"; // Ensure the path is correct
            }, 1000);

        } catch (error) {
            console.error(error);
            let errorMessage = "An error occurred. Please try again.";
            // Custom error messages based on error codes
            if (error.code === "auth/weak-password") {
                errorMessage = "Password should be at least 6 characters long.";
            } else if (error.code === "auth/email-already-in-use") {
                errorMessage = "Email is already registered. Please sign in.";
            }
            // Display error message
            Swal.fire({
                icon: "error",
                title: "Sign-up Error",
                text: errorMessage,
            });
        }
    } else {
        // Display message if any fields are missing
        Swal.fire({
            icon: "error",
            title: "Missing Fields",
            text: "Please fill out all fields."
        });
    }
});
