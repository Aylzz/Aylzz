
const questions = [
  {
    img: "https://img1.pixhost.to/images/6841/616466993_uploaded_image.jpg",
    answer: "Takanashi Hoshino"
  },
  {
    img: "https://img1.pixhost.to/images/6841/616478154_uploaded_image.jpg",
    answer: "Tokisaki Kurumi"
  },
];

let current = 0;
let score = 0;

function showQuestion() {
  document.getElementById("quiz-image").src = questions[current].img;
  document.getElementById("answer-input").value = "";
  document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer-input").value.trim().toLowerCase();
  const correctAnswer = questions[current].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("feedback").innerText = "✅ Benar!";
  } else {
    document.getElementById("feedback").innerText = `❌ Salah! Jawaban: ${questions[current].answer}`;
  }

  current++;

  if (current < questions.length) {
    setTimeout(() => {
      showQuestion();
      updateScore();
    }, 1000);
  } else {
    document.getElementById("quiz-image").style.display = "none";
    document.getElementById("answer-input").style.display = "none";
    document.querySelector("button").style.display = "none";
    document.getElementById("feedback").innerText = `Game selesai! Skor kamu: ${score}/${questions.length}`;
  }
}

function updateScore() {
  document.getElementById("score").innerText = `Soal ${current + 1} dari ${questions.length}`;
}

window.onload = () => {
  showQuestion();
  updateScore();
};
