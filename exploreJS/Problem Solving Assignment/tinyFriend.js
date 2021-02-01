/// sob theke choto friend er name ber korte hobe... array theke.....
function tinyFriends(names){
    var min = names[""];
    // minLength = min.length;
    for (var i=0; i<names.length; i++){
        var char = names[i];
        var charLength = char.length;
        if(charLength < names.length + i){
            min = charLength;
        }
    }
    return min;
}
var names = ["Zihadd", "Rifat", "Zishan", "Rohit", "Ayon", "Habu mia"];
var result = tinyFriends(names);
console.log(result);

