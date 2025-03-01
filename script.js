// Function to validate the registration form
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    const mobileNumber = document.getElementById('mobileNumber').value;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event.preventDefault();
        return;
    }

    // Check if terms and conditions are agreed upon
    if (!terms) {
        alert("You must agree to the terms and conditions.");
        event.preventDefault();
        return;
    }

    // Check if mobile number is valid (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        event.preventDefault();
        return;
    }

    // Further validation can go here if needed

    // If everything is valid, form will submit normally
    alert("Form submitted successfully!");
});
