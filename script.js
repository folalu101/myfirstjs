// function sayHi() {
//     alert ("Hello world from Acedu !!!");

// }
// sayHi();
// sayHi();
// sayHi();
// sayHi();
// sayHi();

// function saySomething(whatTosay) {
//     alert (whatTosay);
// }
// saySomething("Hello world !!!")
// saySomething("How are you ?")
// saySomething("Are you a Developer ?")

// function add(number1, number2){ 
//     return number1 + number2;
// }
// alert(add(3,5));
// console.log(add(3,10));
// document.write(add(4,34));

// function saySomething(whatTosay){
//     prompt (whatTosay);
// }
// saySomething("How are you Tinuke");
// saySomething("Hope you are good Honey? ");
// saySomething("I miss you");

let name = prompt("What is your name?");
let age = prompt("How old are you?");
let food = prompt("what your favorite food?");

function question(name, age, food){

    return "what is your name?  " + name + "  how old are you?  " + age + "  what your favorite food?  " + food;
}
alert(question(name, age, food));