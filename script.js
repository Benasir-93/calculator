
// Get the input element
var input = document.querySelector("#display");

// Get all the buttons in the calculator
var buttons = document.querySelectorAll("button");

// Add event listeners to each button
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Check which button was clicked based on its ID
        if (btn.id === "equals") {
            // If the equals button is clicked, evaluate the expression and display the result
            try {
                input.value = eval(input.value);
            } catch (error) {
                // If an error occurs during evaluation, display an error message
                input.value = "Error";
            }        } else if (btn.id === "cl") {
            // If the clear button is clicked, clear the input field
            input.value = "";
        } else {
            // For all other buttons, append their ID (button value) to the input field
            input.value += btn.id;
        }
    });
});
