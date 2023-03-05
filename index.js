setInterval(() => {
  let date = new Date();
  let element = document.getElementById("clock-div");
  element.innerHTML = date;
}, 1000);
