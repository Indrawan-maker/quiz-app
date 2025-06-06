const question = [
    {
        question: "Kampus mana yang paling identik dengan warna hijau tua?",
        answers: [
            {text: "UNMUL", correct: false},
            {text: "UINSI", correct: true} ,
            {text: "UI", correct: false},
            {text: "UGM", correct: false},
        ]
    },
        {
        question: "Kota mana yang paling sering banjir?",
        answers: [
            {text: "Tokyo", correct: false},
            {text: "Banjarmasin", correct: false} ,
            {text: "Balikpapan", correct: false},
            {text: "Samarinda", correct: true},
        ]
    },
        {
        question: "Air minum untuk menjaga kamu tetap fokus?",
        answers: [
            {text: "Kopi", correct: false},
            {text: "Kratingdaeng!", correct: true} ,
            {text: "Air Putih", correct: true},
            {text: "Es Jeruk", correct: false},
        ]
    },
        {
        question: "Jika sepatu kamu kotor, maka harus?",
        answers: [
            {text: "dibuang", correct: false},
            {text: "dibongkar", correct: false} ,
            {text: "dibersihkan", correct: true},
            {text: "dimakan", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButton");
const nextButton = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach( answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswer)

    })
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();