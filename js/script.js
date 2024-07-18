function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);

    let bmiCategory = '';
    let bmiMessage = '';
    if (bmi < 18.5) {
        bmiCategory = 'Kekurangan Berat Badan';
        bmiMessage = 'Anda memiliki berat badan kurang';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = 'Normal';
        bmiMessage = 'Anda memiliki berat badan normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = 'Berat Badan Lebih';
        bmiMessage = 'Anda memiliki berat badan berlebih';
    } else {
        bmiCategory = 'Obesitas';
        bmiMessage = 'Anda memiliki berat badan sangat berlebih';
    }

    document.getElementById('bmi-value').innerText = bmi;
    document.getElementById('result').querySelector('h3').innerText = bmiCategory;
    document.getElementById('result').querySelector('p:nth-of-type(2)').innerText = bmiMessage;
}
