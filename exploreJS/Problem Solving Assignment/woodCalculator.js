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