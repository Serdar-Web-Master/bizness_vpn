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

const admin = 250179;  
const aiya = 160491;

btn.addEventListener("click", modalOpen);
close__block.addEventListener("click", modalClose);

modal__btn.addEventListener("click", checkInput);

function modalClose() {
  modal.style.display = "none";
}

function modalOpen() {
  modal.style.display = "block";
}

function checkInput() {
  const kod = modal__input.value;
  console.log(kod);
  if (kod == password_1 || kod == admin || kod == aiya) {
    ssylka1.click();
  }
  if (kod == password_2 || kod == admin || kod == aiya) {
    ssylka2.click();
  }
  if (kod == password_3 || kod == admin || kod == aiya) {
    ssylka3.click();
  }
  if (kod == password_4 || kod == admin || kod == aiya) {
    ssylka4.click();
  } else {
    alert("Код Неверный");
  }
}
