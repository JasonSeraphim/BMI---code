function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var age = document.getElementById('age').value;
  
    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  
    var result = "Your BMI is " + bmi;
  
    if (age < 18) {
      result += "<br>Age category: Under 18";
    } else if (age >= 18 && age <= 24) {
      result += "<br>Age category: 18-24";
    } else if (age >= 25 && age <= 34) {
      result += "<br>Age category: 25-34";
    } else if (age >= 35 && age <= 44) {
      result += "<br>Age category: 35-44";
    } else if (age >= 45 && age <= 54) {
      result += "<br>Age category: 45-54";
    } else if (age >= 55 && age <= 64) {
      result += "<br>Age category: 55-64";
    } else {
      result += "<br>Age category: 65 and over";
    }
  
    document.getElementById('result').innerHTML = result;
  }
  