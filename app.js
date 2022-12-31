// Definiera variabler
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")


//Missade = hur vet jag vad som blir klickad på??

// Sätta ett onclick-event som låter mig byta active class från en btn + content
// till den som har blivit vald.

about.addEventListener("click", function(e) {
    const id = e.target.dataset.id;

    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active"); 
    }
});
