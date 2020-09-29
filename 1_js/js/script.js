let input = document.querySelector(".label_text");
let button = document.querySelector(".control_button");

button.addEventListener(
  "click",
  () => {
    if (+label_text.value > 16) {
      alert("Доступ откры");
    } else {
      alert("Доступ закрыт");
    }
  },
  false
);
