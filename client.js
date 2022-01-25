const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// for (let employee of employees){
//   employee.annualSalary = Number(employee.annualSalary);
//   // console.log(employee.annualSalary);
// }; // End for loop to convert annualSalary to an integer

// let employeeInfo = [];

// function newEmpName

// function newEmpProperties(name, employeeNumber, annualSalary, reviewRating){
//   let empInfo = {};
//     empInfo.name = name;
//     empInfo.employeeNumber = employeeNumber;
//     empInfo.annualSalary = annualSalary;
//     empInfo.reviewRating = reviewRating;
//   employeeInfo.push(empInfo);
//   return employeeInfo;
// }
// newEmpProperties('Mayella', '89068', 35000, 1);
// console.log(employeeInfo);

function bonusPercent(employee){

    if (employee.reviewRating <= 2){
      console.log('No Bonus');
    }
    else {
      console.log('Bonus!');
      
    }

  return employee;
}

console.log(bonusPercent(employees[0]));

