const RIGHT_ANSWER = 10;
const WRONG_ANSWER = 0;
const QUIZ = [
    {
        question: "How much is 2 * 2?",
        answer: "4",
        checkAnswer: function () {

            return prompt(this.question)
        }
    },
    {
        question: "Sun rises in the east?",
        answer: "True",
        checkAnswer: function () {

            return confirm(this.question)
        }
    },
    {
        question: "How much will 5 / 0 be?",
        answer: "Infinity",
        checkAnswer: function () {

            return prompt(this.question)
        }
    },
    {
        question: "What color is the sky?",
        answer: "blue",
        checkAnswer: function () {

            return prompt(this.question)
        }
    },
    {
        question: "As the correct answer to 'The main question of life, the universe and all that'",
        answer: "42",
        checkAnswer: function () {

            return prompt(this.question)
        }
    }
]

alert(`Your result = ${takeQuiz(QUIZ)} points.`);


function takeQuiz() {
    let points = 0;

    for (let elem of QUIZ) {
        if (elem.checkAnswer() === elem.answer) {
            points += RIGHT_ANSWER;
        }
    }

    return points;
}
