// backend.js

function processString() {
  // Get the input string from the user
  var inputString = document.getElementById("inputString").value;

  // Send the input string to the backend using fetch
  fetch('/process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ string: inputString })
  })
  .then(response => response.json())
  .then(data => {
    // Display the result received from the backend
    document.getElementById("result").textContent = "Processed String: " + data.result;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
