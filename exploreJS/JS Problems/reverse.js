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