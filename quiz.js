//let result = 0; //Integer
//let prive = 3.88; //Float
//let name = "Hugo";//String
//let isTrue = false;//Boolean true/false On/Off
console.clear()
let result = 0;
let currentQuestionIndex = 0; // Camel Case jedes neues Wort mit Großbuchstaben

let questions = [ //Das ist eine Variable in dieser Variable ist ein Array mit 3 Objekten in den Objekten sid wieder Array(sammlungen)

    {
        question: "Wie ist mein Name?", //in einem Objekt werden die Eigenschaften mit einem : zugewiesen!
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

function displayQuestion() {


    let item = questions[currentQuestionIndex]; //hiermit sage ich das er mit der ersten Frage anfangen soll(die erste Frage liegt auf Index 0 habe ich oben bestimmt)
    document.getElementById('question').textContent = item.question; //hier hole ich mir das Objekt question(h1 Element) aus der html datei/ mit textcontent sage ich der texinhalt dieses Objekts soll die Frage sein die ich vorher mit question classifiziert habe!
}

function displayAnswers() {
    document.getElementById('answers').innerHTML = ""; //clear container
    let item = questions[currentQuestionIndex];
    for (let answerIndex = 0; answerIndex < item.answers.length; answerIndex = answerIndex + 1) // Abkürzung wäre in dem Fall ++
    {
        let button = document.createElement('button');
        button.classList.add("btn", "btn-dark", "me-2");
        button.textContent = item.answers[answerIndex];
        button.onclick = function (event) {
            checkAnswer(item, answerIndex);
        }

        document.getElementById('answers').appendChild(button)
    }
}

function checkAnswer(item, answerIndex) {
    if (answerIndex === item.correctAnswer) {
        result++;
    }

    if (currentQuestionIndex === questions.length - 1) {
        displayResult();
    } else {
        nextQuestion();
    }

}
function displayResult() {
    //die Property hidden wird in neuen Browsern unterstützt
    //für alte Browser nehmen style.display
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden#browser_compatibility
    document.getElementById('quiz-container').hidden = true;
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('result-container').hidden = false;
    document.getElementById('result-container').style.display = "block";
    document.getElementById('result').textContent = result;
}
function displayGame() {
    document.getElementById('quiz-container').hidden = false;
    document.getElementById('quiz-container').style.display = "block";
    document.getElementById('result-container').hidden = true;
    document.getElementById('result-container').style.display = "none";
    document.getElementById('result').textContent = "";
}
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        displayAnswers();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        displayAnswers();
    }
}
function restartGame() {
    currentQuestionIndex = 0;
    displayGame();
    displayQuestion();
    displayAnswers();
}

document.getElementById('next-button').onclick = function (event) {
    nextQuestion();
}

document.getElementById('previous-button').onclick = function (event) {
    previousQuestion();
}

document.getElementById('restart-button').onclick = function (event) {
    restartGame();
}
restartGame();

































