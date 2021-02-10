////// variable related works

let number = 56;
number = 45;
const name = "Zihad";
console.log(number);


var marks = [89, 97, 85, 85, 96];

for(var i=0; i<marks.length; i++){
    var element = marks[i];
    console.log(element);
}

////// function related works
function add(number1, number2){
    var total = number1 + number2;
    return total;
}

var result1 = add(65, 89);
console.log(result1);

var adam = "Adam Sandler";
var kodom = "Kodom Sandler";

console.log("Not adding this time", adam);
console.log("Not eating right now", kodom);

var result2 = add(144, 568);
console.log(result2);


function largestNumber(num){
    for(var i=0; i<num.length; i++){
        var element = num[i];
        console.log(element);
    } ////////// eikhane kono return nai..... tai console.log likhte hobe na
}
largestNumber([45, 78, 99, 63]);
// console.log(result);





