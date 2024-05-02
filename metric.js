document.getElementById("check").addEventListener("click", calculations);
document.getElementById("").addEventListener("click", func);
function calculations() {
  // Get the values from input fields
  var cmInput = parseFloat(document.getElementById("cm").value.trim());
  var kgInput = parseFloat(document.getElementById("Kg").value.trim());
  var gender = document.querySelector('input[name="gender"]:checked');

  // check
  if (isNaN(cmInput) || isNaN(kgInput) || !gender) {
    alert("Please ensure all fields are filled correctly.");
    return;
  }

  // Calculate
  var heightInMeters = cmInput / 100;
  var bmi = kgInput / (heightInMeters * heightInMeters);

  // output
  var resultElement = document.getElementById("result");
  resultElement.textContent = "Your BMI is: " + bmi.toFixed(1);

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
