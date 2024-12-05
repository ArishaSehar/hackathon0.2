import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "../firebase.js";

let btn = document.getElementById("login");
let email = document.getElementById("loginEmail");
let password = document.getElementById("loginPass");

const auth = getAuth();

// Email and Password login
btnn.addEventListener("click", () => {
    if (email.value.trim() && password.value.trim()) {
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "center",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });

                // Redirect after login
                setTimeout(() => {
                    location.href = "dashboard.html";
                }, 1000);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

                // Display error for specific message
                if (errorMessage === "Firebase: Error (auth/invalid-credential).") {
                    Swal.fire({
                        icon: "error",
                        title: "Wrong Credentials",
                        text: "Please double-check your credentials and try again.",
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: errorMessage,
                    });
                }
            });
    } else {
        Swal.fire({
            icon: "error",
            title: "Fill out the fields",
            text: "Please provide both email and password to sign in.",
        });
    }
});

// Google Sign-In
let googleBtn = document.getElementById("google"); // Ensure the Google button has this ID in HTML

googleBtn.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);

            // Optionally, you can store token or user info in localStorage or perform some action here

            Swal.fire({
                icon: "success",
                title: "Signed in with Google",
                text: "Welcome " + user.displayName,
            });

            // Redirect after successful Google login
            setTimeout(() => {
                location.href = "dashboard.html";
            }, 1000);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;

            // Handle error appropriately
            console.log(`Error Code: ${errorCode}, Error Message: ${errorMessage}, Email: ${email}`);

            Swal.fire({
                icon: "error",
                title: "Google Login Failed",
                text: errorMessage,
            });
        });
});
