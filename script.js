document.addEventListener("DOMContentLoaded", function() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var bmiOutput = document.getElementById("bmi");
    var bmiDescription = document.getElementById("desc");
    var form = document.querySelector(".calculator");
   
   

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the values of weight and height
        var weight = parseFloat(weightInput.value);
        var height = parseFloat(heightInput.value) / 100; // Convert height to meters

        // Check if weight and height are valid numbers
        if (isNaN(weight) || isNaN(height) || weight <= 0|| height <= 0) {
            bmiOutput.textContent = "Invalid input";
            bmiDescription.textContent = "Please enter valid weight and height";
            return;
        }

        // Calculate BMI
        var bmi = weight / (height * height);

        // Display BMI
        bmiOutput.textContent = bmi.toFixed(2);

        // Determine BMI category
        if (bmi < 18.5) {
            bmiDescription.textContent = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiDescription.textContent = "Normal-weight";
        } else if (bmi >= 25 && bmi < 30) {
            bmiDescription.textContent = "Overweight";
        } else {
            bmiDescription.textContent = "Obese";
        }
    });
});

// reset button test
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = document.querySelector('.calculator');

    // Get the reset button
    var resetBtn = document.getElementById('resetBtn');

    // Add click event listener to the reset button
    resetBtn.addEventListener('click', function(event) {
        // Prevent the default form reset behavior
        event.preventDefault();

        // Loop through each input element inside the form
        var inputs = form.querySelectorAll('input');
        inputs.forEach(function(input) {
            // Clear the value of each input
            input.value = '';
        });
    });
});

