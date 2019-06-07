function bmiCalculator(weight, height) {
    var bioMedicalIndex = Math.floor(weight/ (height*height));
    return bioMedicalIndex;
}
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);