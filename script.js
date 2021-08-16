//adatok kivétele
document.getElementById("datas").onsubmit = function (event) {
    event.preventDefault();

  var message = document.querySelector(".message");

  var name = event.target.elements.name.value;
  var email = event.target.elements.email.value;
  var startDate = event.target.elements.startdate.value;
  var leaveDate = event.target.elements.leavedate.value;

  if (name === "") {
    message.classList.add("error");
    message.innerHTML = "Név megadása kötelező!";
  } else if (email === "" || !email.includes("@")) {
    message.classList.add("error");
    message.innerHTML = "Üres vagy helytelen e-mail megadás!";
  } else if (startDate === "" || leaveDate === "") {
    message.classList.add("error");
    message.innerHTML = "Dátum megadása kötelező!";
  } else if ( startTime>leaveTime ){
    message.classList.add("error");
    message.innerHTML = "A dátum megadása nem helyes!";
  } else{
    message.classList.add("error");
    message.innerHTML = "Sikeres árajánlat kérés!";
  }
};

async function sendOrder(){
fetch('http://localhost:8080/order', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
   body: JSON.stringify({
     // your expected POST request payload goes here
    name : document.getElementById('exampleFormControlInput1').value,
    email: document.getElementById('exampleFormControlInput2').value,
    roomType:  document.getElementById('exampleFormControlSelect1').value,
    head:  document.getElementById('exampleFormControlSelect2').value,
    supply:  document.getElementById('exampleFormControlSelect3').value,
    startDate:  document.getElementById('startdate').value,
    leaveDate:  document.getElementById('leavedate').value
      })
})
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
   console.log(error)
  })  
}

// Másik opció
// async function sendOrder() {
//   const url = "http://localhost:8080/order/";
//   await fetch(url, {
//     headers: new Headers({'content-type': 'application/json'}),
//     method: "POST",
//     body: JSON.stringify({
//         name : document.getElementById('exampleFormControlInput1').value,
//   })
//     .then(
//       (response) => response.json()
//       // same as function(response) {return response.text();}
//     )
// }