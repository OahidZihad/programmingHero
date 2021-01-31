// var fibo = [0, 1];
// // fibo[2] = fibo[]
// for (var i=2; i<=10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);


function fibonacci(num){
    var fibo = [0,1];
    for (var i=2; i<=num; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

var fibonacci = fibonacci(10);
console.log(fibonacci);