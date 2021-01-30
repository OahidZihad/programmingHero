var friendsAge = [18, 20, 22, 30];
var zihadAge = friendsAge[2];
friendsAge[3] = 33;
var position = friendsAge.indexOf(22);
console.log(position);


///Push, Pop & Length
console.log(friendsAge);
console.log(friendsAge.length);
friendsAge.push(15);
friendsAge.push(16);
console.log(friendsAge);
console.log(friendsAge.length);
friendsAge.pop();
console.log(friendsAge);
console.log(friendsAge.length);
friendsAge.unshift(11);
console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge);


///Slice
var teaLine = ['Kalam', 'Salam', 'Balam', 'Zihad', 'Prapti', 'Habiba', 'Jannati'];
var part = teaLine.slice(2,4);
console.log(part);
console.log(teaLine); 