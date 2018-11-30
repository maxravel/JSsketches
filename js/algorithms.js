//FIBONACCI
//logging nth fibonacci number

//Recursion
function fibonacciR(n){
    if(n===0){return 0;}
    else if(n===1){return 1;}
    else if(n>1){
        return fibonacciR(n-1)+fibonacciR(n-2);
    }
}

console.log(fibonacciR(15))

//Iteration
function fibonacciI(n){
    if(n===0){return 0;}
    else if(n===1){return 1;}
    else if(n>1){
        let a=1;
        let b=1;
        let c=0;
        for(var i=1; i<n-1; i++){
            c=a+b;
            a=b;
            b=c;
        }

        return c;
    }
}

console.log(fibonacciI(15));