function isPrime(num){
    for (var i=2; i<num; i++){
        if(num%i==0){
            return "Not Prime";
        }
    }
    return "Prime";
}

var result = isPrime(12);
console.log(result);