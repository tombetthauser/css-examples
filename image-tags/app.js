document.addEventListener("DOMContentLoaded", () => {
  const div1 = document.querySelector(".image-7");
  let div1Image = 1;
  
  div1.addEventListener("click", () => {
    if (div1Image === 1) {
      div1Image = 2;
    } else {
      div1Image = 1;
    }

    div1.style.backgroundImage = `url("./images/cat-${div1Image}.jpg")`
  })
});