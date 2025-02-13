interface Question {
    question : string;
    choices : string[];
    correctAnswer : string;
}

class Quiz
{
    private questions : Question[] = [];
    private currentQuestionIndex : number;
    private score : number;

    constructor(questions : Question[]){
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    getCurrentQuestion(): Question {
        return this.questions[this.currentQuestionIndex];
    }

    checkAnswer(answer: string): boolean {
        const currentQuestion = this.getCurrentQuestion();
        if (answer === currentQuestion.correctAnswer) {
            this.score++;
            return true;
        }
        return false;
    }

    nextQuestion(): boolean {
        this.currentQuestionIndex++;
        return this.currentQuestionIndex < this.questions.length;
    }

    getScore(): number {
        return this.score;
    }
}

//questions
const sampleQuestions: Question[] = [
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


const quiz = new Quiz(sampleQuestions);


const questionElement = document.getElementById("question")!;
const choicesContainer = document.getElementById("choices")!;
const nextButton = document.getElementById("next-btn")!;
const scoreElement = document.getElementById("score")!;


function renderQuestion() {
    const currentQuestion = quiz.getCurrentQuestion();
    questionElement.textContent = currentQuestion.question;

    
    choicesContainer.innerHTML = "";

    
    currentQuestion.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => handleAnswer(choice));
        choicesContainer.appendChild(button);
    });
}


function handleAnswer(selectedAnswer: string) {
    const isCorrect = quiz.checkAnswer(selectedAnswer);
    alert(isCorrect ? "Correct!" : "Wrong!");

  
    nextButton.style.display = "block";
}


nextButton.addEventListener("click", () => {
    const hasMoreQuestions = quiz.nextQuestion();
    if (hasMoreQuestions) {
        renderQuestion();
        nextButton.style.display = "none";
    } else {
        displayScore();
    }
});


function displayScore() {
    questionElement.textContent = "Quiz Complete!";
    choicesContainer.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.textContent = `Your final score is: ${quiz.getScore()} / ${sampleQuestions.length}`;
}


renderQuestion();



