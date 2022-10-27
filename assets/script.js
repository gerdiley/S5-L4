

//menù-------------------------------------------------
var menu = document.getElementById('menu');
var nav = document.getElementById('opzioniMenu');

menu.addEventListener("click", function() {
    if (nav.style.display == "block") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block";
    }
});


//titolo----------------------------------------------------------
var titolo = document.querySelector('h1');

var grande = document.getElementById('grande');
var colore = document.getElementById('colore');
var maiuscolo = document.getElementById('maiuscolo');
var nascondi = document.getElementById('nascondi');
var mostra = document.getElementById('mostrare');

//GRANDE
grande.addEventListener("click", function() {
    titolo.style.fontSize = "5em";
});

//COLORE
colore.addEventListener("click", function() {
    titolo.style.color = "rgb(14, 32, 187)";
});

//MAIUSCOLO
maiuscolo.addEventListener("click", function() {
    titolo.style.textTransform = "uppercase";
});

//NASCONDI
nascondi.addEventListener("click", function() {
    titolo.style.visibility = "hidden";
});

//MOSTRA
mostra.addEventListener("click", function() {
    titolo.style.visibility = "visible";
});


//lista-------------------------------------------------------
var lista = document.querySelectorAll('.lista');

for (let i = 0; i < lista.length; i++) {
    lista[i].addEventListener("click", function() {
        this.classList.toggle('checked');
    });

    lista[i].addEventListener("mouseover", function() {
        this.style.color = "rgb(59, 93, 245)";
    });

    lista[i].addEventListener("mouseout", function() {
        this.style.color = "white";
    });
}