//koy tala? 
// 1st 10 tala = 15 ft prottek feet er jonno 1000 brick
// 11 - 20 = 12 ft brick lage 
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