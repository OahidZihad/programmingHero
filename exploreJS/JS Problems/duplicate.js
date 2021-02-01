var num = [3, 6, 2, 3, 5, 6, 9, 8, 4, 2, 1, 4, 7, 8, 3, 6, 4, 5, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var uniqueNum = [];
for(var i=0; i<num.length; i++){
    var element = num[i];
    var index = uniqueNum.indexOf(element);
    if(index == -1){
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);