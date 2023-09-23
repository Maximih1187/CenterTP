const headerEL = document.getElementById("header");
const headerNav2 = document.getElementById("header_navbar2");

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  if (scrollPos > 90) {
    headerEL.classList.add("header_mini");
  } else headerEL.classList.remove("header_mini");
});

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  if (scrollPos > 30) {
    headerNav2.classList.add("header_navbar3");
  } else headerNav2.classList.remove("header_navbar3");
});

//

const questionIcon = document.getElementById("question_icon");
const questionText = document.getElementById("block-right_question_answer");
questionIcon.onclick = function () {
  questionText.classList.add("block-right_question_answer2");
  questionText.classList.remove("block-right_question_answer");
  questionIcon.classList.add("question_icon2");
};

//
//
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
