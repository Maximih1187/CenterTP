const headerEL = document.getElementById("header");
const headerNav2 = document.getElementById("header_navbar2");

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  if (scrollPos > 50) {
    headerEL.classList.add("header_mini");
  } else headerEL.classList.remove("header_mini");
});

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  if (scrollPos > 40) {
    headerNav2.classList.add("header_navbar3");
  } else headerNav2.classList.remove("header_navbar3");
});

//

const questionIcon = document.getElementById("question_icon");
const questionText = document.getElementById("block-right_question_answer");
const rightQuestion = document.querySelector(".block-right_question");
questionIcon.onclick = function () {
  questionText.classList.toggle("block-right_question_answer2");
  questionText.classList.toggle("block-right_question_answer");
  questionIcon.classList.toggle("question_icon2");
  rightQuestion.classList.toggle("block-right_question1");
};
//
const questionIcon3 = document.getElementById("question_icon3");
const questionText3 = document.getElementById("block-right_question_answer3");
const rightQuestion3 = document.querySelector(".block-right_question3");
questionIcon3.onclick = function () {
  questionIcon3.classList.toggle("question_icon4");
  questionText3.classList.toggle("block-right_question_answer3");
  questionText3.classList.toggle("block-right_question_answer4");
  rightQuestion3.classList.toggle("block-right_question4");
};
//
const questionIcon5 = document.getElementById("question_icon5");
const questionText5 = document.querySelector(".block-right_question_answer5");
const rightQuestion5 = document.querySelector(".block-right_question5");
questionIcon5.onclick = function () {
  questionIcon5.classList.toggle("question_icon6");
  questionText5.classList.toggle("block-right_question_answer5");
  questionText5.classList.toggle("block-right_question_answer6");
  rightQuestion5.classList.toggle("block-right_question6");
};
//
const questionIcon7 = document.getElementById("question_icon7");
const questionText7 = document.querySelector(".block-right_question_answer7");
const rightQuestion7 = document.querySelector(".block-right_question7");
questionIcon7.onclick = function () {
  questionIcon7.classList.toggle("question_icon8");
  questionText7.classList.toggle("block-right_question_answer7");
  questionText7.classList.toggle("block-right_question_answer8");
  rightQuestion7.classList.toggle("block-right_question8");
};
//

let selector = document.querySelector("#tel");
let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

let validation = new JustValidate("form");

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Введите имя!",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Минимум 2 символа!",
    },
  ])
  .addField("#tel", [
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length > 0);
      },
      errorMessage: "Введите телефон",
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 10);
      },
      errorMessage: "Введите телефон полностью",
    },
  ])
  .addField("#msg", [
    {
      rule: "required",
      errorMessage: "Введите сообщение!",
    },
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Минимум 10 символа!",
    },
  ])
  .onSuccess(async function () {
    let data = {
      name: document.getElementById("name").value,
      tel: selector.inputmask.unmaskedvalue(),
      msg: document.getElementById("msg").value,
    };

    let response = await fetch("mail.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    let result = await response.text();

    alert(result);
  });
/////ОБРАБОТЧИК СОБЫТИЙ

/* const btnMenu = document.querySelector(".header_navbar2-menu");
const btnGet = document.querySelector(".button_consult-navbar");
btnMenu.addEventListener("mouseenter", (e) => {
  btnMenu.classList.add("header_navbar2-menu1");
  btnGet.classList.add("button_consult-navbar1");
  console.log(e);
});
btnMenu.addEventListener("mouseout", (e) => {
  btnGet.classList.remove("button_consult-navbar1");
  btnMenu.classList.remove("header_navbar2-menu1");
  console.log(e);
}); */
const btnMenu = document.querySelector(".header_navbar2-menu22");
btnMenu.addEventListener("mouseenter", (e) => {
  btnMenu.setAttribute("src", "img/3.png");
});
btnMenu.addEventListener("mouseout", (e) => {
  btnMenu.setAttribute("src", "img/menu.png");
});
///
///

/* const questionIco = document.querySelector(".question_icon");
const questionAnswer = document.querySelector("#block-right_question_answer");
questionIcon.addEventListener("click", () => {
  questionIco.classList.add("");
}); */

/* let getName = {
  Benko: "максим",
  age: 36,
};
 */
