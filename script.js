document.addEventListener('DOMContentLoaded', ()=>{
    //variables
    let  value_current = "";
    let num1 = 0;
    let num2 = 0;
    value_input = document.getElementById('input');
    const equateButton = document.getElementById('equate');

    // functions
    function calculate(num1, num2, operation){
        if (operation === '+'){
            return num1 + num2;
        }
        if (operation === '-'){
            return num1 - num2;
        }
        if (operation === '*'){
            return num1 * num2;
        }
        if (operation === '/'){
            return num2 !==0 ? num1/num2 : 'Error';
        }
        else{
            return 0;
        }
    }

    const updateDisplay = () =>{
        // console.log('updated...');
        value_input.value = value_current;

    }

    const numberButtons = document.querySelectorAll('.numbersButton');
    const operationButtons = document.querySelectorAll('.operationsButton');

    // event listener for operations button click
    operationButtons.forEach(operation_item => {
        operation_item.addEventListener('click', () =>{
            console.log(" i wanna initiate operations...");
            value_current += operation_item.textContent;
            updateDisplay();

        } );
    });

    // event listener for numbers button click
    numberButtons.forEach(button_item => {
        button_item.addEventListener('click', () => {
            // console.log("hello....");
            value_current += button_item.textContent;
            updateDisplay();
        });
    });

    // event listener for start bracket
    start_bracket_element = document.getElementById('start-bracket');
    start_bracket_element.addEventListener('click', () => {
        value_current +=  start_bracket_element.textContent;
        updateDisplay();
    });


    //event listener for equal 


    // event listener for end bracket
    end_bracket_element = document.getElementById('end-bracket');
    end_bracket_element.addEventListener('click', () =>{
        value_current += end_bracket_element.textContent;
        updateDisplay();
    });

    // event listener for decimal
    decimal_element = document.getElementById('decimal');
    decimal_element.addEventListener('click', () => {
        value_current += decimal_element.textContent;
        updateDisplay();
    });

    //event listener for All clear
    allClear_element = document.getElementById('allClear');
    allClear_element.addEventListener('click', () => {
        // console.log("i wanna reset.....");
        value_current = "";
        updateDisplay();
    });

    //event listener on delete
    delete_element = document.getElementById('delete');
    // console.log(delete_element);
    delete_element.addEventListener('click', () =>{
        // console.log("i wanna initiate a delete...");
        value_current = value_current.slice(0,-1);
        updateDisplay();
    });

    //event listener on equate
    equateButton.addEventListener('click', () => {
        try {
          // Use math.js to evaluate the expression
          
        //   console.log("Math.js Loaded:", typeof math.evaluate === "function");
        //   console.log('checking for equate....0....', value_current);
        //   console.log("Math.js Loaded:", typeof math.evaluate === "function");
          value_current = math.evaluate(value_current).toString();
        //   console.log("Math.js Loaded:", typeof math.evaluate === "function");
        //   console.log("checking for equate....1....", value_current);
        //   console.log('Current Input:', currentInput);
        //   console.log(math.evaluate(value_current));
        //   console.log("checking for equate....2....");
        //   console.log("checking...",math.evaluate(value_current));

        //   console.log("checking for equate....3...")
          updateDisplay();
        } catch (error) {
          // Handle errors gracefully
          value_current = "Error";
          updateDisplay();
          setTimeout(() => {
            value_current = "";
            updateDisplay();
          }, 1500);
        }
      });


    
    //get all button elements
    // value_one = document.getElementById('get-one');
    // value_two = document.getElementById('get-two');
    // value_three = document.getElementById('get-three');
    // value_four = document.getElementById('get-four');
    // value_five = document.getElementById('get-five');
    // value_six = document.getElementById('get-six');
    // value_seven = document.getElementById('get-seven');
    // value_eight = document.getElementById('get-eight');
    // value_nine = document.getElementById('get-nine');
    // value_zero = document.getElementById('get-zero');
    // operation_add = document.getElementById('add');
    // operation_subtract = document.getElementById('subtract');
    // operation_multiply = document.getElementById('multiply');
    // operation_divide = document.getElementById('divide');
    // action_decimal = document.getElementById('decimal');
    // action_allClear = document.getElementById('allClear');
    // action_delete = document.getElementById('delete');
    // action_start_bracket = document.getElementById('start-bracket');
    // action_end_bracket = document.getElementById('end-bracket');
    // action_equate = document.getElementById('equate');

    // value_one.addEventListener('click', ()=>{
    //     value_current += value_one;
    //     console.log(value_current);
    // });
    // value_five.addEventListener('click', ()=>{
    //     value_current += value_five;
    //     console.log(value_current);
    // });


});