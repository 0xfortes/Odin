const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorSpan = document.getElementById("span-error").classList;

const updateValidity = (input, isValid) => {
    const validationClass = isValid ? "Valid" : "Not Valid";
    input.classList.remove("Valid", "Not Valid");
    input.classList.add(validationClass);
};

const checkPassword = () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password.length < 8) {
        errorSpan.remove("error-password");
        errorSpan.add("pattern-password");
        updateValidity(passwordInput, false);
        updateValidity(confirmPasswordInput, false);
    } else {
        errorSpan.remove("error-password", "pattern-password");

        if (password === confirmPassword) {
            updateValidity(passwordInput, true);
            updateValidity(confirmPasswordInput, true);
        } else {
            errorSpan.remove("pattern-password");
            errorSpan.add("error-password");
            updateValidity(passwordInput, false);
            updateValidity(confirmPasswordInput, false);
        }
    }
};

// Example of how to use the checkPassword function
passwordInput.addEventListener("input", checkPassword);
confirmPasswordInput.addEventListener("input", checkPassword);
