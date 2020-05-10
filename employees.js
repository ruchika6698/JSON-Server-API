var faker = require('faker')

	function generateEmployees()
	{

   	var employees=[]

   	for(var id=1;id<=50;id++)
   	{
      	var firstName = faker.name.firstName();
      	var lastName = faker.name.lastName();
      	var email = faker.internet.email();
      	var phoneNumberFormat = faker.phone.phoneNumberFormat();
      	var companyName = faker.company.companyName();
      	var city = faker.address.city();

      	employees.push({
         	"id":id,
         	"First_name" : firstName,
         	"Last_name":lastName,
         	"email" : email,
         	"Mobile_Number" : phoneNumberFormat,
         	"Company" : companyName,
         	"City" : city
      	})
   	}
   	return { "employees" : employees }
	}

module.exports = generateEmployees
