function calculate() {
  // Get the input values from the user
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  // Perform the calculation (you can modify this as per your requirements)
  var sum = num1 + num2;

  // Display the result to the user
  document.getElementById("result").textContent = "Result: " + sum;
}
