// switch statement
// let day=2;
// switch(day){
//     case 1: case 2:
//     console.log('hard start of week');
//     break;

//     case 3: case 4:
//     console.log('be cool');
//     break;

//     case 5: case 6: case 7:
//     console.log('relax');
//     break;

//     case undefined:
//     console.log('undefined');
//     break;

//     default:
//     console.log('put number of day');
// }



// function
// function greeting(){
//     return 'Hello World!';
// }
// console.log(greeting());

//parameter 
// function howOld(age){
//     return `your age is: ${age}`;
// }
// console.log(howOld(34));

//function as variable
// const sum = function(x,y){
//     return x+y;
// }
// console.log(sum(4,5));

//array function ES6
// const add = (x, y) => {
//     return x + y;
// }
// console.log(add(3,4));



//scope A
// const favoriteColor = () => {
//     //scope B
//     const otherColor = () => {
//         //scope C
//         const lastColor = () => {
//            //scope D 
//         };
//     };
// };

//scope A
// const con = document.querySelector('#con');
// const name = "lara";
// const myName = () => {
//     //scope B
//     const herName = () => {
//         //scope C
//         //console.log(name);
//         //return name;
//         con.innerText=name;
//     };
//     herName();
//     // con.innerText=herName();
// };
// myName();



//LOOPs
//while loop
// let i = 10;
// let a=[];
// while(i>1){
//     a.push(i);
//     console.log(i);
//     con.innerText=a;
//     i-=1;
// }

//do while loop
// let i=10
// do{
//     i--;
//     console.log(i);
// }
// while(i>0);

// for loop
// let num='';
// for(let i=0;i<10;i++){
//     num=num+i;
// }
// console.log(num);

//break statement
// for(let i=0;i<10;i++){
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }

// continue statement (contnue loop without if statement)
// for(let i=0;i<10;i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }



//array
// const groceryList = ['milk','sugar','eggs','water'];

//add item
// groceryList.push('yogurt');

//add item to the fron of array
// groceryList.unshift('salt');

//removes fron the end of array
// groceryList.pop();

//removes from the front of array
// groceryList.shift();
// console.log(groceryList[1]);

// console.log(groceryList.sort());
// console.log(groceryList.reverse());



//NaN
// // let a = "apple";
// let a = 3;
// let b = 5;
// if(isNaN(a)){
//     console.log("is NaN");
// }
// else {
//     console.log(a*b);
// }



//Strings
// let myString = "I\'m a string"; //     \ - this is for that ' not closing string
// console.log(myString);
// console.log(myString.length);
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
// console.log(myString.indexOf('string'));
// console.log(myString.indexOf('nostring')); // returns -1

//String Comparision
// let string1 = "abc";
// let string2 = "bcd";
// console.log(string1<string2); // true

//String methods
// let str = "Hello World";
// let str2 = str.slice(2,8);
// console.log(str2);
// let food = "milk, water, pomodoro, meat";
// let foodArr = food.split(', ');
// console.log(foodArr);
// let myString = new String();
// console.log(typeof(myString));
// console.log(typeof('abc'));



//Objects
// const car = new Object();
// car.speed = 50;
// car.color = "red";
// car.weight = 1000;
// console.log(car.color);
// car.drive = function(){
//     console.log('now driving');
// };
// car.drive(); // () - when calling methods

// const car2 = {
//     drive: function(speed,time){
//         console.log(speed*time);
//     },
//     driver: "marlon",
//     color : "blue",
//     speed : 45,
//     test : function(){
//         console.log(this);
//     },
//     logDriver: function(){
//         console.log('this car driver is '+this.driver);
//     },
// }
// car2.speed = 34;  // you can change values of const object properties
// console.log(car2.speed);
// car2.drive(50,3);

//THIS keyword
// console.log(this); // console log window object
// car2.test();
// car2.logDriver();

//Constructor function - starts with capital letter

// const name1 = "Jeff";
// const name2 = new String("Jeff");
// console.log(typeof name1 + " " + typeof name2);
// const item1 = new Number(5);
// const item2 = new Boolean(true);
// const item3 = new Function('x','y','return x+y');
// console.log(item3(1,2));
// const item4 = new Object({name:"Andy"});
// const item5 = new Array(1,2,3,4);
// console.log(item5);

// let Car = function(maxSpeed, driver){
//     this.maxSpeed = maxSpeed;
//     this.driver = driver;
//     this.drive = function(speed,time){
//         console.log(speed*time);
//     }
//     this.logDriver = function(){
//         console.log('this car driver is '+this.driver);
//     }
// };

// var car17 = new Car(50,"elton");
// console.log(car17);
// car17.logDriver()


//person constructor

// function Person(name, dob){
//     this.name = name;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() -1970);
//         // console.log(diff);
//     }
// }

// const brad = new Person('brad', '03-25-1993');
// console.log(brad.calculateAge());



//DATE object
// let myDate = new Date();
// console.log(myDate);

// let pastDate = new Date(1523,11,2,10,23,43); 
// let futureDate = new Date(2077,0,3,0,2,34); // 0 - january
// console.log(pastDate);
// console.log(futureDate);

let Birthday = new Date(1993,2,25,6,0,0);
// console.log(Birthday.getMonth());
// console.log(Birthday.getFullYear());
// console.log(Birthday.getDate());
// console.log(Birthday.getDay()); // gets day of week 0-6; 0 -sunday
// console.log(Birthday.getHours());
// console.log(Birthday.getTime()); // gets number of miliseconds since 1st Jan 1970
console.log(Birthday.getUTCFullYear());



//TIMERS
const colorBox = document.querySelector('#colorBox');
const colors = ["black", "green", "blue", "pink"];
let i = 0;
function colorChange(){
    if(i===colors.length){
        i=0;
    }
    colorBox.style.background = colors[i];
    i++;

    //setTimeout(colorChange, 3000);
}

let changer = setInterval(colorChange, 1000);

colorBox.addEventListener('click', function(){
    
    if(changer !== 0){
        clearInterval(changer);
        changer = 0;
    }
    else{
        changer = setInterval(colorChange, 1000);
    }
    console.log(changer);
})



//counter of letters, remember that you can use [i] iteration for string type; 
const text = document.querySelector('#text');
const letter = document.querySelector('#letter');
const answer = document.querySelector('#answer');
const submit = document.querySelector('#submit');
let counter = 0;

submit.addEventListener('click', function(){
    for(let i=0;i<text.value.length;i++){
        if(text.value[i]===letter.value){
            counter++
        }
    }
    answer.innerText=counter;
    console.log(counter);
    counter=0;
})