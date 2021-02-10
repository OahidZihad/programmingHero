function explain_callback(name, age, task){
    console.log("hello", name);
    console.log("your age is", age);
    task();
}

function washHand(){
    console.log("wash hand with soap");
}
function takeShower(){
    console.log("Take Shower");
}

explain_callback('Habiba Jannati', 15, washHand);
explain_callback('Oahid Zihad', 25, takeShower);
explain_callback('Mugir', 21, washHand);