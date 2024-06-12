/* const emptyArray = []
for(let index=0;index<100;index++){
    //emptyArray[0] =  1
    //emptyArray[1] = 2
    emptyArray[index] = 3*(index)+1;
    //index =0 ; value = 2
    //index =1; value = 4
    //index = 2; value = 6

}
[1,2,3....200]
//[1,4,7,10,13.....]
//[0,3,6,9]
console.log(emptyArray) */

//We are passing only one argument
const newArray = Array.from("JavaScript")
console.log(newArray);

//We are passing arguments , 1-Array 2-Arrow Function
console.log(Array.from([1,2,3],(value,index) =>  2*value));


//We are creating array by giving the length and index logic
const evenArray = Array.from({length:100},(_,index)=>"s".repeat(index+1))

console.log(evenArray)

