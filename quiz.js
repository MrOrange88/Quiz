//let result = 0; //Integer
//let prive = 3.88; //Float
//let name = "Hugo";//String
//let isTrue = false;//Boolean true/false On/Off
console.clear()
let result = 0;
let currentQuestionIndex = 0; // Camel Case jedes neues Wort mit Großbuchstaben

let questions = [ //Das ist eine Variable in dieser Variable ist ein Array mit 3 Objekten in den Objekten sid wieder Array(sammlungen)

    {
        question: "Wie ist mein Name?", //in einem Objetkt werden die Eigenschaften mit einem : zugewiesen!
        //           0       1        2       3  der Index fängt bei 0 an zu zählen
        answers: ["Jimmy", "Alex", "Hugo", "Paul"], //Das ist ein Array er enthält 4 Elemente
        correctAnswer: 1
    },
    {
        question: "Wie alt ist meine Tochter?", // Die Property ist question!
        answers: ["3", "4", "2", "5"],
        correctAnswer: 2
    },
    {
        question: "Wer ist der beste Programierer?",
        answers: ["James Bond", "Alex", "niemand", "Ich"],
        correctAnswer: 3
    },
    {
        question: "Wie hoch ist der Brocken im Harz?",
        answers: ["500m", "1100m", "2200m", "1700m"],
        correctAnswer: 1
    },
];
console.log(questions)
// Frage
// Mögliche Antworten
// Richtige Antworten

function displayQuestion() { //hier definiere ich die funktion
    let item = questions[currentQuestionIndex]; //hiermit sage ich das er mit der ersten Frage anfangen soll(die erste Frage liegt auf Index 0 habe ich oben bestimmt)
    document.getElementById('question').textContent = item.question; //hier hole ich mir das Objekt question(h1 Element) aus der html datei/ mit textcontent sage ich der texinhalt dieses Objekts soll die Frage sein die ich vorher mit question classifiziert habe!
}



function displayAnswers() {
    document.getElementById('answers').innerHTML = ""; //damit clearen wir den container
    let item = questions[currentQuestionIndex]; // Zuweisung
    for (let answerIndex = 0; answerIndex < item.answers.length; answerIndex = answerIndex + 1) // Abkürzung wäre in dem Fall ++
    {
        let button = document.createElement('button');// w

        button.textContent = item.answers[answerIndex];// TODO answerIndex

        document.getElementById('answers').appendChild(button)
    }
}
document.getElementById('next-button').onclick = function (event) {

    if (currentQuestionIndex < questions.length) { //Bedingung
        currentQuestionIndex++;
        displayQuestion();
        displayAnswers();
    }
}
document.getElementById('previous-button').onclick = function (event) {
    console.log(event)
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        displayAnswers();
    }

}

displayQuestion(); //hiermit rufe ich die funktion auf die ich vorher definiert habe! 
displayAnswers();































