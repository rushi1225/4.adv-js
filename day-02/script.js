//promises

const resPromise = fetch("https://dummyjson.com/users/4");

resPromise
  .then((data) => console.log(data))
  .catch((error) => {
    console.log("from .catch block");
    console.log(error);
  });

//access json file data
//

resPrhomise
  .then((data) => data.json())
  .then((obj) => console.log(obj))
  .catch((error) => console.log(error));

//
//
//access name in front end

function sendReq() {
  resPromise
    .then((rushi) => rushi.json())
    .then((obj) => {
      console.log(obj.firstName, obj.lastName);

    //   document.body.innerHTML = `welcome back ${obj.firstName}`;
      //or
      document.getElementsByTagName("h1")[0].innerHTML = `welcome back ${
        (obj.firstName , obj.lastName)
      }`;
    })

    .catch((error) => console.log(error));
}
