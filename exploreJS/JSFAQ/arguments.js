function addNumbers(num1, num2){
    console.log(arguments);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;        
    }
    return sum;
}

var result = addNumbers(3, 7, 9, 5);
console.log(result);