let addition = function(numbers){
    let sumValue = numbers.reduce(function(total,number){
        return total + number;
    }, 0);
    return sumValue;
}

let subtraction = function(numbers){
    let minusValue = numbers.reduce(function(total,number){
        return total - number;
    }, 0);
    return minusValue;
}

let multiplication = function(numbers){
    let timesValue = numbers.reduce(function(total,number){
        return total * number;
    }, 1);
    return timesValue;
}

let devision = function(numbers){
    let devideValue = numbers.reduce(function(total,number){
        if(number === 0){
            return "GTFO";
        } else{
        return total / number;
        }
    }, 1);
    return devideValue;
}

let operate = function(operator,x){
    if(operator === '+'){
        return addition(x);
    } else if(operator === '-'){
        return subtraction(x);
    } else if(operator === '*'){
        return multiplication(x);
    } else {
        return devision(x);
    }
}

let calcDisplay = document.querySelector('.calc-screen');

let enteredValue;

let calcNumButton = document.querySelectorAll('.calc-number');

let numPressed = 0;
for(i = 0;i < calcNumButton.length;i++){
    calcNumButton[i].addEventListener('click', function(event){
        numPressed = event.target.textContent;
        calcDisplay.textContent = calcDisplay.textContent + `${numPressed}`;
        enteredValue = calcDisplay.textContent;
    })
}
