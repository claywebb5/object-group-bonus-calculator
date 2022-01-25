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

for (let employee of employees){
  employee.annualSalary = Number(employee.annualSalary);
  // console.log(employee.annualSalary);
}; // End for loop to convert annualSalary to an integer

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
let empBaseBonusSum = 0;
function baseBonus(employee){
    if (employee.reviewRating <= 2){
      empBaseBonusSum = 0;
      console.log('No Bonus', employee.annualSalary * 0);
    }
    else if (employee.reviewRating === 3){
      empBaseBonusSum = .04;
      console.log('4% Bonus', employee.annualSalary * .04);
    }
    else if (employee.reviewRating === 4){
      empBaseBonusSum = .06;
      console.log('6% Bonus', employee.annualSalary * .06);
    }
    else if (employee.reviewRating === 5){
      empBaseBonusSum = .1;
      console.log('10% Bonus', employee.annualSalary * .1);
    }
    console.log(empBaseBonusSum);
    
   if (employee.employeeNumber.length == 4){
     console.log('hey additional 5%');
   }
   if (employee.annualSalary > 65000){
     console.log('Bonus down 1%');
     
   }

  return employee.name;
}

console.log(baseBonus(employees[0]));
console.log(baseBonus(employees[1]));
console.log(baseBonus(employees[2]));
console.log(baseBonus(employees[3]));
console.log(baseBonus(employees[4]));

function additionalBonus(employee){
  console.log('In additionalBonus');
  if (employee.length == 4) {
    employee.annualSalary * .05
  }
}
console.log(additionalBonus(employees[0]));
