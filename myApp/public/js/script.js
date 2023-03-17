let equalsButton = document.getElementById('equals')
equalsButton.addEventListener('click', fetchResult)
function fetchResult() {
    let num1 = document.getElementById('number1').value
    let num2 = document.getElementById('number2').value
    let operator = document.getElementById('operand').value
    fetch(`/calculator/${operator}?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = data.result;
        })
}
fetch(`/calculator/subtract?num1=${num1}&num2=${num2}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML = data.result;
    })
