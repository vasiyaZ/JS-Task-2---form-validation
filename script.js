document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let valid = true;

    // Validate Name
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById("nameError").textContent = "Name must only contain letters.";
        valid = false;
    }

    // Validate Age
    if (age === "") {
        document.getElementById("ageError").textContent = "Age is required.";
        valid = false;
    } else if (isNaN(age) || age < 18) {
        document.getElementById("ageError").textContent = "Age must be 18 or older.";
        valid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        valid = false;
    }

    // Validate Password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        valid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
        valid = false;
    }

    // Final validation
    if (valid) {
        alert("Form submitted successfully!");
        // Here you could add actual form submission logic
    } else {
        alert("Some fields contain invalid input. Please correct the errors and try again.");
    }
});
