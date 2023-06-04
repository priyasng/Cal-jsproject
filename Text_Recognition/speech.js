let speech = new SpeechSynthesisUtterance();
// Create a new SpeechSynthesisUtterance object

speech.lang = "en";
// Set the default language to English

let voices = [];
// Array to store available voices

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  // Get the available voices when the onvoiceschanged event is triggered

  speech.voice = voices[0];
  // Set the default voice to the first voice in the array

  let voiceSelect = document.querySelector("#voices");
  // Get the select element for choosing the voice

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
  // Add options for each voice to the select element
};

document.querySelector("#rate").addEventListener("input", () => {
  const rate = document.querySelector("#rate").value;
  speech.rate = rate;
  document.querySelector("#rate-label").innerHTML = rate;
  // Update the speech rate (speed) based on the input value
});

document.querySelector("#volume").addEventListener("input", () => {
  const volume = document.querySelector("#volume").value;
  speech.volume = volume;
  document.querySelector("#volume-label").innerHTML = volume;
  // Update the speech volume based on the input value
});

document.querySelector("#pitch").addEventListener("input", () => {
  const pitch = document.querySelector("#pitch").value;
  speech.pitch = pitch;
  document.querySelector("#pitch-label").innerHTML = pitch;
  // Update the speech pitch based on the input value
});

document.querySelector("#voices").addEventListener("change", () => {
  speech.voice = voices[document.querySelector("#voices").value];
  // Change the speech voice based on the selected option
});

document.querySelector("#start").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
  // Set the text to be spoken and start speech synthesis
});

document.querySelector("#pause").addEventListener("click", () => {
  window.speechSynthesis.pause();
  // Pause the speech synthesis
});

document.querySelector("#resume").addEventListener("click", () => {
  window.speechSynthesis.resume();
  // Resume the paused speech synthesis
});

document.querySelector("#cancel").addEventListener("click", () => {
  window.speechSynthesis.cancel();
  // Cancel the speech synthesis
});

document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector("textarea").value = "";
  // Clear the text area
});
