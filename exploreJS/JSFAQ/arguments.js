function addNumbers(num1, num2){
    console.log(arguments);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;        
    }
    function logInfo(message){
        console.log(message);
    }
    logInfo('good morning');

    var double = sum*2;
    return double;


    // return sum;
}

var result = addNumbers(3, 7, 9, 5);
console.log(result);







function getFullName(firstName, lastName){
    console.log(arguments);
    let fullName = '';
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        fullName = fullName +' '+ element;
    }
    return fullName;
}
const name = getFullName("Hanif", "Zihad", "Prapti", "Habiba", "Poribohon");
console.log(name);