const headerForm = document.querySelector(".content-form");
const btnFormHeader = document.querySelectorAll(".button");
btnFormHeader.forEach((elem) => {
  elem.addEventListener("click", () => {
    headerForm.classList.add("active");
  });
});
const btnClosedForm = document.querySelector(".button-closed");
btnClosedForm.addEventListener("click", () => {
  headerForm.classList.remove("active");
});
