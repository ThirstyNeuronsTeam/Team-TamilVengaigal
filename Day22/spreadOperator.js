/* //Reference Type
const students = [1,2,3]
const newStudents = [...students];//different memory address will get assigned

students[0] = 100;

console.log(students);//[100,2,3]
console.log(newStudents);//[1,2,3] */

/* //Reference Type
const address = {doorNo:45}
const newAddress = address;//same memory address will get assigned

address.doorNo= 100;

console.log(address);//{doorNo:100}
console.log(newAddress);//{doorNo:45}


//Primitive Type
let name="Sujitha"
let newName = name;//different memory address will get created

name = "Ganesh"

console.log(name)//Ganesh
console.log(newName)//Sujitha */

let students = [
  { name: "Senthiil", address: { doorNo: 45 } },
  { name: "Ram" },
  { name: "Panneer" },
  { name: "Sowmeya" },
];
const newStudents = [...students]; // we have created a different memory address

const firstObjectClone = {...students[0]}//cloneed 0th diff mem
//newStudents[0] =firstObjectClone

const secondObjectClone = {...students[1]}//cloneed 1st diff mem
newStudents[1] = secondObjectClone

//students[0].name="kumaran"


//console.log(students);
//console.log(newStudents);

console.log(students[0] === newStudents[0])

