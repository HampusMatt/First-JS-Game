
const questions = [
    {
      id: 1,
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
      questionText: 'The beluga whale is often reffered to as the "canaries of the sea" due to their distinctive vocalizations',
      imgSrc: 'question_1.png',
      options: [
        'Ture',
        'False',
      ],
      correctAnswer: 'True'
    },
    {
      id: 4,
      questionText: 'The American bald eagle is an iconic bird, but has since 1970 been considered an endangered species',
      imgSrc: 'question_1.png',
      options: [
        'True',
        'False',
      ],
      correctAnswer: 'False'
    },
    {
      id: 5,
      questionText: 'A giraffe has the same number of cervical vertebraes as a human',
      imgSrc: 'question_1.png',
      options: [
        'True',
        'False',
      ],
      correctAnswer: 'True'
    },
    {
      id: 6,
      questionText: 'A female house-fly can lay upp to 300 eggs in a lifetime',
      imgSrc: 'question_1.png',
      options: [
        'True',
        'False',
      ],
      correctAnswer: 'False'
    },
    {
      id: 7,
      questionText: 'Aside from the elephant and the rhino, the hippopotamus is the biggest land mammal',
      imgSrc: 'question_1.png',
      options: [
        'True',
        'False',
      ],
      correctAnswer: 'True'
    },
    {
      id: 8,
      questionText: 'A horse of either sex between the ages of 2 and 4 is called a "colt"',
      imgSrc: 'question_1.png',
      options: [
        'True',
        'False',
      ],
      correctAnswer: 'False'
    },
    {
      id: 9,
      questionText: 'Statement 9',
      imgSrc: 'question_1.png',
      options: [
        'True',
        'False',
      ],
      correctAnswer: 'True'
    },
    {
      id: 10,
      questionText: 'Statement 10',
      imgSrc: 'question_1.png',
      options: [
        'True',
        'False',
      ],
      correctAnswer: 'True'
    }
  ]

  const startBtn = document.querySelector(".start-btn");
  const trueBtn = document.querySelector(".trueA");
  const falseBtn = document.querySelector(".falseA");
  const question = document.querySelector(".question");
  const img = document.querySelector("image");
  const playAgain = document.querySelector(".play-again");
  
  
  let score = 0;
  let currentItem = 0;

  // Event listeners for btns

  startBtn.addEventListener("click", function () {
    question.textContent = questions[currentItem].questionText;
    startBtn.classList.add("hide");
    falseBtn.classList.remove("start-game");
    trueBtn.classList.remove("start-game");
  });

  trueBtn.addEventListener("click", function() {
    checkAnswer(trueBtn);
  });

  falseBtn.addEventListener("click", function() {
    checkAnswer(falseBtn);
  });


// check answer function

function checkAnswer(button) {
  if (button.textContent === questions[currentItem].correctAnswer) {
    score++;
  }

  currentItem ++;
  if (currentItem === questions.length) {
    displayScore ();
  } else {
    question.textContent = questions[currentItem].questionText;
  }
}

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

  question.textContent = questions[currentItem].questionText;
})

// // Show answer key after the game
// checkAnswer.addEventListener("click", function () {
//   // make a list for every iteration of the array, pull the value of 1) id 2) questionText and 3) checkanswer.
//   // display that in a list (using the appendchild method????)
//   // I do want the score to still be visible, but the buttons need to be under the new list.
// })