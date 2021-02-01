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
var result = feetToMile(-100000);
console.log(result);