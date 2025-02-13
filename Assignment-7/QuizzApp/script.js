var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.questions = [];
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    Quiz.prototype.getCurrentQuestion = function () {
        return this.questions[this.currentQuestionIndex];
    };
    Quiz.prototype.checkAnswer = function (answer) {
        var currentQuestion = this.getCurrentQuestion();
        if (answer === currentQuestion.correctAnswer) {
            this.score++;
            return true;
        }
        return false;
    };
    Quiz.prototype.nextQuestion = function () {
        this.currentQuestionIndex++;
        return this.currentQuestionIndex < this.questions.length;
    };
    Quiz.prototype.getScore = function () {
        return this.score;
    };
    return Quiz;
}());
//questions
var sampleQuestions = [
    {
        question: "Who is the only cricketer to score 100 international centuries?",
        choices: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Jacques Kallis"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "Which country won the first-ever Cricket World Cup in 1975?",
        choices: ["Australia", "England", "West Indies", "India"],
        correctAnswer: "West Indies"
    },
    {
        question: "Who holds the record for the fastest century in ODI cricket?",
        choices: ["Chris Gayle", "AB de Villiers", "Shahid Afridi", "Virat Kohli"],
        correctAnswer: "AB de Villiers"
    },
    {
        question: "Which bowler has the most wickets in Test cricket?",
        choices: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
        correctAnswer: "Muttiah Muralitharan"
    },
    {
        question: "Who captained India to their first T20 World Cup win in 2007?",
        choices: ["MS Dhoni", "Sourav Ganguly", "Virat Kohli", "Rahul Dravid"],
        correctAnswer: "MS Dhoni"
    }
];
var quiz = new Quiz(sampleQuestions);
var questionElement = document.getElementById("question");
var choicesContainer = document.getElementById("choices");
var nextButton = document.getElementById("next-btn");
var scoreElement = document.getElementById("score");
function renderQuestion() {
    var currentQuestion = quiz.getCurrentQuestion();
    questionElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";
    currentQuestion.choices.forEach(function (choice) {
        var button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", function () { return handleAnswer(choice); });
        choicesContainer.appendChild(button);
    });
}
function handleAnswer(selectedAnswer) {
    var isCorrect = quiz.checkAnswer(selectedAnswer);
    alert(isCorrect ? "Correct!" : "Wrong!");
    nextButton.style.display = "block";
}
nextButton.addEventListener("click", function () {
    var hasMoreQuestions = quiz.nextQuestion();
    if (hasMoreQuestions) {
        renderQuestion();
        nextButton.style.display = "none";
    }
    else {
        displayScore();
    }
});
function displayScore() {
    questionElement.textContent = "Quiz Complete!";
    choicesContainer.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.textContent = "Your final score is: ".concat(quiz.getScore(), " / ").concat(sampleQuestions.length);
}
renderQuestion();
