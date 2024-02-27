function generateCitation(event) {
  event.preventDefault();
  new Typewriter("#citation", {
    strings: ["Hello", "World"],
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}
let generatorForm = document.querySelector("#citation-generator");
generatorForm.addEventListener("submit", generateCitation);
