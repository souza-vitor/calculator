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

let num1 = "";
let num2 = "";
let operator = "";


const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.innerText += button.textContent;


        if(button.textContent == "+"){
            num1 = display.textContent;
            num1 = num1.substring(0, num1.length - 1);
            display.innerText = "+";
            operator = display.textContent;

        }else if (button.textContent == "-"){
            num1 = display.textContent;
            num1 = num1.substring(0, num1.length - 1);
            display.innerText = "-";
            operator = display.textContent;

        }else if (button.textContent == "/"){
            num1 = display.textContent;
            num1 = num1.substring(0, num1.length - 1);
            display.innerText = "/";
            operator = display.textContent;

        } else if (button.textContent == "*"){
            num1 = display.textContent;
            num1 = num1.substring(0, num1.length - 1);
            display.innerText = "*";
            operator = display.textContent;
        }

        if(button.textContent == "="){
            num2 = display.textContent;
            display.textContent = "";

            num2 = num2.substring(1);
            // num2 = num2.substring(0, num1.length - 1);

            display.textContent = operate(parseInt(num1), parseInt(num2), operator);

            num1 = display.textContent;

            // console.log("num1 after the result = " + num1);
        }

        if(button.textContent == "CE"){
            num1 = "";
            num2 = "";
            operator = "";
            display.textContent = "";
        }

        // console.log("number 1: " + num1);
        // console.log("operator: " + operator);
        // console.log("number 2: " + num2);
    });
})