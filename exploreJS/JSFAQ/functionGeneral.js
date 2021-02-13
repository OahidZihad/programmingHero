function addTodo(task){
    const newTask = document.getElementById('li'); //// newTask is a local variable
}

var name = 'Zihad';    ///// name is a global variable

function addUser(){
    var romanticName = "Prapti";
    console.log(romanticName);
}

addUser();



///IIFE

(function addUser(){
    var romanticName = "Prapti";
    console.log(romanticName);
})();



//// when we should create function???????? 
//// Four times we should create function......

// 1. specific situation handle 
// 2. specific unit task
// 3. organize 
// 4. code reduce