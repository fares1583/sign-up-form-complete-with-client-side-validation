let inputs = document.querySelectorAll(".container .inputs input");
let btn = document.querySelector(" .button");
let inputBox = document.querySelector(" .inputs");
let form = document.querySelector("form");
let first = document.getElementById("first-name");
let last = document.getElementById("last-name");
let email = document.getElementById("email");
let pass = document.getElementById("pass");

console.log(form);
form.onsubmit = function (e) {
  let firstName = false;
  let lastName = false;
  let emailBool = false;
  let passBool = false;

  // validation First name

  if (first.value === "") {
    first.classList.add("error");

    // create a span to parent
    let span = document.createElement("span");
    span.classList.add("wrong");
    first.parentNode.insertBefore(span, first);
    span.textContent = `${first.getAttribute("placeholder")} cannot be empty`;
    first.placeholder = "";

    // create error img
    let img = document.createElement("img");
    img.src = "./images/icon-error.svg";
    img.alt = img.className = "error-photo";
    first.parentNode.insertBefore(img, first);
  } else {
    firstName = true;
  }

  // validation last name

  if (last.value === "") {
    last.classList.add("error");

    // create a span to parent
    let span = document.createElement("span");
    span.classList.add("wrong");
    span.textContent = `${last.getAttribute("placeholder")} cannot be empty`;
    last.placeholder = "";
    last.parentNode.insertBefore(span, last);

    let img = document.createElement("img");
    img.src = "./images/icon-error.svg";
    img.alt = img.className = "error-photo";
    last.parentNode.insertBefore(img, last);
  } else {
    lastName = true;
  }

  // // check if the input is email

  if (email.value === "") {
    email.classList.add("error");

    let span = document.createElement("span");
    span.classList.add("wrong");
    span.textContent = `Looks Like This Is Not an Email `;
    email.placeholder = "email@example/com";
    email.parentNode.insertBefore(span, email);

    let img = document.createElement("img");
    img.src = "./images/icon-error.svg";
    img.alt = img.className = "error-photo";
    email.parentNode.insertBefore(img, email);
  } else {
    emailBool = true;
  }

  //  check if the length input:pass  more than 8 chars

  if (pass.value === "" && pass.value.length <= 8) {
    pass.classList.add("error");

    let span = document.createElement("span");
    span.classList.add("wrong");
    span.textContent = `The password must be more than 8 characters `;
    pass.parentNode.insertBefore(span, pass);

    let img = document.createElement("img");
    img.src = "./images/icon-error.svg";
    img.alt = img.className = "error-photo";
    pass.parentNode.insertBefore(img, pass);
  } else {
    passBool = true;
  }

  if (
    firstName === false ||
    lastName === false ||
    emailBool === false ||
    passBool === false
  ) {
    e.preventDefault();
  }
};

// =========================
// function check() {
//   // span.textContent = "";

//   inputs.forEach((input) => {
//     if (input.value === "") {
//       input.classList.add("error");

//       // create a span to parent
//       let span = document.createElement("span");
//       span.classList.add("wrong");
//       input.parentNode.insertBefore(span, input);
//       span.textContent = `${input.getAttribute("placeholder")} cannot be empty`;
//       input.placeholder = "";

//       // check if the input is email
//       if (input.id === "email") {
//         span.textContent = `Looks Like This Is Not an Email `;
//         input.placeholder = "email@example/com";
//         span.textContent = `Looks Like This Is Not an Email `;
//       }

//       //  check if the length input:pass  more than 8 chars

//       let pass = document.getElementById("pass");

//       if (input.id === "pass") {
//         if (pass.value.length <= 8) {
//           span.textContent = `The password must be more than 8 characters `;
//         }
//       }

//       // create img
//       let img = document.createElement("img");
//       img.src = "./images/icon-error.svg";
//       img.alt = img.className = "error-photo";
//       input.parentNode.insertBefore(img, input);
//     } else {
//     }
//   });
// }
