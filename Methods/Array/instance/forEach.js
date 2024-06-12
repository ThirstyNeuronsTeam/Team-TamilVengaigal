const { faker ,en_IN , Faker } = require("@faker-js/faker")

const customFaker = new Faker({ locale: [en_IN] });

const employeeData = Array.from({length:20},()=>{
    return {
        id: customFaker.string.uuid(),
        name : customFaker.person.firstName() + " " + customFaker.person.lastName(),
        phone : customFaker.phone.number(),
        email : faker.internet.email(),
        gender : faker.person.sex()
    }
})

function sendMail(emailId,emailContent){
    console.log("sent mail")
    console.log(emailId,emailContent)
    //server logic to send mail
}

const emailContent = faker.lorem.paragraph() ;
console.log(emailContent);

for(let employeeIndex=0;employeeIndex<employeeData.length;employeeIndex++){
    const currentEmployee = employeeData[employeeIndex]
    sendMail(currentEmployee.email,faker.lorem.paragraph())
}




