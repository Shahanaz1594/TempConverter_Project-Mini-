function convertTemp() {
    const temp = parseFloat(document.getElementById("inputTemp").value);
    const from = document.getElementById("inputUnit").value;
    const to = document.getElementById("outputUnit").value;
  
    if (isNaN(temp)) {
      document.getElementById("result").textContent = "Please enter a valid number.";
      return;
    }
  
    let result;
  
    if (from === to) {
      result = temp;
    } else if (from === "C" && to === "F") {
      result = (temp * 9/5) + 32;
    } else if (from === "C" && to === "K") {
      result = temp + 273.15;
    } else if (from === "F" && to === "C") {
      result = (temp - 32) * 5/9;
    } else if (from === "F" && to === "K") {
      result = (temp - 32) * 5/9 + 273.15;
    } else if (from === "K" && to === "C") {
      result = temp - 273.15;
    } else if (from === "K" && to === "F") {
      result = (temp - 273.15) * 9/5 + 32;
    }
  
    const unitSymbols = { C: "°C", F: "°F", K: "K" };
  
    document.getElementById("result").textContent = 
      `${temp} ${unitSymbols[from]} converts to ${result.toFixed(2)} ${unitSymbols[to]}`;
  }
  