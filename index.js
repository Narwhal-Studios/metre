let data = {
    pers1: {
        images: [
            "images/jacques.png",
            "images/20.png",
            "images/frerepasmort.png",
            "images/voyage.png",
            "images/rentrerpas.png",
            "images/tomber.png",
            "images/echelle.png",
            "images/tomber2.png",
            "images/tomber.png",
            "images/otherboat.png",
            "images/return.png",
            "images/getoutboat.png",
            "images/fouryears.png",
            "images/leavesoccer.png",
            "images/comebacksoccer.png",
            "images/house.png",
            "images/door.png",
            "images/brother.png",
            "boat.jpg",
            "images/soccer.jpeg",
        ],
        text: [
            "Mon nom est Jacques.",
            "Mon frère <span class=\"p1verb\">est né<sup>1</sup></span> il y a deux décennies.",
            "Mon frère n'<span class=\"p1verb\">est</span> pas <span class=\"p1verb\">mort<sup>1</sup></span>.",
            "Je <span class=\"p1verb\">suis allé<sup>1</sup></span> faire un voyage avec lui et des autres.",
            "Nous <span class=\"p1verb\">sommes rentrés<sup>1</sup></span> sans lui.",
            "Il <span class=\"p1verb\">est tombé<sup>1</sup></span> de notre bateau!",
            "Il <span class=\"p1verb\">est monté<sup>1</sup></span> sur une échelle nous <span class=\"p1verb\">sommes descendus<sup>1</sup></span>!",
            "Il <span class=\"p1verb\">est tombé<sup>2</sup></span> de l'échelle.",
            "Une autre personne <span class=\"p1verb\">est</span> aussi <span class=\"p1verb\">tombé<sup>3</sup></span> de notre bateau.",
            "Dans le bateau, nous <span class=\"p1verb\">sommes passés par<sup>1</sup></span> un autre bateau.",
            "Moi et les autres <span class=\"p1verb\">sont revenus<sup>1</sup></span> en France!",
            "Je <span class=\"p1verb\">suis sorti<sup>1</sup></span> du bateau.",
            "Nous <span class=\"p1verb\">sommes restés<sup>1</sup></span> en France pour quatre années.",
            "Mes amis <span class=\"p1verb\">sont partis<sup>1</sup></span> pour un match de football.",
            "Ils <span class=\"p1verb\">sont retournés<sup>1</sup></span> du match de football.",
            "Je <span class=\"p1verb\">suis arrivé<sup>1</sup></span> chez moi, à la maison que je n'ai pas vue pendant six années.",
            "Je <span class=\"p1verb\">suis entré<sup>1</sup></span> dans la porte.",
            "Mon frère perdu <span class=\"p1verb\">est venu<sup>1</sup></span> et il <span class=\"p1verb\">est devenu<sup>1</sup></span> beaucoup plus grand!",
            "Image de bateau sourcé de: https://www.boatinternational.com/destinations/caribbean-yacht-destinations/real-pirates-of-the-caribbean--28453",
            "Image de stadium sourcé de: https://www.travelchannel.com/interests/sports/photos/europes-must-visit-soccer-stadiums"
        ]
    },
    pers2: {
        images: [
            "images/alexandre.png",
            "images/30.png",
            "images/frerepasmort.png",
            "images/voyage.png",
            "images/rentrerpas.png",
            "images/tomber.png",
            "images/echelle.png",
            "images/tomber2.png",
            "images/tomber.png",
            "images/return.png",
            "images/fishes.png",
            "images/island.png",
            "images/boatfound.png",
            "images/enterboat.png",
            "images/sailboat.png",
            "images/fouryearsboat.png",
            "images/doubleleaveboat.png",
            "images/populus.png",
            "images/fish.jpg",
            "boat.jpg"

        ],
        text: [
            "Je m'appelle Alexandre.",
            "Mon frère <span class=\"p2verb\">est né<sup>1</sup></span> il y a trois décennies.",
            "Mon frère n'<span class=\"p2verb\">est</span> pas <span class=\"p2verb\">mort<sup>1</sup></span>.",
            "Je <span class=\"p2verb\">suis allé<sup>1</sup></span> faire un voyage avec mes amis et des autres.",
            "Ils <span class=\"p2verb\">sont revenus<sup>1</sup></span> sans moi.",
            "Je <span class=\"p2verb\">suis tombé<sup>1</sup></span> de notre bateau.",
            "Je <span class=\"p2verb\">suis monté<sup>1</sup></span> sur une échelle qu'ils <span class=\"p2verb\">sont descendus<sup>1</sup></span>.",
            "Je <span class=\"p2verb\">suis tombé<sup>2</sup></span> de l'échelle.",
            "Un de mes autres amis dans le bateau <span class=\"p2verb\">est</span> aussi <span class=\"p2verb\">tombé<sup>1</sup></span>.",
            "Les autres <span class=\"p2verb\">sont revenus<sup>1</sup></span> en France.",
            "Nous <span class=\"p2verb\">sommes passés par<sup>1</sup></span> sur beaucoup de poissons.",
            "Nous <span class=\"p2verb\">sommes arrivés<sup>1</sup></span> sur une île aléatoire.",
            "Par chance, je <span class=\"p2verb\">suis venu<sup>1</sup></span> dans un bateau très vieil.",
            "Moi et mon ami <span class=\"p2verb\">sommes entrés<sup>1</sup></span> le bateau et nous avons navigué.",
            "Nous <span class=\"p2verb\">sommes restés<sup>1</sup></span> dans le bateau pour quatre années pendant qu'on navigue.",
            "Nous <span class=\"p2verb\">sommes retournés<sup>1</sup></span> en France!",
            "Après quatre années, nous <span class=\"p2verb\">sommes sortis<sup>1</sup></span> du bateau!",
            "Après que nous <span class=\"p2verb\">sommes partis<sup>1</sup></span> du dock, on voit que la France <span class=\"p2verb\">est devenu<sup>1</sup></span> plus populeux.",
            "Image de poisson sourcé de: https://www.thoughtco.com/fish-profile-2291579",
            "Image de bateau sourcé de: https://www.boatinternational.com/destinations/caribbean-yacht-destinations/real-pirates-of-the-caribbean--28453",
        ]
    }
}
let person1 = "<span class=\"p1verb\">Jacques</span>"
let person2 = "<span class=\"p2verb\">Alexandre</span>"
let person = person1
let img = document.getElementById("img")
let text = document.getElementById("text")
let last = document.getElementById("last")
let change = document.getElementById("change")
let next = document.getElementById("next")
let currentPerson = document.getElementById("person")
let verbs = ["devenir", "revenir", "monter", "rester", "sortir", "venir", "aller", "naître", "descendre", "entrer", "renter", "tomber", "retourner", "arriver", "mourir", "partir"]
let verb = 0

img.src = data.pers1.images[0]
console.log(data.pers1.images[0])
text.innerHTML = getPerson(person).text[verb]
currentPerson.innerHTML = person

last.onclick = lastFunc
change.onclick = changeFunc
next.onclick = nextFunc

function lastFunc() {
    if (verb === 0) {
        verb = data.pers1.text.length-1
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
    if (verb === data.pers1.text.length-1) {
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