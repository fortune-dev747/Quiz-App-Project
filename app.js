const questions = [
    {
        question: "1. What does HTML stand for?",
        answers: [
            { text: "A. HighText Machine Language", correct: false },
            { text: "B. HyperText Markup Language", correct: true },
            { text: "C. HighTension Machine Language", correct: false },
            { text: "D. HyperTension Markup Language", correct: false }
        ]
    },
    {
        question: "2. What is the purpose of CSS?",
        answers: [
            { text: "A. To style and layout web pages", correct: true },
            { text: "B. To create interactive web applications", correct: false },
            { text: "C. To define the structure of web pages", correct: false },
            { text: "D. To script dynamic behavior on web pages", correct: false }
        ]
    },
    {
        question: "3. Which JavaScript method adds an item to the end of an array?",
        answers: [
            { text: "A. push()", correct: true },
            { text: "B. pop()", correct: false },
            { text: "C. shift()", correct: false },
            { text: "D. unshift()", correct: false }
        ]
    },
    {
        question: "4. What does a search bar help users do on a website?",
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
const nextQuestionButton = document.getElementById("next-btn");
const restartQuizButton = document.getElementById("restart-btn");


let currentQuestionIndex = 0;
let answers = '';
let options = [];
let score = 0;
let totalQuestions = questions.length;

window.onload = function() {
    showQuestion();
    option0.addEventListener("click", selectOption);
    option1.addEventListener("click", selectOption);
    option2.addEventListener("click", selectOption);
    option3.addEventListener("click", selectOption);
    nextQuestionButton.addEventListener('click', () => {
        option0.style.backgroundColor = '';
        option1.style.backgroundColor = '';
        option2.style.backgroundColor = '';
        option3.style.backgroundColor = '';
        // Re-enable options for the next question
        option0.disabled = false;
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        nextQuestionButton.style.display = "none";

        // move to the next question
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            questionElement.innerText = `Quiz Completed! 🎉 You scored ${score} out of ${totalQuestions}!`;
            option0.style.display = "none";
            option1.style.display = "none";
            option2.style.display = "none";
            option3.style.display = "none";
            restartQuizButton.style.display = 'block';
        }
        restartQuizButton.addEventListener('click', () => {
            currentQuestionIndex = 0;
            score = 0;
            showQuestion();
            option0.style.display = "block";
            option1.style.display = "block";
            option2.style.display = "block";
            option3.style.display = "block";
            nextQuestionButton.style.display = 'none';
            restartQuizButton.style.display = 'none';

        })
    })

}


function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    options = currentQuestion.answers;

    option0.innerText = options[0].text;
    option1.innerText = options[1].text;
    option2.innerText = options[2].text;
    option3.innerText = options[3].text;
};

function selectOption() {
    // disable all other buttons when user selects an option
    option0.disabled = true;
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;

    if (this.innerText === options.find(option => option.correct).text) {
        this.style.backgroundColor = '#9aeabc';
        score++;
    } else {
        this.style.backgroundColor = '#ff9393';
    }
    // also highlight the correct answer
    const correctOption = options.find(option => option.correct);
    if (option0.innerText === correctOption.text) {
        option0.style.backgroundColor = '#9aeabc';
    }
    if (option1.innerText === correctOption.text) {
        option1.style.backgroundColor = '#9aeabc';
    }
    if (option2.innerText === correctOption.text) {
        option2.style.backgroundColor = '#9aeabc';
    }
    if (option3.innerText === correctOption.text) {
        option3.style.backgroundColor = '#9aeabc';
    }
    nextQuestionButton.style.display = 'block';
}






