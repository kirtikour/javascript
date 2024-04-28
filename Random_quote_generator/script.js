async function generate() {
  try {
    var input = document.getElementById("noofquote").value;
    var ul = document.getElementById("quotes");

    ul.innerHTML = "";
    for (let i = 0; i < input; i++) {
      const quote = await fetchdata();
      if (quote != null) {
        const li = document.createElement("li");
        li.textContent = quote;
        ul.appendChild(li);
        li.style = consoleStyler(
          "black",
          "white",
          "15px",
          "5px",
          "center",
          "-7px 7px 7px 0 rgb(0, 0, 0, 0.2);"
        );
      } else {
        alert("Unable to retrive a quote at this time");
      }
    }
  } catch (error) {
    console.error("There was a problem in fetching...", error);
    alert("Unable tp Generate Quotes at this time. ");
  }
}

function consoleStyler(color, background, fontSize, padding, textalign, a) {
  style = `color: ${color};`;
  style += `background: ${background};`;
  // style += `border:${"0.5px solid " + color};`;
  style += `font-size: ${fontSize};`;
  style += `padding:${padding};`;
  style += `text-align:${textalign};`;
  style += `border-radius: 8px;`;
  style += `box-shadow:${a};`;
  style += `margin-top: 5px;`;
  style += `margin-bottom:5px;`;
  style += `width: 80%;`;
  style += `height: 40px;`;
  style += `list-style:none;`;
  return style;
}

async function fetchdata() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const randomindex = Math.floor(Math.random() * data.length);
    const quote = `"${data[randomindex].text}" -  ${data[randomindex].author}`;
    return quote;
  } catch (error) {
    console.error("There was a problem fetching the quote:", error);
    return null;
  }
}
