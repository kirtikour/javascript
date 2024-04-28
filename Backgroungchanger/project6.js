const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.round(Math.random() * 16)];
  }
  return color;
};

let intervalid;
document.querySelector("#start").addEventListener("click", function () {
  function changecolor() {
    document.body.style.backgroundColor = randomcolor();
  }
  intervalid = setInterval(changecolor, 1000);
});
document
  .querySelector("#stop")
  .addEventListener("click", function stopchangecolor() {
    clearInterval(intervalid);
    //intervalid = null;
  });

const insert = document.getElementById("insert");
window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
<div class="color">

<table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>

</div>
`; // making of a class named color
});
