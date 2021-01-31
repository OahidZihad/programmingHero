// const year = 3689;
// let remainder = year % 4;
// if(remainder == 0){
//     console.log("Leap Year");
// }
// else{
//     console.log("Not a Leap Year");
// }


function isLeapYear(year){
    const remainder4 = year % 4;
    const remainder100 = year % 100;
    const remainder400 = year % 400;
    if(remainder4 == 0 && remainder100 != 0 || remainder400 == 0){
    console.log("Leap Year");
    }
    else{
        console.log("Not a Leap Year");
    }
}

isLeapYear(1998);