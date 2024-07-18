function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Mengubah tinggi badan ke meter

    if (isNaN(weight) || isNaN(height)) {
        alert("Mohon masukkan angka yang valid");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);

    let bmiCategory = '';
    let bmiMessage = '';
    if (bmi < 18.5) {
        bmiCategory = 'Kekurangan Berat Badan';
        bmiMessage = 'Anda memiliki berat badan kurang';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = 'Normal (ideal)';
        bmiMessage = 'Anda memiliki berat badan normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = 'Kelebihan Berat Badan';
        bmiMessage = 'Anda memiliki berat badan berlebih';
    } else {
        bmiCategory = 'Kegemukan (Obesitas)';
        bmiMessage = 'Anda memiliki berat badan sangat berlebih';
    }

    document.getElementById('bmi-value').innerText = bmi;
    document.getElementById('result').querySelector('h3').innerText = bmiCategory;
    document.getElementById('result').querySelector('p:nth-of-type(2)').innerText = bmiMessage;
}
function resetResult() {
    document.getElementById('bmi-value').innerText = '';
    document.getElementById('result').querySelector('h3').innerText = '';
    document.getElementById('result').querySelector('p:nth-of-type(2)').innerText = '';
  }
  
  // Get the reset button element
  const resetButton = document.querySelector('button[type="reset"]');
  
  // Add an event listener to the reset button
  resetButton.addEventListener('click', resetResult);
  