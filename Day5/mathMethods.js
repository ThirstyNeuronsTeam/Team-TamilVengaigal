function sum(inputs){
    let totalCount = 0
    
    for(let bookIndex=0;bookIndex<inputs.length;bookIndex++){
        totalCount = totalCount + inputs[bookIndex]
    } 

    return totalCount
    
}
const result = sum([113,456,11,567])


