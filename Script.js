function login() {
    // Hardcoded username and password (for simplicity)
    const validUsername = "testuser";
    const validPassword = "testpassword";

    // Get user input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the login details are correct
    if (username === validUsername && password === validPassword) {
        // Show profile page and hide login form
        document.getElementById("login-form").style.display = "none";
        document.getElementById("profile-page").style.display = "block";
        document.getElementById("user-name").innerText = username;
    } else {
        alert("Invalid login details. Please try again.");
    }
}

function logout() {
    // Show login form and hide profile page
    document.getElementById("login-form").style.display = "block";
    document.getElementById("profile-page").style.display = "none";

    // Clear input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
