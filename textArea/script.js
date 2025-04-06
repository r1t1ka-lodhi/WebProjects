const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxChars = 250;

textarea.addEventListener("input", () => {
  let currentLength = textarea.value.length;

  // Enforce max length and update count
  if (currentLength > maxChars) {
    textarea.value = textarea.value.substring(0, maxChars);
    currentLength = maxChars;
  }

  charCount.textContent = `${currentLength} / ${maxChars}`;

  // Toggle red border when max is reached
  if (currentLength === maxChars) {
    textarea.classList.add("limit-reached");
  } else {
    textarea.classList.remove("limit-reached");
  }
});
