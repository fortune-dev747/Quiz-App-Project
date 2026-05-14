const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HighText Machine Language", correct: false },
            { text: "HyperText Markup Language", correct: true },
            { text: "HighTension Machine Language", correct: false },
            { text: "HyperTension Markup Language", correct: false }
        ]
    },
    {
        question: "What is the purpose of CSS?",
        answers: [
            { text: "To style and layout web pages", correct: true },
            { text: "To create interactive web applications", correct: false },
            { text: "To define the structure of web pages", correct: false },
            { text: "To script dynamic behavior on web pages", correct: false }
        ]
    },
    {
        question: "Which JavaScript method adds an item to the end of an array?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false }
        ]
    },
 {
        question: "What does a search bar help users do on a website?",
        answers: [
            { text: "Increase internet speed", correct: false },
            { text: "Download the entire website", correct: false },
            { text: " Change the website color automatically", correct: false },
            { text: "Quickly find specific content or products on the website", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

window.onload = function () {
    setQuestion();
}

function setQuestion() {
    const currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionElement.innerText = currentQuestion.question;
}






