let data = {
    images: [
        "jacques_descendre.png",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg",
        "imacncheese.jpg"
    ],
    text: [
        "Mon nom est Jacques et j'<span class=\"verb\">ai descendu<sup>1<sup></span> l'escalier",
        "Revenir de personne 1",
        "Monter de personne 1",
        "Renter de personne 1",
        "Sortir de personne 1",
        "Passé par de personne 1",
        "Venir de personne 1",
        "Arriver de personne 1",
        "Naitre de personne 1",
        "Descender de personne 1",
        "Enter de personne 1",
        "Retourner de personne 1",
        "Tomber de personne 1",
        "Rester de personne 1",
        "Aller de personne 1",
        "Mourir de personne 1",
        "Partir de personne 1"
    ]
}

let img = document.getElementById("img")
let text = document.getElementById("text")
let last = document.getElementById("last")
let next = document.getElementById("next")
let verbs = ["devenir", "revenir", "monter", "rester", "sortir", "venir", "aller", "naître", "descendre", "entrer", "renter", "tomber", "retourner", "arriver", "mourir", "partir"]
let verb = 0;

img.src = data.images[0]
text.innerHTML = data.text[0]

last.onclick = lastFunc
next.onclick = nextFunc

function lastFunc() {
    if (verb === 0) {
        verb = verbs.length-1
    } else {
        verb--
    }
    img.src = data.images[verb]
    text.innerHTML = data.text[verb]
}

function nextFunc() {
    if (verb === verbs.length-1) {
        verb = 0
    } else {
        verb++
    }
    img.src = data.images[verb]
    text.innerHTML = data.text[verb]
}