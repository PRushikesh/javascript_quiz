const questions = [
    { 
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
        correct: 0
    },
    { 
        question: "Which language runs in a web browser?",
        answers: ["Java", "C++", "JavaScript"],
        correct: 2
    },
    { 
        question: "What year was JavaScript created?",
        answers: ["1995", "2005", "2015"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(index));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    answerButtons.innerHTML = "";
    scoreElement.innerText = "";
}

function selectAnswer(selectedIndex) {
    let currentQuestion = questions[currentQuestionIndex];
    
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerText = "Quiz Completed!";
    scoreElement.innerText = Your Score: ${score} / ${questions.length};
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", startQuiz);

startQuiz();
