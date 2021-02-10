function evenify(num){
    if(num % 2 == 0){
        // console.log(num, ": is even number.");
        return num;
    }
    else{
        // console.log(num * 2, ": is odd number.");
        return num*2;
    }
}

var result = evenify(5);
var square = result * result;
console.log(square);
 
function evenify_all(nums){
    var even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num);
        even_array.push(result);
    }
    return even_array;
}

nums = [5, 10, 12, 25, 18, 99];
var nums_even = evenify_all(nums);
console.log(nums_even);

friendsAge = [19, 20, 21, 22, 25, 28];
// evenify_all(friendsAge);