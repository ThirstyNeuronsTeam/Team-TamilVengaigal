function sum(inputs){
    let totalCount = 0
    
    for(let bookIndex=0;bookIndex<inputs.length;bookIndex++){
        totalCount = totalCount + inputs[bookIndex]
    } 

    return totalCount
    
}
const result = sum([113,456,11,567])




let price = 25.30  //DataType number

let floorPrice = Math.floor(price)
let ceilPrice =  Math.ceil(price)
let truncPrice = Math.trunc(price)
let roundedPrice = Math.round(price)


console.log("ceilPrice")
console.log(ceilPrice)

console.log("floorPrice")
console.log(floorPrice)

console.log("truncPrice")
console.log(truncPrice)

