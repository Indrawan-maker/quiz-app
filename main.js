
// membuat array dengan 2 isi 
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
            {text: "Kratingdaeng!", correct: false} ,
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

// ambil element dari html
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButton");
const nextButton = document.getElementById("nextBtn");
// deklarasi index untuk ditampilkan
let currentQuestionIndex = 0;
let score = 0;

// fungsi ketika menekan next btn
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

// fungsi tampilkan isi array
function showQuestion() {
    resetState();
    // buat fungsi menampilkan array
    let currentQuestion = question[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // akses isi jawaban 
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

// reset tampilan
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// pengaturan penampilan button
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true") {
                button.classList.add("correct")
            } 
            button.disabled = true;
        });
        nextButton.style.display = "block";
}

// hitung score
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`
    nextButton.innerHTML = "play Again?";
    nextButton.style.display = "block"
}

// handle next button
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    } else {
        showScore();
    }
}

// next btn ketika di klik
nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < question.length){
        handleNextButton()
    } else {
        startQuiz()
    }
})
startQuiz();