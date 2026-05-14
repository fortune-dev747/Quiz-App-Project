const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "A. HighText Machine Language", correct: false },
            { text: "B. HyperText Markup Language", correct: true },
            { text: "C. HighTension Machine Language", correct: false },
            { text: "D. HyperTension Markup Language", correct: false }
        ]
    },
    {
        question: "What is the purpose of CSS?",
        answers: [
            { text: "A. To style and layout web pages", correct: true },
            { text: "B. To create interactive web applications", correct: false },
            { text: "C. To define the structure of web pages", correct: false },
            { text: "D. To script dynamic behavior on web pages", correct: false }
        ]
    },
    {
        question: "Which JavaScript method adds an item to the end of an array?",
        answers: [
            { text: "A. push()", correct: true },
            { text: "B. pop()", correct: false },
            { text: "C. shift()", correct: false },
            { text: "D. unshift()", correct: false }
        ]
    },
 {
        question: "What does a search bar help users do on a website?",
        answers: [
            { text: "A. Increase internet speed", correct: false },
            { text: "B. Download the entire website", correct: false },
            { text: "C. Change the website color automatically", correct: false },
            { text: "D. Quickly find specific content or products on the website", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

let answers = "";
let options = [];

window.onload = function () {
    setQuestion();
    option0.addEventListener("click", selectOption);
    option1.addEventListener("click", selectOption);
    option2.addEventListener("click", selectOption);
    option3.addEventListener("click", selectOption);
}

function setQuestion() {
    const currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionElement.innerText = currentQuestion.question;
    options = currentQuestion.answers;
   const answers = options[Math.floor(Math.random() * options.length)];
    option0.innerText = options[0].text;
    option1.innerText = options[1].text;
    option2.innerText = options[2].text;
    option3.innerText = options[3].text;
}

function selectOption() {
    option0.disabled = true;
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    
    if (this.innerText === options.find(option => option.correct).text) {
        this.style.backgroundColor = "#9aeabc";
    } else {
        this.style.backgroundColor = "#ff9393";
    }
}






