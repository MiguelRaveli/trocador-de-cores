const button = document.querySelector("button");

button.addEventListener("click", () => {
  const span = document.querySelector("span");
  const body = document.querySelector("body");
  if (body.style.backgroundColor === "red") {
    body.style.backgroundColor = "blue";
    span.innerText = "Blue";
  }else{
    body.style.backgroundColor = "red";
    span.innerText = "Red";
  }
});
