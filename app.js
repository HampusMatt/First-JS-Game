const nextBtn = document.querySelector('.next-btn');
const question = document.querySelector('.question');

nextBtn.addEventListener('click', function() {
  question.classList.toggle('hide-text');
});