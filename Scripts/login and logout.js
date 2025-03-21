// login Function//

function login() {
    // Predefined username and password for demonstration (replace with real logic)
    const validUsername = "admin@gmail.com";
    const validPassword = "123";

    // Get username and password input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        // Redirect to a new page or perform further actions
        window.location.href = 'admin.html'; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
}