function registerUser(event) {
    event.preventDefault();

    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var gender = document.querySelector('input[name="gender"]').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password 
    // if (password !== confirmPassword) {
    //     alert('Password and Confirm Password do not match.');
    //     return;
    // }

    // Validate each field
    var isValid = true;

    if (username.length < 3) {
        displayError('usernameError', 'Username must be at least 3 characters');
        isValid = false;
    }

    if (!isValidEmail(email)) {
        displayError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
        displayError('phoneNumberError', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }

    if (!gender) {
        displayError('genderError', 'Please select a gender');
        isValid = false;
    }

    if (password.length < 6) {
        displayError('passwordError', 'Password must be at least 6 characters');
        isValid = false;
    }

    if (confirmPassword.length < 6) {
        displayError('passwordError', 'Password must be at least 6 characters');
        isValid = false;
    }

    if (password !== confirmPassword) {
        displayError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    // Create user object
    var user = {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        gender: gender,
        password: password
    };

    // Retrieve existing users from local storage
    var users = JSON.parse(localStorage.getItem('registeredUsers')) || [];


    if (isValid) {
        // Add new user to the array
        users.push(user);

        // Store the updated array in local storage
        localStorage.setItem('registeredUsers', JSON.stringify(users));

        // Reset the form
        document.getElementById('registrationForm').reset();

        alert('Registration successful!');

        updateRegisteredUserCount();

        console.log(users);


        users.forEach(function(user){
            console.log(user.username);
        })

    }




}

function updateRegisteredUserCount() {
    var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    document.getElementById('userCount').textContent = registeredUsers.length;
}

window.onload = updateRegisteredUserCount();



function displayError(elementId, message) {
    console.log("error");
    document.getElementById(elementId).textContent = message;
}


function isValidEmail(email) {
    var emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidation.test(email);
}



function data(){

    document.getElementById('userfeed').innerHTML = "how are you";
    
}

window.onload = data();



