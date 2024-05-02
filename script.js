document.addEventListener("DOMContentLoaded", function() {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const bmiOutput = document.getElementById("bmi");
    const bmiDescription = document.getElementById("desc");
    const form = document.querySelector(".calculator");
   
   

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the values of weight and height
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Convert height to meters

        // Check if weight and height are valid numbers
        if (isNaN(weight) || isNaN(height) || weight <= 0|| height <= 0) {
            bmiOutput.textContent = "Invalid input";
            bmiDescription.textContent = "Please enter valid weight and height";
            return;
        }

        // Calculate BMI
        const bmi = weight / (height * height);

        // Display BMI
        bmiOutput.textContent = bmi.toFixed(2);
        bmiOutput.className = desc;
        bmiDescription.innerHTML = '';


        // Determine BMI category
        if (bmi < 18.5) {
            bmiDescription.textContent = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiDescription.textContent = "Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
            bmiDescription.textContent = "Overweight";
        } else {
            bmiDescription.textContent = "Obese";
        }
    });
});









