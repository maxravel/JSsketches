// //******************* FIBONACCI
// //logging nth fibonacci number

// //Recursion
// function fibonacciR(n){
//     if(n===0){return 0;}
//     else if(n===1){return 1;}
//     else if(n>1){
//         return fibonacciR(n-1)+fibonacciR(n-2);
//     }
// }
// console.log(fibonacciR(15))

// //Iteration
// function fibonacciI(n){
//     if(n===0){return 0;}
//     else if(n===1){return 1;}
//     else if(n>1){
//         let a=1;
//         let b=1;
//         let c=0;
//         for(var i=1; i<n-1; i++){
//             c=a+b;
//             a=b;
//             b=c;
//         }
//         return c;
//     }
// }
// console.log(fibonacciI(15));


// //**************** N!
// //Recursion
// function strongR(n){
//     if(n===0){return 1;}
//     else if(n>0){
//         return n*strongR(n-1);
//     }
// }
// console.log(strongR(5));

// //Iteration
// function strongI(n){
//     var c = 1;
//     for(var i=1;i<=n;i++){
//         c=c*i;
//     }
//     return c;
// }
// console.log(strongI(6));


// //********************* Checking if prime
// function checkingPrime(n){
//     var d=0;
//     for(var i=2;i<Math.sqrt(n)+1;i++){
//         if(n%i===0){
//             d++
//         }
//     }
//     if(d===0){return "prime"}
//     else{return "not prime"}
// }
// console.log(checkingPrime(39));