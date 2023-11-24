let data = {
    pers1: {
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
            "Mon nom est Jacques et je ne <span class=\"verb\">suis</span> pas <span class=\"verb\">tombé,<sup>1</sup></span> hier",
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
    },
    pers2: {
        images: [
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
            "imacncheese.jpg",
            "imacncheese.jpg"
        ],
        text: [
            "Devenir de personne 2",
            "Revenir de personne 2",
            "Monter de personne 2",
            "Renter de personne 2",
            "Sortir de personne 2",
            "Passé par de personne 2",
            "Venir de personne 2",
            "Arriver de personne 2",
            "Naitre de personne 2",
            "Descender de personne 2",
            "Enter de personne 2",
            "Retourner de personne 2",
            "Tomber de personne 2",
            "Rester de personne 2",
            "Aller de personne 2",
            "Mourir de personne 2",
            "Partir de personne 2"
        ]
    }
}
let person1 = "Jacques"
let person2 = "Alexandre"
let person = person1
let img = document.getElementById("img")
let text = document.getElementById("text")
let last = document.getElementById("last")
let change = document.getElementById("change")
let next = document.getElementById("next")
let currentPerson = document.getElementById("person")
let verbs = ["devenir", "revenir", "monter", "rester", "sortir", "venir", "aller", "naître", "descendre", "entrer", "renter", "tomber", "retourner", "arriver", "mourir", "partir"]
let verb = 0

img.src = getPerson(person).images[verb]
text.innerHTML = getPerson(person).text[verb]
currentPerson.innerHTML = person

last.onclick = lastFunc
change.onclick = changeFunc
next.onclick = nextFunc

function lastFunc() {
    if (verb === 0) {
        verb = verbs.length-1
    } else {
        verb--
    }
    img.src = getPerson(person).images[verb]
    text.innerHTML = getPerson(person).text[verb]
}

function changeFunc() {

    if (person === person1) {
        person = person2
    } else {
        person = person1
    }
    img.src = getPerson(person).images[verb]
    text.innerHTML = getPerson(person).text[verb]
    currentPerson.innerHTML = person
}

function nextFunc() {
    if (verb === verbs.length-1) {
        verb = 0
    } else {
        verb++
    }
    img.src = getPerson(person).images[verb]
    text.innerHTML = getPerson(person).text[verb]
}

function getPerson(personToGet) {
    if (personToGet === person1) {
        return data.pers1
    } else {
        return data.pers2
    }
}