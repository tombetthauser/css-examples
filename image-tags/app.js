document.addEventListener("DOMContentLoaded", () => {
  const div1 = document.querySelector(".image-6");
  let div1Image = 1;
  div1.addEventListener("click", () => {
    if (div1Image === 1) {
      div1Image = 2;
    } else {
      div1Image = 1;
    }

    div1.style.backgroundImage = `url("./images/cat-${div1Image}.jpg")`
  })
  
  
  // const div2 = document.querySelector(".image-7");
  // let div2Image = 1;
  // setInterval(() => {
  //   if (div2Image === 1) {
  //     div2Image = 2;
  //   } else {
  //     div2Image = 1;
  //   }
  
  //   div2.style.backgroundImage = `url("./images/cat-${div2Image}.jpg")`
  // }, 1500)
});