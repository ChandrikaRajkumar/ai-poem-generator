index.js

const form = document.querySelector("#poem-form");
const topicInput = document.querySelector("#topic");
const poem = document.querySelector("#poem");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const topic = topicInput.value.trim();

  if (!topic) {
    return;
  }

  poem.textContent = `✨ A Poem About ${topic} ✨

Beneath the sky, the world feels new,
A little dream comes into view.
The winds carry whispers through the air,
And magic finds us everywhere.

Every moment, a story to tell,
A little wonder, a wishing well.
And in this world of endless dreams,
${topic} shines brighter than it seems.`;
});
