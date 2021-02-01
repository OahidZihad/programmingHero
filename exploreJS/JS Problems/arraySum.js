function getArraySum(numbers){
    var sum = 0;
    for(var i=0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 66, 55, 88, 98, 77, 55, 45, 78, 63, 25, 86, 91, 44];
var result = getArraySum(numbers);
console.log("Total of the numbers: ", result);


////// another program
var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allNames = "";
for(var i = 0; i< friends.length;i++){
    var name = friends[i];
    allNames = allNames + name;
}
console.log(allNames)