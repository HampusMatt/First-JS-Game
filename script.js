const questions = [
    {
      id: 1,
      questionText: 'The sloth is so slow moving that algae can grow in their fur',
      imgSrc: '',
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
  ];


const startBtn = document.querySelector(".start-btn");
const trueBtn = document.querySelector(".trueA");
const falseBtn = document.querySelector(".falseA");
const question = document.querySelector(".question");
const img = document.querySelector(".image");
const playAgain = document.querySelector(".play-again");

let score, currentItem;

function onStartButtonClick() {
    startBtn.classList.add("hide");
    falseBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    displayFirstQuestion();
}

function initQuizVariables() {
    score = 0;
    currentItem = 0;
}

function onTrueOptionClick() {
    checkAnswer(trueBtn.textContent);
}

function onFalseOptionClick() {
    checkAnswer(falseBtn.textContent);
}

function onPlayAgainClick() {
    initQuizVariables();
    resetQuizUI();
    displayFirstQuestion();
}

function displayFirstQuestion () {
    question.textContent = questions[currentItem].questionText;
    img.src = questions[currentItem].imgSrc;

    trueBtn.style.backgroundColor = '';
    falseBtn.style.backgroundColor = '';
}

function displayNextQuestion() {
    currentItem ++;
    question.textContent = questions[currentItem].questionText;

    // Reset the background color of the buttons
  trueBtn.style.backgroundColor = '';
  falseBtn.style.backgroundColor = '';
}

function resetQuizUI() {
    const sections = document.querySelectorAll(".main");
    sections.forEach(function(section) {
      section.classList.toggle("hide");
    });
}


// check answer function
// function checkAnswer(selectedOption) {
//   if (selectedOption === questions[currentItem].correctAnswer) {
//     score++;
//   }

//   if (currentItem === questions.length - 1) {
//     onGameOver();
//   } else {
//     setTimeout (displayNextQuestion, 1000);
//   }
// }

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentItem].correctAnswer) {
      score++;
      // Set the background color of the clicked button to green
      document.activeElement.style.backgroundColor = 'green';
    } else {
      // Set the background color of the clicked button to red
      document.activeElement.style.backgroundColor = 'red';
    }
  
    if (currentItem === questions.length - 1) {
      onGameOver();
    } else {
      setTimeout (displayNextQuestion, 1000);
    }
  }


function onGameOver() {
    displayScore();
    resetQuizUI();
}

// display score function
function displayScore() {
  const playerScore = document.querySelector(".score");
  playerScore.innerHTML = `You scored ${score} out of 10!`;

  let remark = '';
  if (score === 0) {
    remark = " That's just bad luck!";
  } else if (score > 0 && score <= 5) {
    remark = " You can do better than that!";
  } else if (score > 5 && score < 10) {
    remark = " Well done!";
  } else {
    remark = " Oh My! You sure know your animals!";
  }

  playerScore.innerHTML += remark;
}

// Play again
// // Show answer key after the game
// showAnswer.addEventListener("click", function () {
//   // make a list for every iteration of the array, pull the value of 1) id 2) questionText and 3) checkanswer.
//   // display that in a list (using the appendchild method????)
//   // I do want the score to still be visible, but the buttons need to be under the new list.
// })

function initEventListeners() {
    // Event listeners for btns
    startBtn.addEventListener("click", onStartButtonClick);
    trueBtn.addEventListener("click", onTrueOptionClick);
    falseBtn.addEventListener("click", onFalseOptionClick);
    playAgain.addEventListener ("click", onPlayAgainClick);
}

function onGameStart() {
    initQuizVariables();
    initEventListeners();
}

document.addEventListener("DOMContentLoaded", onGameStart);