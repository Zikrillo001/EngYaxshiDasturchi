// Array of question links
const questionLinks = [
  "https://robocontest.uz/tasks/0001",
  "https://robocontest.uz/tasks/1159",
  "https://robocontest.uz/tasks/0232",
  "https://robocontest.uz/tasks/1147",
  "https://robocontest.uz/tasks/0709",
  // Add more links as needed
];

// Container to display the questions
const container = document.getElementById("question-container");

// Dynamically generate buttons
questionLinks.forEach((link, index) => {
  const button = document.createElement("button");
  button.textContent = `Question ${index + 1}`;
  button.classList.add("question-button");
  button.onclick = () => {
    window.open(link, "_blank");
  };
  container.appendChild(button);
});
