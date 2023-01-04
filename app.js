// const nextBtn = document.querySelector('.next-btn');
// const question = document.querySelector('.question');

// nextBtn.addEventListener('click', function() {
//   question.classList.toggle('hide-text');
// });

const QUESTIONS = [
    {
      id: 2,
      questionText: 'What is the capital of USA?',
      imgSrc: 'question_1.png',
      options: [
        'DC',
        'New York',
        'New Jersey',
        'LA',
      ],
      correctAnswer: 'DC'
    },
    {
      id: 2,
      questionText: 'W22222 of USA?',
      imgSrc: 'question_1.png',
      options: [
        'DC',
        'New York',
        'New Jersey',
        'LA',
      ],
      correctAnswer: 'DC'
    },
    {
      id: 3,
      questionText: 'W333333 of USA?',
      imgSrc: 'question_1.png',
      options: [
        'DC',
        'New York',
        'New Jersey',
        'LA',
      ],
      correctAnswer: 'DC'
    },
    {
      id: 1,
      questionText: 'What is the 4444444 of USA?',
      imgSrc: 'question_1.png',
      options: [
        'DC',
        'New York',
        'New Jersey',
        'LA',
      ],
      correctAnswer: 'DC'
    },
    {
      id: 1,
      questionText: 'What is the capital of USA?',
      imgSrc: 'question_1.png',
      options: [
        'DC',
        'New York',
        'New Jersey',
        'LA',
      ],
      correctAnswer: 'DC'
    }
  ]

  const startBtn = document.querySelector(".start-btn");
  const nextBtn = document.querySelector(".next-btn");
  const question = document.querySelector(".question");

  let currentItem = 0;

  startBtn.addEventListener("click", function () {
    question.textContent = QUESTIONS[currentItem].questionText;
  });

  nextBtn.addEventListener("click", function () {
    currentItem ++;
    if (currentItem === QUESTIONS.length) {
    currentItem = 0;
    }
    question.textContent = QUESTIONS[currentItem].questionText;
  });