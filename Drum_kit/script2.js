let currentAudioElement = null;
let input = document.getElementById("story");

document.addEventListener("keypress", (e) => {
  handleEvent(e);
  console.log("KEYPRESS");
});

var buttons = document.querySelectorAll(".delete-button");

// Add click event listener to each button
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log("Button clicked");
    handleEvent(e);
  });
});

function handleEvent(e) {
  let audioElement;

  // Pause and reset the current audio if there's one playing
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement.currentTime = 0;
  }

  // Play audio corresponding to the clicked button or key
  if (
    e.type === "click" ||
    (e.type === "keypress" &&
      ((e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 97 && e.keyCode <= 122)))
  ) {
    let key =
      e.type === "click"
        ? e.target.id
        : String.fromCharCode(e.keyCode).toUpperCase();
    console.log("Key: " + key);
    input.value += key + " ";

    audioElement = document.getElementById(key).children[0];
    console.log("audioElement: " + audioElement);
    console.log(key);
    // Add the text corresponding to the clicked button or key to the story

    if (audioElement) {
      audioElement.play();
      currentAudioElement = audioElement;
    }
  }
}
let stop = document.getElementById("stop");
stop.addEventListener("click", () => {
  console.log("Input value before:", input.value); // Log input value before replacing "stop"

  input.value = input.value.replace("stop", "").trim(); // Remove "stop" from the input value
  input.value += " ";
  console.log("Input value after:", input.value); // Log input value after replacing "stop"
  audioElement.pause();
});

let restart = document.getElementById("restart");
restart.addEventListener("click", () => {
  input.value = "";
  window.location.reload();
});
