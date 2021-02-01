// 1 feet 0.000189394 -miles-...
function feetToMile(feet){
    var mile = feet * 0.000189394;
    return mile;
}
var result = feetToMile(100000);
console.log(result);