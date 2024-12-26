// export add to aceess code on main.js

export const person = {
  firstName: "Rushikesh",
  lastNmae: "bhingare",
  city: "Nagar",
};
const { firstName, lastNmae, city } = person;

export function doSomething() {
  console.log("i am doing something");
}

//
//export default

const son = {
  fName: "Hello this is fname",
};
const { fName } = son;


export default son;
