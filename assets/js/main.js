// Déclaration du tableau de questions
const questionsTab = [{
    question: "Quelle est la plus grande planète du système solaire ?",
    answer: "Jupiter",
    purpose: [
        "Jupiter",
        "Saturne",
        "Uranus",
        "Neptune",
    ],
}, {
    question: "Quel est le nom de la galaxie dans laquelle se trouve notre système solaire ?",
    answer: "Voie lactée",
    purpose: [
        "Andromède",
        "Voie lactée",
        "Triangle",
        "Sombrero",
    ],

}, {
    question: "Quel est le nom du phénomène qui se produit lorsque la Lune se trouve entre le Soleil et la Terre ?",
    answer: "Éclipse solaire",
    purpose: [
        "Éclipse solaire",
        "Éclipse lunaire",
        "Phase lunaire",
        "Marée",
    ],
}, {
    question: "Quel est le nom du satellite naturel de la Terre ?",
    answer: "Lune",
    purpose: [
        "Io",
        "Titan",
        "Lune",
        "Europe",
    ],
}, {
    question: "Quelle est l'unité de mesure la plus grande utilisée pour exprimer les distances dans l'espace ?",
    answer: "Parsec",
    purpose: [
        "Parsec",
        "Année-lumière",
        "Unité astronomique",
        "Kilomètre",
    ],
}];

// Déclaration des variables contenant l'index et les points
let index = 0
let pointCount = 0;
let goodOrNot = document.querySelector('#goodOrNot');
let displayScore = document.querySelector('#count');
let setQuestion = document.querySelector('#question');

function displayQuestion() {
    if (index > questionsTab.length - 1 || pointCount === 5) {
        let result = pointCount;
        pointCount = 0;
        index = 0;
        setQuestion.innerHTML = "FIN DU QUIZZ !";
        for (i = 0; i < 4; i++) {
            document.querySelectorAll('.response')[i].innerHTML = "";
        }
        displayScore.innerHTML = "Score : " + result + "/5"
    } else {
        displayScore.innerHTML = pointCount;
        setQuestion.innerHTML = questionsTab[index].question;
        displayPurpose();
    }
};

function displayPurpose() {
    if (index > questionsTab.length - 1 || pointCount === 5) {
        pointCount = 0;
        index = 0;
    } else {
        questionsTab[index].purpose.forEach((element, i) => {
            document.querySelectorAll('.response')[i].innerHTML = element;
        });
    };
};

function validation(element) {
    if (element.innerHTML == questionsTab[index].answer) {
        pointCount++;
        goodOrNot.innerHTML = "Bonne réponse !";
    } else {
        goodOrNot.innerHTML = "Mauvaise réponse !";
        displayQuestion();
    };
    index++
    displayQuestion()
};
