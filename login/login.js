import { getAuth, signInWithEmailAndPassword } from "../firebase.js";

const loginButton = document.querySelector("button[type='submit']");
const email = document.getElementById("loginEmail");
const password = document.getElementById("loginPass");
const auth = getAuth();

loginButton.addEventListener("click", async (e) => {
    e.preventDefault(); // Prevents the form from submitting the default way.

    // Ensure both email and password fields are filled
    if (email.value.trim() && password.value.trim()) {
        try {
            // Try signing in the user with Firebase Authentication
            await signInWithEmailAndPassword(auth, email.value, password.value);
            
            // Show success message if sign-in is successful
            Swal.fire({
                icon: "success",
                title: "Signed in successfully!",
                timer: 1000,
                showConfirmButton: false
            });

            // Redirect to the posts page after 1 second
            setTimeout(() => {
                window.location.href = "../posts/post.html"; // Ensure the correct path to posts page
            }, 1000);
        } catch (error) {
            console.error(error);
            let errorMessage = "Invalid email or password.";
            if (error.code === "auth/user-not-found") {
                errorMessage = "No user found with this email.";
            } else if (error.code === "auth/wrong-password") {
                errorMessage = "Wrong password.";
            }
            // Show error message if sign-in fails
            Swal.fire({
                icon: "error",
                title: "Sign-In Error",
                text: errorMessage,
            });
        }
    } else {
        // Show message if any field is missing
        Swal.fire({
            icon: "error",
            title: "Missing Fields",
            text: "Please enter your email and password."
        });
    }
});
