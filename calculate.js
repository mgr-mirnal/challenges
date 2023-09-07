const colors = require('ansi-colors');
const prompt = require('prompt-sync')();

let firstNum = Number(prompt( 'Please enter your first number: '))
let operator = prompt('Pasdlease enter your operator number:' )
let secondNum = Number(prompt('Please enter your second number: '))


function calcualte(first,second,ope){
   let result;
    switch(ope){
        case "+":
            result = first + second
            break;
        case "-":
            result = first - second
            break;
        case "*":
            result = first * second
            break;
        case "/":
            result = first / second
            break;
    }
    if(result > 0){
        console.log(colors.red(result))
    }else if(result < 0){
        console.log(colors.green(result))
    }else{
        console.log(colors.yellow(result))
    }
        
    
       
}

calcualte(firstNum,secondNum,operator);

/* 


    calcualte(firstNumber,secondNumber,operater)
    promote to input first number - need msg saying please input a number
    store it in firstNumber
      promote to input second number - need msg saying please input a number
    store it in secpmdNumber
    promote to input mathematicl operator number - need msg saying please input a number
    store it in operator
    
*/