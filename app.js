const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", function (event) {
    const id = event.target.dataset.id;

    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            event.target.classList.add("active");
        });
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        let showPara = document.getElementById(id);
        showPara.classList.add("active");
    }
})


// 1 = hämta variabler 1P
// 2 = lägg till ett onclick event som kollar vilken btn som tryckts på. 1P
// 3 = Om det finns ett id = ta bort active på alla knappar och lägg till active klass på btn. 1P
// 4 = ta bort active från alla artiklar. 1P
// 5 = Lägg till active klass på den paragraf som matchar id med btn som klickats. 1P