document.addEventListener("DOMContentLoaded", function () {
    console.log("CyberShield Website Loaded!");

    let checkButton = document.getElementById("checkStrengthBtn");

    if (checkButton) {
        checkButton.addEventListener("click", function () {
            checkPasswordStrength();
        });
    } else {
        console.error("Button not found!");
    }
});

function checkPasswordStrength() {
    let passwordInput = document.getElementById("passwordInput");
    let strengthDisplay = document.getElementById("passwordStrength");

    if (!passwordInput) {
        console.error("Password input field not found!");
        return;
    }

    let password = passwordInput.value;
    if (!password) {
        alert("Please enter a password!");
        return;
    }

    let strength = "Weak";
    let color = "red";

    if (password.length > 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[@$!%*?&]/.test(password)) {
        strength = "Strong";
        color = "green";
    } else if (password.length > 5 && (/[A-Z]/.test(password) || /\d/.test(password))) {
        strength = "Moderate";
        color = "orange";
    }

    strengthDisplay.innerText = "Password Strength: " + strength;
    strengthDisplay.style.color = color;

    alert("Password Strength: " + strength);
}
