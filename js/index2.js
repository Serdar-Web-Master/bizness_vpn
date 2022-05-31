const btn = document.querySelector(".btn");
const close__block = document.querySelector(".close__block");
const modal = document.querySelector(".modal");
const wrapper = document.querySelector(".wrapper");
const modal__input = document.querySelector(".modal__input");
const ssylka1 = document.querySelector(".ssylka1");
const ssylka2 = document.querySelector(".ssylka2");
const ssylka3 = document.querySelector(".ssylka3");
const ssylka4 = document.querySelector(".ssylka4");
const modal__btn = document.querySelector(".modal__btn");
const password = new Date().getDate();
const password2 = new Date().getHours();

const password_1 = password * password2 * 10;
console.log("password_1=" + password_1);

const password_2 = password * password2 * 20;
console.log("password_2=" + password_2);

const password_3 = password * password2 * 30;
console.log("password_3=" + password_3);

const password_4 = password * password2 * 40;
console.log("password_4=" + password_4);

btn.addEventListener("click", modalOpen);
close__block.addEventListener("click", modalClose);

modal__btn.addEventListener("click", checkInput);

function modalClose() {
  modal.style.display = "none";
}

function modalOpen() {
  modal.style.display = "block";
}

const admin = 250179;
const aiya = 160491;
const client1 = 638378; // Ira
const client2 = 393027;
const client3 = 835486;
const client4 = 365436;
const client5 = 632198;
const client6 = 179470;
const client7 = 152853;
const client8 = 937586;
const client9 = 136706;
const client10 = 935669;


function checkInput() {
  const kod = modal__input.value;
  console.log(kod);
  if (kod == password_1 || kod == admin || kod == aiya || kod == client1 || kod == client2 || kod == client3 || kod == client4 || kod == client5 || kod == client6 || kod == client7 || kod == client8 || kod == client9 || kod == client10) {
    ssylka1.click();
    console.log("ssylka1");
  }
  // if (kod == password_2 || kod == admin || kod == aiya) {
  //   ssylka2.click();
  //   console.log("ssylka2");
  // }
  // if (kod == password_3 || kod == admin || kod == aiya) {
  //   ssylka3.click();
  //   console.log("ssylka3");
  // }
  // if (kod == password_4 || kod == admin || kod == aiya) {
  //   ssylka4.click();
  //   console.log("ssylka4");
  // } 
  else {
    alert("Код Неверный");
  }
}
