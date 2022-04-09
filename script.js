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

let devision = function(numbers){
    let devideValue;
    if(numbers[1] === 0){
        devideValue = 'GTFO';
    }else {
        devideValue = numbers[0]/numbers[1];
        devideValue = devideValue.toFixed(4);
    }
    calcDisplay.textContent = `${devideValue}`;
    valuesToOperateOn.splice(1,1,devideValue);
    valuesToOperateOnFirst = [devideValue];
    console.log(valuesToOperateOn)
    console.log(valuesToOperateOnFirst);
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


for(i = 0;i < calcNumButton.length;i++){
    calcNumButton[i].addEventListener('click', function(event){
        if(checkVar === 1){
            calcDisplay.textContent ='';
        }
        checkVar = 0;
        numPressed = event.target.textContent;
        calcDisplay.textContent = calcDisplay.textContent + `${numPressed}`;
    })
}
equalOperator.addEventListener('click', function(event){
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

})
plusOperator.addEventListener('click', function(event){
    checkVar = 1;
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

})

minusOperator.addEventListener('click', function(event){
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

})

multiplyOperator.addEventListener('click', function(event){
    checkVar = 1;
    enteredValue = calcDisplay.textContent;
    valuesToOperateOnFirst.push(enteredValue);
    operate(secondOperatorValue,valuesToOperateOnFirst);
    secondOperatorValue = event.target.textContent;

})

devideOperator.addEventListener('click', function(event){
    checkVar = 1;
    enteredValue = calcDisplay.textContent;
    valuesToOperateOnFirst.push(enteredValue);
    operate(secondOperatorValue,valuesToOperateOnFirst);
    secondOperatorValue = event.target.textContent;
})