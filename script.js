// Array of question links
const questionLinks = [
  "https://robocontest.uz/tasks",
  "https://robocontest.uz/tasks",
  "https://robocontest.uz/tasks",
  "https://robocontest.uz/tasks",
  "https://robocontest.uz/tasks",
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
