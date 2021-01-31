//// Iteretive functions

///// Using Function and For loop
///// Using Function and For loop
function factorial(num){
    var fact = 1;
    for(var i=1; i<=num; i++){
        fact = fact*i;
    }
    return fact;
}
var factorial = factorial(5);
console.log(factorial);


////// Using Function and While Loop
////// Using Function and While Loop
function factorial2(num){
    var i = 1;
    var fact = 1;
    while(i <= num){
    fact = fact * i;
    i++;
}
    return fact;
}

var factorial = factorial2(10);
console.log(factorial);


//// Recursive function
function factorial3(num){
    if(num == 0){
        return 1;
    }
    else{
        return num * factorial3(num-1);
    }
}
var factorial = factorial3(10);
console.log(factorial);