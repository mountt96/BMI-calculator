document.getElementById("check").addEventListener("click", calculations);

function calculations() {
  // Get values
  var feet = parseFloat(document.getElementById("feet").value);
  var inches = parseFloat(document.getElementById("inches").value);
  var pounds = parseFloat(document.getElementById("pounds").value);
  var gender = document.querySelector('input[name="gender"]:checked');

  // Check input fields
  if (isNaN(feet) || isNaN(inches) || isNaN(pounds) || !gender) {
    alert("Please ensure all fields are filled correctly.");
    return;
  }
  // Convert height to inches
  var heightInInches = feet * 12 + inches;

  // Convert weight to kilograms
  var weightInKg = pounds / 2.205;

  // Convert height to meters
  var heightInMeters = heightInInches / 39.37;

  // Calculate BMI
  var bmi = weightInKg / (heightInMeters * heightInMeters);

  // Output
  var resultElement = document.getElementById("result");
  resultElement.textContent = "Your BMI is: " + bmi.toFixed(2);

  // Feedback
  if (bmi < 18.5) {
    resultElement.textContent += " - Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    resultElement.textContent += " - Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    resultElement.textContent += " - Overweight";
  } else {
    resultElement.textContent += " - Obese";
  }
}
