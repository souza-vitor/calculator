function add(num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num1 != 0 && num2 != 0){
        return num1 / num2;
    } else {
        return "Nope!";
    }
}

function operate(num1,num2,operator){
    let result = 0;

    if(operator == "+"){
        result = add(num1,num2);
    } else if(operator == "-"){
        result = subtract(num1,num2);
    } else if (operator == "*"){
        result = multiply(num1,num2);
    } else if (operator == "/"){
        result = divide(num1,num2);
    }

    return result;
}