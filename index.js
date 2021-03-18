// Write your solution in this file!

const employee = {name:"John", streetAddress: "110 A"};

beforeEach(function () {
  for (const key in employee) {
    delete employee[key];
  }

  employee.name = 'Sam';
});




function updateEmployeeWithKeyAndValue(employee, key, value) {
  let coemployee= { ...employee};
  coemployee[key] = value;
  return coemployee;
}

beforeEach(function () {
  for (const key in employee) {
    delete employee[key];
  }

  employee.name = 'Sam';
});

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}


beforeEach(function () {
  for (const key in employee) {
    delete employee[key];
  }

  employee.name = 'Sam';
});


function deleteFromEmployeeByKey(employee, key) {

  let coemployee= { ...employee};
  delete coemployee[key];
  return coemployee;
}


beforeEach(function () {
  for (const key in employee) {
    delete employee[key];
  }

  employee.name = 'Sam';
});


function destructivelyDeleteFromEmployeeByKey(employee,key){
  let coemployee= { ...employee};
  delete employee[key];
  delete coemployee[key];
  return employee;
}


