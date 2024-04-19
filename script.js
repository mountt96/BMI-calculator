document.getElementById("check").addEventListener("click", function () {
  // Get the values from input fields
  var feet = parseFloat(document.getElementById("feet").value);
  var inches = parseFloat(document.getElementById("inches").value);
  var pounds = parseFloat(document.getElementById("pounds").value);

  // Convert height to inches
  var heightInInches = feet * 12 + inches;

  // Convert weight to kilograms
  var weightInKg = pounds / 2.205;

  // Calculate BMI
  var bmi = (weightInKg * 703) / (heightInInches * heightInInches);

  // Display the result
  alert("Your BMI is: " + bmi.toFixed(2));
});
