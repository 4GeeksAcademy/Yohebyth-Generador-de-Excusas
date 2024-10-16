/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const randVal = numWords => {
    return Math.floor(Math.random() * numWords);
  };

  let Imprimir = `${who[randVal(4)]} ${action[randVal(4)]} ${
    what[randVal(3)]
  } ${when[randVal(5)]}`;

  document.querySelector("#excuse").innerHTML = Imprimir;
};
