const secondhand = document.querySelector(".sec-hand");
const minutehand = document.querySelector(".min-hand");
const hourhand = document.querySelector(".hour-hand");

function setdate() {
  const now = new Date();
  const sec = now.getSeconds();
  const secdegree = (sec / 60) * 360 + 90; //getting the degree of seconds
  //console.log(sec);
  secondhand.style.transform = `rotate(${secdegree}deg)`;

  const min = now.getMinutes();
  const mindegree = (min / 60) * 360 + 90;
  minutehand.style.transform = `rotate( ${mindegree}deg )`;
  // console.log(min);
  const hour = now.getHours();
  const hourdegree = (hour / 12) * 360 + 90;
  hourhand.style.transform = `rotate( ${hourdegree}deg )`;
  console.log(hour);
}
setInterval(setdate, 1000);
