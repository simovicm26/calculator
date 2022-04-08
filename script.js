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