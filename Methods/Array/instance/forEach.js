const { faker, en_IN, Faker, de } = require("@faker-js/faker");

//We have constructed factory to generate employee data
const customFaker = new Faker({ locale: [en_IN] });

function generateSingleEmployeeData() {
  return {
    id: faker.string.uuid(),
    name: customFaker.person.firstName() + " " + customFaker.person.lastName(),
    phone: customFaker.phone.number(),
    email: faker.internet.email(),
    gender: faker.person.sex(),
  };
}

// Generating Data using the factory
function generateAllEmployeesData() {
  return Array.from({ length: 20 }, () => generateSingleEmployeeData());
}

const employees = generateAllEmployeesData();

//send Mail
function sendMail(emailId, emailContent) {
  console.log("sent mail");
  console.log(emailId, emailContent);
  //server logic to send mail
}

//send mail to all employees

function sendMailToAllEmployees(emailContent) {
  //common email content
  /* for (
    let employeeIndex = 0;
    employeeIndex < employees.length;
    employeeIndex++
  ) {
    const currentEmployee = employees[employeeIndex];
    //console.log(currentEmployee);
    sendMail(currentEmployee.email, faker.lorem.paragraph());
  } */


  const sendMailToSelectedEmployee = (singleEmployee) =>
    sendMail(singleEmployee.email, emailContent);
  

  employees.forEach(sendMailToSelectedEmployee);
}

sendMailToAllEmployees("Music event");
sendMailToAllEmployees("Health Event");
