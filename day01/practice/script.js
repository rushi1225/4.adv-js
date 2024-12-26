export function checkPrime(num) {
  //logic
  let isPrime = true;
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

//
// filter array and find +ve num   1,2,-3,-6,-10,7,8,9

export function positiveArray(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

//given array
//using filter-->filter out

export function evenArray(arr) {
  const newArray = arr.filter((num) => {
    num % 2 === 0;
  });
  return newArray;
}
//
export function getEvenArray(arr) {
  return arr.filter((num) => num % 2 === 0);
}


//


const completeTodos(todo){
    return arr.filter((num)=>num)
}



//
// .map 
// perform common opration on all 


