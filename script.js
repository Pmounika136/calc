document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttonsContainer = document.querySelector('.buttons');

    buttonsContainer.addEventListener('click', handleButtonClick);

    function handleButtonClick(event) {
        const clickedButton = event.target;
        const buttonText = clickedButton.textContent;

        if (buttonText === '=') {
            calculateResult();
        } else if (buttonText === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(buttonText);
        }
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
});
