function goToStep2() {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
}

function goToStep3() {
    const productDropdown = document.getElementById('product-dropdown');
    const selectedProduct = productDropdown.options[productDropdown.selectedIndex].text;
    document.getElementById('selected-product').innerText = selectedProduct;
    const price = selectedProduct.match(/\$[0-9.]+/)[0];
    document.getElementById('total-price').innerText = price;

    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

function verifyAnswer() {
    const answer = document.getElementById('iq-answer').value;
    if (answer === '20' || answer === '20 m/s') { // The final velocity is 20 m/s
        document.getElementById('step3').style.display = 'none';
        document.getElementById('step4').style.display = 'block';
    } else {
        alert('Incorrect answer. Please try again.');
    }
}

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('step4').style.display = 'none';
    document.getElementById('step5').style.display = 'block';
});

function verifyCow(selectedCow) {
    if (selectedCow === 'Cow 1') {
        document.getElementById('step5').style.display = 'none';
        document.getElementById('step6').style.display = 'block';
    } else {
        alert('Incorrect. Please try again.');
    }
}
