// scripts/quiz.js

let currentQuestion = 0;
let score = 0;
let quizData = [];

async function loadQuiz() {
  const res = await fetch("data/quiz.json");
  quizData = await res.json();
  showQuestion();
}

function showQuestion() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";

  if (currentQuestion >= quizData.length) {
    const passed = score >= quizData.length; // full score required

    quizContainer.innerHTML = `
      <h2>${passed ? "🎉 You Passed!" : "🧐 Quiz Completed"}</h2>
      <p>You scored <strong>${score}</strong> out of ${quizData.length}</p>
      <button onclick="resetQuiz()">Retake Quiz</button>
    `;

    // Save pass state
    localStorage.setItem("quizPassed", passed);

    // Enable the certificate button if passed
    const certBtn = document.getElementById("certButton");
    if (passed) certBtn.removeAttribute("disabled");
    else certBtn.setAttribute("disabled", true);

    return;
  }

  const q = quizData[currentQuestion];
  const section = document.createElement("div");
  section.className = "quiz-question";
  section.innerHTML = `
    <h3>Question ${currentQuestion + 1}:</h3>
    <p>${q.question}</p>
    <div class="quiz-options">
      ${q.options
        .map(
          (opt) => `
        <button onclick="submitAnswer('${opt}')">${opt}</button>
      `
        )
        .join("")}
    </div>
  `;
  quizContainer.appendChild(section);
}

function submitAnswer(answer) {
  const correct = quizData[currentQuestion].answer;
  const buttons = document.querySelectorAll(".quiz-options button");

  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("correct");
    } else if (btn.textContent === answer) {
      btn.classList.add("incorrect");
    }
  });

  const quizContainer = document.getElementById("quiz");

  if (answer !== correct) {
    const feedback = document.createElement("p");
    feedback.textContent = "Not quite! That wasn’t the correct answer.";
    feedback.style.color = "#b71c1c";
    feedback.style.fontWeight = "bold";
    feedback.style.marginTop = "10px";
    feedback.style.fontSize = "1em";
    quizContainer.appendChild(feedback);
  }

  setTimeout(() => {
    if (answer === correct) score++;
    currentQuestion++;
    showQuestion();
  }, 2000); // brief delay before moving on
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuiz();
}

document.addEventListener("DOMContentLoaded", loadQuiz);
