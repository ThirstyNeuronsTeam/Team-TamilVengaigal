function removeLastDigit(n){

    n = n/10 

    n = Math.floor(n) 

    return n;
}

function numOfDigits(n){

    if(n===0){
        return 1;
    }

    let count = 0;

    while(n!==0){
         n = removeLastDigit(n)
         count = count + 1;
    }

    return count;
}

/* const result1 = removeLastDigit(1456);
const result2 = removeLastDigit(result1);
const result3 = removeLastDigit(result2);

console.log(result1)
console.log(result2)
console.log(result3) */

const digitCount1 = numOfDigits(3457142);

console.log(digitCount1)
