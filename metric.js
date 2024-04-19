document.getElementById("check").addEventListener("click", function () {
  // Get the values from input fields
  var cmInput = parseFloat(document.getElementById("cm").value.trim());
  var kgInput = parseFloat(document.getElementById("Kg").value.trim());
  var gender = document.querySelector('input[name="gender"]:checked');

  // Validate input fields
  if (isNaN(cmInput) || isNaN(kgInput) || !gender) {
    alert("Please ensure all fields are filled correctly.");
    return; // Exit the function
  }

  // Calculate BMI
  var heightInMeters = cmInput / 100;
  var bmi = kgInput / (heightInMeters * heightInMeters);

  // Display the result on the webpage
  var resultElement = document.getElementById("result");
  resultElement.textContent = "Your BMI is: " + bmi.toFixed(2);

  // Additional feedback based on BMI value
  if (bmi < 18.5) {
    resultElement.textContent += " - Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    resultElement.textContent += " - Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    resultElement.textContent += " - Overweight";
  } else {
    resultElement.textContent += " - Obese";
  }
});
