function sum(inputs){
    let totalCount = 0
    
    for(let bookIndex=0;bookIndex<inputs.length;bookIndex++){
        totalCount = totalCount + inputs[bookIndex]
    } 

    return totalCount
    
}
const result = sum([113,456,11,567])

function product(inputs){
    let totalCount = 1
    for(let bookIndex=0;bookIndex<inputs.length;bookIndex++){
        totalCount = totalCount * inputs[bookIndex]
    } 
    return totalCount;
}

const resultProduct = product([1,2,3,4])

console.log(resultProduct)

/* const age = 45;
/* const sum = (input1,input2) => {
    return input1 + input2;
} */
/*const sum = (input1,input2) => input1 + input2;
const result = sum(2,3) */