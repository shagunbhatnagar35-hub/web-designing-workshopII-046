function checkNumber() {
    const number = document.getElementById("numberInput").value;
    const result = document.getElementById("result");

    if (number === "") {
        result.textContent = "Please enter a number.";
        return;
    }

    if (number % 2 === 0) {
        result.textContent = `${number} is an Even number.`;
    } else {
        result.textContent = `${number} is an Odd number.`;
    }
}