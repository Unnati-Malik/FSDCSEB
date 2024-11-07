
const questions = [
    {
      Question: "In what year did the Great October Socialist Revolution take place?",
      Answer: [
        { text: "1917", correct: false },
        { text: "1923", correct: true },
        { text: "1999", correct: false },
        { text: "1920", correct: false },
      ],
    },
    {
      Question: "Which planet in the solar system is known as the “Red Planet”?",
      Answer: [
        { text: "Venus", correct: false },
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "None", correct: false },
      ],
    },
    {
      Question: "What is the capital of Japan?",
      Answer: [
        { text: "Beijing", correct: false },
        { text: "Tokyo", correct: true },
        { text: "Seoul", correct: false },
        { text: "Bangkok", correct: false },
      ],
    },
    {
      Question: "What gas is used to extinguish fires?",
      Answer: [
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: true },
        { text: "Carbon Dioxide", correct: false},
        { text: "Helium", correct: false },
      ],
    },
    {
      Question: "In what year was the first international modern Olympiad held?",
      Answer: [
        { text: "1896", correct: true },
        { text: "1900", correct: false },
        { text: "1912", correct: false },
        { text: "1924", correct: false },
      ],
    },
  ];
  
  const questionElement = document.getElementById("questions");
  const answerButton = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const prevButton = document.getElementById("prev-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    prevButton.style.display = "none";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.Question}`;
  
    currentQuestion.Answer.forEach((answer, index) => {
      const label = document.createElement("label");
      label.classList.add("option");
  
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "answer";
      radio.value = answer.correct;
      radio.classList.add("radio");
      radio.addEventListener("click", selectAnswer);
  
      const answerText = document.createTextNode(answer.text);
  
      label.appendChild(radio);
      label.appendChild(answerText);
      answerButton.appendChild(label);
    });
  
    prevButton.style.display = currentQuestionIndex > 0 ? "block" : "none";
    nextButton.style.display = currentQuestionIndex < questions.length - 1 ? "block" : "none";
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
      answerButton.removeChild(answerButton.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const isCorrect = e.target.value === "true";
    if (isCorrect) {
      score++;
    }
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      handleprevButton();
    }
  });
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `Your Score: ${(score / questions.length) * 100}%`;
    nextButton.innerHTML = "Attempt Again";
    nextButton.style.display = "block";
    prevButton.style.display = "none";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function handleprevButton() {
    currentQuestionIndex--;
    showQuestion();
  }
  
  startQuiz();