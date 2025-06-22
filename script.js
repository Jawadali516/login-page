function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-message");

    // Dummy check — replace with real authentication in production
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        return true;
    } else {
        errorMsg.textContent = "Invalid username or password.";
        return false;
    }
}
