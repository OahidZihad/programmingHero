// var num = 2.52458;
// var result = Math.floor(num);
// var result2 = Math.ceil(num);
// var result3 = Math.round(num);
for(var i=0; i<=10; i++){
    var randomNum = Math.random() * 6;
    var output = Math.round(randomNum);
    if(output > 0){
        console.log(output);
    }
}
