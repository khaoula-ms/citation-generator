function displayCitation(respense) {
  new Typewriter("#citation", {
    strings: respense.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}
function generateCitation(event) {
  event.preventDefault();
  let apiKey = "e3b5tabo33a51804d1f4de7a47bd9d3f";
  let userInstruction = document.querySelector("#instruction");
  let prompt = `generate a short citation in any language about ${userInstruction.value}. please be precise and concise. make sure to mention the author of citation only inside a <strong> element`;
  let context =
    "you are a very knowledgeable AI Assistant who helps people get short helpful precise citation in basic HTML.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let citation = document.querySelector("#citation");
  citation.classList.remove("hidden");
  citation.innerHTML = `<div class="blink_me">⏳</div> looking for a Citatin about ${userInstruction.value} <br /> please wait... 🤔`;
  axios.get(apiUrl).then(displayCitation);
}
let generatorForm = document.querySelector("#citation-generator");
generatorForm.addEventListener("submit", generateCitation);
