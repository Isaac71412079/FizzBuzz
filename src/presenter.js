import generarFizzBuzz from "./fizzbuzz";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = Number.parseInt(first.value);

  div.innerHTML = "<p>" + generarFizzBuzz(number) + "</p>";
});