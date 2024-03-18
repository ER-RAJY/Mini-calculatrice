document.addEventListener('DOMContentLoaded', function() {
var num1 = '',
    num2 = '',
    operation = '',
    finalResults = '';

    function showOnScreen(){
        const _num1 = num1 || '_'
        const _operation = operation || '_'
        const _num2 = num2 || '_'
        const _finalResults = finalResults || '_'
        document.getElementById("screen").value = _num1 + ' '+_operation+' '+ _num2 + ' = ' + _finalResults;
    }

    function calc(){
        if( operation === '+'){
            finalResults =  sum(num1,num2);
        }else if(operation === '-'){
            finalResults =  subtract(num1,num2);
        }else if(operation === 'x'){
            finalResults =  multiply(num1,num2);
        }else if(operation === '/'){
            finalResults =  divide(num1,num2);
        }
        showOnScreen();
    }

    function sum(val1, val2){
        return parseInt(val1) + parseInt(val2);
    }
    function subtract(val1, val2){
        return parseInt(val1) - parseInt(val2);
    }
    function multiply(val1, val2){
        return parseInt(val1) * parseInt(val2);
    }
    function divide(val1, val2){
        return parseInt(val1) / parseInt(val2);
    }
    function clearAll(){
        num1 = ''
        num2 = ''
        operation = ''
        finalResults = ''
        showOnScreen();
    }

    // Get all buttons
    const buttons = document.querySelectorAll('button');

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = this.textContent;
            if(finalResults){
                return;
            }
            else if(isNaN(buttonValue)){
                if(buttonValue === '='){
                    calc();
                } else {
                    operation = buttonValue;
                }
            } else if(!operation){
                num1 += buttonValue;
            } else {
                num2 += buttonValue;
            }
            showOnScreen();
        });
    });

    // Clear button event listener
    document.getElementById('clearBtn').addEventListener('click', clearAll);

});
