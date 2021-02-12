// 1 feet 0.000189394 -miles-...
function feetToMile(feet){
    if(feet >= 0){
        var mile = feet * 0.000189394;
        return mile;
    }
    else{
        console.log("Distance never be negative.");
    }
}
var result = feetToMile(1000);
console.log(result);




// 1 ta chair 1 qft
// 1 ta table 3
// 1 ta khat 5
function woodCalculator(chair, table, bed){
    var chairQuFeet = chair * 1;
    var tableQuFeet = table * 3;
    var bedQuFeet = bed * 5;
    var totalQuFeet = chairQuFeet + tableQuFeet + bedQuFeet;
    return totalQuFeet;
}
var result = woodCalculator(3,3,3);
console.log(result);




//koy tala? 
// 1st 10 tala = 15 ft,,,, prottek feet er jonno 1000 brick
// 11 - 20 = 12 ft
// 21 - 30 = 10 ft
function brickCalculator(tala){
    if(tala <= 10){
        var talaOneToTen = tala * 15 * 1000;
        return talaOneToTen;
    }
    else if(tala <= 20){
        var talaEleventToTwenty = tala * 12 * 1000;
        return talaEleventToTwenty;
    }
    else if(tala <= 30){
        var talaTwentyoneToThirty = tala * 15 * 1000;
        return talaTwentyoneToThirty;
    }
}
var result = brickCalculator(1);
console.log(result);




/// sob theke choto friend er name ber korte hobe... array theke.....
function tinyFriends(names){
    var min = names[0].length;
    var small;
    for (var i=0; i<names.length; i++){
        if(names[i].length < min){
            min = names[i].length;
            small = names[i];
        }
    }
    return small;
}
var names = ["Zihadd", "Rifat", "Zishan", "Rohit", "Ayon", "Habu mia"];
var result = tinyFriends(names);
console.log(result);

