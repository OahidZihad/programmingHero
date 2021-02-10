///////// type 01
function reversString(string){
    var reverse = "";
    for (var i=0; i<string.length; i++){
        var char = string[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "Hello Alien bhai brother.";
var result = reversString(statement);
console.log(result);




///////type 02
var sentence = "I am hardworking. I am serious. I am sure I will do it";
var reverse = sentence.split('').reverse().join('');
console.log(reverse)