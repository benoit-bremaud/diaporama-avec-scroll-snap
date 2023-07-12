// On va chercher les boutons "next"
let next = document.querySelectorAll(".nav-next");

// console.log(next)

next.forEach(element => {
    element.addEventListener("click", nextSlide);
});

// Fonction qui va chercher la prochaine image
function nextSlide(){
    // console.log(this)
    // On va chercher le slider
    let diapo = this.parentElement.previousElementSibling;

    // On calcule le décalage necessaire pour avancer d'un pas
    let decal = diapo.children[0].clientWidth;
    console.log(this, decal)

    // On calcule la nouvelle position
    let scroll = diapo.scrollLeft + decal;

    // On calcule la position de fin et on "rembobine"
    if (scroll > diapo.scrollLeftMax + (decal * .9)){
        scroll = 0;
    }

    // On scrolle
    diapo.scrollTo({
        top: 0,
        left: scroll,
        behavior: "smooth"
    });
}

// On va chercher les boutons "prev"
let prev = document.querySelectorAll(".nav-prev");

// console.log(prev)

prev.forEach(element => {
    element.addEventListener("click", prevSlide);
});

// Fonction qui va chercher l'image précédente
function prevSlide(){
    // console.log(this)
    // On va chercher le slider
    let diapo = this.parentElement.previousElementSibling;

    // On calcule le décalage necessaire pour reculer d'un pas
    let decal = diapo.children[0].clientWidth;
    // console.log(this, decal)

    // On calcule la nouvelle position
    let scroll = diapo.scrollLeft - decal;

    // On calcule la position de début et on "va à la fin"
    if (scroll < 0){
        scroll = diapo.scrollWidth;
    }

    // On scroll
    diapo.scrollTo({
        top: 0,
        left: scroll,
        behavior: "smooth"
    });
}

