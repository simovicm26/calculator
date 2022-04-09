let calcDisplay = document.querySelector('.calc-screen');

let enteredValue;

let calcNumButton = document.querySelectorAll('.calc-number');

let numPressed = 0;

let operatorValue;

let secondOperatorValue;

let checkVar = 0;

let valuesToOperateOn = [];

let valuesToOperateOnFirst = [];

let plusOperator = document.querySelector('.plus');

let minusOperator = document.querySelector('.minus');

let multiplyOperator = document.querySelector('.times');

let devideOperator = document.querySelector('.devide');

let equalOperator = document.querySelector('.equal');

let clearButton = document.querySelector('.calc-delete');


let addition = function(numbers){
    let sumValue = numbers.reduce(function(total,number){
        return total + Number(number);
    }, 0);
    calcDisplay.textContent = `${sumValue}`;
    valuesToOperateOn = [sumValue];
}


let subtraction = function(numbers){
    let minusValue = numbers[0] - numbers[1];
    calcDisplay.textContent = `${minusValue}`;
    valuesToOperateOn = [minusValue];
}

let multiplication = function(numbers){
    let timesValue = numbers.reduce(function(total,number){
        return total * number;
    }, 1);
    calcDisplay.textContent = `${timesValue}`;
    valuesToOperateOn.splice(1,1,timesValue);
    valuesToOperateOnFirst = [timesValue];
    console.log(valuesToOperateOn)
    console.log(valuesToOperateOnFirst);
}

let SecondCheckVar = 0;
let devision = function(numbers){
    let devideValue;
    devideValue = numbers[0]/numbers[1];
    devideValue = devideValue.toFixed(4);
    if(devideValue ==='Infinity'){
        calcDisplay.textContent = 'Fuck you';
    } else {
    calcDisplay.textContent = `${devideValue}`;
    valuesToOperateOn.splice(1,1,devideValue);
    valuesToOperateOnFirst = [devideValue];
    }
}

let operate = function(operator,x){
    if(operator === '+'){
        return addition(x);
    } else if(operator === '-'){
        return subtraction(x);
    } else if(operator === '*'){
        return multiplication(x);
    } else if(operator === '/'){
        return devision(x);
    } else{
       if(event.target.textContent === '*' || event.target.textContent === '/'){
           secondOperatorValue = event.target.textContent;
           console.log(secondOperatorValue)
       } else{
        operatorValue=event.target.textContent;
        
       }
    }
}

checkVar = 1;

for(i = 0;i < calcNumButton.length;i++){
    calcNumButton[i].addEventListener('click', function(event){
        SecondCheckVar = 0;
        if(checkVar === 1){
            calcDisplay.textContent ='';
        }
        checkVar = 0;
        numPressed = event.target.textContent;
        calcDisplay.textContent = calcDisplay.textContent + `${numPressed}`;
    })
}
equalOperator.addEventListener('click', function(event){
    if(SecondCheckVar === 0){
        checkVar = 1;
        enteredValue = calcDisplay.textContent;
        if(secondOperatorValue === '*' || secondOperatorValue === '/'){
            valuesToOperateOnFirst.push(enteredValue);
            operate(secondOperatorValue,valuesToOperateOnFirst);
            operate(operatorValue,valuesToOperateOn);
            secondOperatorValue = '';
            valuesToOperateOnFirst = [];
            operatorValue = '';
            valuesToOperateOn = [];
        } else{
                valuesToOperateOn.push(enteredValue);
                operate(operatorValue,valuesToOperateOn);
                operatorValue = '';
                valuesToOperateOn = [];
        }
    } else {
        operatorValue = '';
        secondOperatorValue = '';
        calcDisplay.textContent = '0';
    }
})
plusOperator.addEventListener('click', function(event){
    if(SecondCheckVar === 0){
        checkVar = 1;
        SecondCheckVar = 1;
        enteredValue = calcDisplay.textContent;
        if(secondOperatorValue = '*' || secondOperatorValue === '/'){
            valuesToOperateOnFirst.push(enteredValue);
            operate(secondOperatorValue,valuesToOperateOnFirst);
            operate(operatorValue,valuesToOperateOn);
            secondOperatorValue = '';
            valuesToOperateOnFirst = [];
        } else{
            enteredValue = calcDisplay.textContent;
            valuesToOperateOn.push(enteredValue);
            operate(operatorValue,valuesToOperateOn);
            operatorValue = event.target.textContent;
        }
    } else {
        operatorValue = '';
        secondOperatorValue = '';
        calcDisplay.textContent = '0';
    }
})

minusOperator.addEventListener('click', function(event){
    if(SecondCheckVar === 0){
    checkVar = 1;
    enteredValue = calcDisplay.textContent;
    if(secondOperatorValue = '*' || secondOperatorValue === '/'){
        valuesToOperateOnFirst.push(enteredValue);
        operate(secondOperatorValue,valuesToOperateOnFirst);
        operate(operatorValue,valuesToOperateOn);
        secondOperatorValue = '';
        valuesToOperateOnFirst = [];
    } else{
    valuesToOperateOn.push(enteredValue);
    operate(operatorValue,valuesToOperateOn);
    operatorValue = event.target.textContent;
    }
    } else {
        operatorValue = '';
        secondOperatorValue = '';
        calcDisplay.textContent = '0';
    }
})

multiplyOperator.addEventListener('click', function(event){
    if(SecondCheckVar === 0){
    checkVar = 1;
    enteredValue = calcDisplay.textContent;
    valuesToOperateOnFirst.push(enteredValue);
    operate(secondOperatorValue,valuesToOperateOnFirst);
    secondOperatorValue = event.target.textContent;
    } else {
        operatorValue = '';
        secondOperatorValue = '';
        calcDisplay.textContent = '0';
    }
})

devideOperator.addEventListener('click', function(event){
    if(SecondCheckVar === 0){
    checkVar = 1;
    enteredValue = calcDisplay.textContent;
    valuesToOperateOnFirst.push(enteredValue);
    operate(secondOperatorValue,valuesToOperateOnFirst);
    secondOperatorValue = event.target.textContent;
    } else {
        operatorValue = '';
        secondOperatorValue = '';
        calcDisplay.textContent = '0';
    }
})

clearButton.addEventListener('click', function(event){
    valuesToOperateOn = [];
    valuesToOperateOnFirst = [];
    operatorValue = '';
    secondOperatorValue = '';
    calcDisplay.textContent = '0';
})