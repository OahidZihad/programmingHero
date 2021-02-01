var business = 45;
var minister = 35;
var sochib = 50;

///// type 01
if (business>minister){
    if(business>sochib){
    console.log("business is bigger.");
    }
    else{
    console.log("Sochib is bigger.");
    }
}
else{
    if(minister>sochib){
        console.log("minister is bigger.");
    }
    else{
        console.log("sochib is bigger.");
    }
}

//// type 02
var max = Math.max(business,minister,sochib);
console.log(max);