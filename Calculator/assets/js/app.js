
 let inputNumbers = new Array();
 let numberOfInput;
 let result;
var sum = 0;
//  addition
function add(){
     
    numberOfInput = prompt("how many inputs do you want: ");
    for (let index = 0; index< parseInt(numberOfInput); index++) {
        inputNumbers[index] = prompt("Your Input " + (index + 1));
        
        sum = sum + parseInt(inputNumbers[index])
       
    }
    console.log("the sum is: " + " " + sum)
}
// subtraction
function subtract(){
    
    firstNumber = prompt("input first number: ");
    secondNumber = prompt("input second number: ");
    result = firstNumber - secondNumber;
     console.log("the Difference is: " + " " + result);

}

// multiplication
function multiply(){
    var product = 1;
    numberOfInput = prompt("how many inputs do you want: ");
 for (let index = 0; index< parseInt(numberOfInput); index++) {
        inputNumbers[index] = prompt("Your Input " + (index + 1));
        
        product = product * parseInt(inputNumbers[index])
       
    }
    console.log("the product is: " + " " + product)
}

// division
function divide(){
    
    numerator = prompt("input dividend ");
    denominator = prompt("input divisor ");

    if(denominator==0){
        result=console.log("please enter a divisor different from 0");
        
    } else
    {
        result = Number((numerator/denominator).toFixed(3));
        
        console.log("the result is " + "" + result)
    }
}

// maxandmin
function maxMin(){
    
    numberOfInput = prompt("how many inputs do you want: ");
    for (let index = 0; index< parseInt(numberOfInput); index++) {
           inputNumbers[index] = prompt("Your Input " + (index + 1));
      
         
    }
    var max = inputNumbers[0];
    var min = inputNumbers[0];
        for(let i=0; i<parseInt(numberOfInput); i++){
            if (parseInt(inputNumbers[i]) > max){
                max = inputNumbers[i];
            } if(parseInt(inputNumbers[i]) < min){
                min = inputNumbers[i];
    
            }
        }
        
    
    console.log("max number is " + max + " and min number is " + min);
}



// square
function square(){
input = prompt("input a number to square: ");
result = input*input;
console.log("the square of "+ input + " is " + result);
}

// average
function average(){
    
    numberOfInput = prompt("how many inputs do you want: ");
    for (let index = 0; index< parseInt(numberOfInput); index++) {
           inputNumbers[index] = prompt("Your Input " + (index + 1))
           if (numberOfInput==0){
            result = console.log("invalid amount of input");
        
        } else{
            sum = sum + parseInt(inputNumbers[index]);
            result = sum/(parseInt(numberOfInput));
            
        };
        
    }console.log("the average of the numbers is: "+ result);
}













//output iife

(function init (){

    var selectedOperation =prompt("select an operation: \n 1.Addition \n 2.Subtraction \n 3.Multiplication \n 4.Division \n 5.Max and Min \n 6.Square \n 7.Average");

    switch (selectedOperation) {
        case "1":
          add();
          break;
        case "2":
            subtract();
            break;
        case "3":
            multiply();
            break;
        case "4":
            divide();
            break;
        case "5":
            maxMin();
            break;
        case "6":
            square();
            break;
            case "7":
                average();
                break;
        }
})();