document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        let isValid = true;

        // nameValidation
        if (!nameInput.value.trim()) {
            showError(nameInput, "name is required.");
            isValid = false;
        } else if (nameInput.value.trim().length < 3) {
            showError(nameInput, "Name must be minimum 3 characters.");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // mailValidation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            showError(emailInput, "Email is required.");
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, "Please enter valid email address.");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // subjectValidation
        if (!subjectInput.value.trim()) {
            showError(subjectInput, "Subject is required.");
            isValid = false;
        } else if (subjectInput.value.trim().length < 10) {
            showError(subjectInput, "Subject must be minimum 5 characters.");
            isValid = false;
        } else {
            clearError(subjectInput);
        }

        // messageValidation
        if (!messageInput.value.trim()) {
            showError(messageInput, "Message is required.");
            isValid = false;
        } else if (messageInput.value.trim().length < 20) {
            showError(messageInput, "Message must be at minimum characters.");
            isValid = false;
        } else {
            clearError(messageInput);
        }

        // if invalid prevent submission
        if (!isValid) {
            e.preventDefault();
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector(".error-message");

        if (!errorElement) {
            const error = document.createElement("div");
            error.classList.add("error-message");
            error.style.color = "red";
            error.style.marginTop = "5px";
            error.textContent = message;
            formGroup.appendChild(error);
        }
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector(".error-message");
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
    }
});
