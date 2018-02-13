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
const myName = () => {
    //scope B
    const name = "lara";
    const herName = () => {
        //scope C, we can access name here
        console.log(name);
    };
};


