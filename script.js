function playCowSound() {
    const cowSound = document.getElementById('cow-sound');
    cowSound.play();
}

function goToStep2() {
    playCowSound();
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
}

function goToStep3() {
    playCowSound();
    const productDropdown = document.getElementById('product-dropdown');
    const selectedProduct = productDropdown.options[productDropdown.selectedIndex].text;
    document.getElementById('selected-product').innerText = selectedProduct;
    const price = selectedProduct.match(/\$[0-9.]+/)[0];
    document.getElementById('total-price').innerText = price;

    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

function verifyAnswer() {
    playCowSound();
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
    playCowSound();
    document.getElementById('step4').style.display = 'none';
    document.getElementById('step5').style.display = 'block';
});

function verifyCow(selectedCow) {
    const correctCow = 'Cow 1';
    const feedback = document.getElementById('feedback');
    const tryAgainButton = document.getElementById('try-again-button');

    if (selectedCow === correctCow) {
        feedback.innerText = 'Correct! This is the real cow.';
        feedback.style.display = 'block';
        document.querySelector(`[alt="${selectedCow}"]`).classList.add('correct');
        setTimeout(() => {
            document.getElementById('step5').style.display = 'none';
            document.getElementById('step6').style.display = 'block';
        }, 2000);
    } else {
        feedback.innerText = 'Incorrect. Please try again.';
        feedback.style.display = 'block';
        document.querySelector(`[alt="${selectedCow}"]`).classList.add('incorrect');
        document.querySelector(`[alt="${correctCow}"]`).classList.add('correct');
        tryAgainButton.style.display = 'block';
    }
}

function tryAgain() {
    const feedback = document.getElementById('feedback');
    const tryAgainButton = document.getElementById('try-again-button');
    const cowImages = document.querySelectorAll('.cow-image');

    feedback.style.display = 'none';
    tryAgainButton.style.display = 'none';

    cowImages.forEach(image => {
        image.classList.remove('correct', 'incorrect');
    });
}
