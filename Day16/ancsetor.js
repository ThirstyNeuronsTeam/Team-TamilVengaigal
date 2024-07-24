//-2,f - grandmother
//2,m- grandson
//0,me
const relation = {
    "-2_f":"grandmother",
}

function getRelation(x,y){
    return relation[`${x}_${y}`]
}

console.log(getRelation(-2,"f"))