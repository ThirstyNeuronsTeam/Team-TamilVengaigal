const shareMarketValue=1000

const student={ class:12}
student.name='sowmiya'
student.class=12
const employees=[]
employees[0]='Ganesh'
employees[1]='suresh'
employees.push('suriya')
employees.unshift('kumar')
const filteredNames=employees.filter((employeeName)=> employeeName.includes('k'))

console.log(filteredNames)

 //if employees name contains a return true
    //else return false
    /* if (employeeName.includes('a')){
        return true
    }
    else{
        return false
    } */

const students = [{id:1,mark:100},{id:2,mark:98},{id:3,mark:100},{id:4,mark:95}]

const centumStudents = students.filter((student)=>{
    if(student.mark===100){
        return true
    }else{
        return false
    }
})
