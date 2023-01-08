
const QUESTIONS = [
    {
      id: 2,
      questionText: 'The sloth is so slow moving that algae can grow in their fur',
      imgSrc: 'question_1.png',
      options: [
        'True',
        'False',
      ],
      correctAnswer: 'True'
    },
    {
      id: 2,
      questionText: 'The horn of a rhino is actually made of hair',
      imgSrc: 'question_1.png',
      options: [
        'True',
        'False',
      ],
      correctAnswer: 'True'
    },
    {
      id: 3,
      questionText: 'W333333 of USA?',
      imgSrc: 'question_1.png',
      options: [
        'Ture',
        'False',
      ],
      correctAnswer: 'True'
    },
    {
      id: 1,
      questionText: 'What is the 4444444 of USA?',
      imgSrc: 'question_1.png',
      options: [
        'DC',
        'New York',
      ],
      correctAnswer: 'DC'
    },
    {
      id: 1,
      questionText: 'What is the5555555 capital of USA?',
      imgSrc: 'question_1.png',
      options: [
        'DC',
        'New York',
      ],
      correctAnswer: 'DC'
    }
  ]

  const startBtn = document.querySelector(".start-btn");
  const trueBtn = document.querySelector(".trueA");
  const falseBtn = document.querySelector(".falseA");
  const question = document.querySelector(".question");
  const playAgain = document.querySelector(".play-again");
  
  let score = 0;
  let currentItem = 0;

  startBtn.addEventListener("click", function () {
    question.textContent = QUESTIONS[currentItem].questionText;
    startBtn.classList.add("hide");
    falseBtn.classList.remove("start-game");
    trueBtn.classList.remove("start-game");
  });

  trueBtn.addEventListener("click", function () {
    if (trueBtn.textContent === QUESTIONS[currentItem].correctAnswer) {
      score++;
    }

    currentItem ++;
    if (currentItem === QUESTIONS.length) {
    displayScore ();
    } else {
    question.textContent = QUESTIONS[currentItem].questionText;
    }
  });

  falseBtn.addEventListener("click", function () {
    if (falseBtn.textContent === QUESTIONS[currentItem].correctAnswer) {
      score++;
    }

    currentItem ++;
    if (currentItem === QUESTIONS.length) {
    displayScore ();
    } else {
    question.textContent = QUESTIONS[currentItem].questionText;
    }
  });

// display score function 

function displayScore() {
  const playerScore = document.querySelector(".score");
  playerScore.innerHTML = `You scored ${score} out of 10!`;
  if (score === 0) {
    playerScore.innerHTML += " That's just bad luck!";
  } else if (score > 0 && score <= 5) {
    playerScore.innerHTML += " You can do better than that!";
  } else if (score > 5 && score < 10) {
    playerScore.innerHTML += " Well done!";
  } else {
    playerScore.innerHTML += " Oh My! You sure know your animals!";
  }

  const sections = document.querySelectorAll(".main");
  sections.forEach(function(section) {
    section.classList.toggle("finnished-game");
  });
}

// Play again

playAgain.addEventListener ("click", function () {
  currentItem = 0;
  score = 0;
  
  const sections = document.querySelectorAll(".main");
  sections.forEach(function(section) {
    section.classList.toggle("finnished-game");
  });

  question.textContent = QUESTIONS[currentItem].questionText;
})