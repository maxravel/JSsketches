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
const con = document.querySelector('#con');
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