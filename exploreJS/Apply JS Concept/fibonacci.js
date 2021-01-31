////// iterative function
var fibo = [0, 1];
for (var i=2; i<=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);


function fibonacci(num){
    var fibo = [0,1];
    for (var i=2; i<=num; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

var fibonacci = fibonacci(10);
console.log(fibonacci);


////// recursive function
function fibonacci1(num){
    if(num==0){
        return 0;
    }
    else if(num==1){
        return 1;
    }
    else{
        return fibonacci1(num - 1) + fibonacci1(num - 2);
    }
}

var result = fibonacci1(10);
console.log(result);

///// fibonacci series in a recursive way
function fibonacci2(num){
    if(num==0){
        return [0];
    }
    else if(num==1){
        return [0,1];
    }
    else{
        var fibo = fibonacci2(num-1);
        var nextElement = fibo[num-1]+fibo[num-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci2(10);
console.log(result);