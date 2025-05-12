function performCalculation() {

  let num1 = parseFloat(prompt("Enter the first number:"));
  if (isNaN(num1)) {
    alert("Invalid input for the first number. Please enter a valid number.");
    return;
  }

  
  let operator = prompt("Enter the operator (+, -, *, /):");

  
  let num2 = parseFloat(prompt("Enter the second number:"));
  if (isNaN(num2)) {
    alert("Invalid input for the second number. Please enter a valid number.");
    return;
  }

  
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Error: Cannot divide by zero.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Invalid operator. Please enter +, -, *, or /.");
      return;
  }

  
  alert("Result: " + result);
}

performCalculation();
