// object distructuring

 const person = {
  firstName: "Rushikesh",
  lastNmae: "bhingare",
  city: "Nagar",
};

// long code

// const firstName = person.firstName;
// const lastNmae = person.lastNmae;
// const city = person.city;

// using obj distructuring
// order is not imp

const { firstName, lastNmae, city } = person;

console.log(firstName, lastNmae, city);

//
//
// array destructing
const arr = ["punit", "superstar", "bhau"];
// order is imp
const [fName, miidleName, lName] = arr;
console.log(lName);



//
//
