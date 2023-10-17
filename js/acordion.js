///

////

//

/* document.querySelectorAll(".acordion_clickon").forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      document
        .querySelectorAll(".content")
        .forEach((el) => (el.style.maxHeight = null));
    } else {
      document
        .querySelectorAll(".content")
        .forEach((el) => (el.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}); */
/////ВОТ ЗТОТ АКАРДИОН///////
const oll = document.querySelectorAll(".acordion_clickon");
oll.forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      document
        .querySelectorAll(".content")
        .forEach((el) => (el.style.maxHeight = null));
      document.querySelectorAll(".contentImg");
    } else {
      document
        .querySelectorAll(".content")
        .forEach((el) => (el.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px";
      document;
    }
  });
});
////

////

//

const butoonsClick = document.querySelectorAll(".butoons-click");
butoonsClick.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (element.classList.contains("butoons-click1")) {
      element.classList.remove("butoons-click");
    } else {
      element.classList.add("butoons-click1");
    }
  });
});
