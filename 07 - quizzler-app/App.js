class Question {
    constructor(text, answer) {
        this.text = text,
        this.answer = answer
    }

}

class QuestionBank {
    constructor() {
        this.list = []
        this.list.push(new Question("Valentine\'s day is banned in Saudi Arabia.", true))
        this.list.push(new Question("A slug\'s blood is green.", true))
        this.list.push(new Question("Approximately one quarter of human bones are in the feet.", true))
        this.list.push(new Question("The total surface area of two human lungs is approximately 70 square metres.", true))
        this.list.push(new Question("In West Virginia, USA, if you accidentally hit an animal with your car, you are free to take it home to eat.", true))
        this.list.push(new Question("In London, UK, if you happen to die in the House of Parliament, you are technically entitled to a state funeral, because the building is considered too sacred a place.", false))
        this.list.push(new Question("It is illegal to pee in the Ocean in Portugal.", true))
        this.list.push(new Question("You can lead a cow down stairs but not up stairs.", false))
        this.list.push(new Question("Google was originally called \"Backrub\".", true))
        this.list.push(new Question("Buzz Aldrin\'s mother\'s maiden name was \"Moon\".", true))
        this.list.push(new Question("The loudest sound produced by any animal is 188 decibels. That animal is the African Elephant.", false))
        this.list.push(new Question("No piece of square dry paper can be folded in half more than 7 times.", false))
        this.list.push(new Question("Chocolate affects a dog\'s heart and nervous system; a few ounces are enough to kill a small dog.", true))
    }

}



const questinoLabel = document.querySelector('#questionLabel')
const progressLabel = document.querySelector('#progressLabel')
const answerPressed = document.querySelectorAll('.answer')


let allQuestions = new QuestionBank()
let pickedAnswer = false
let questionNumber = 0
let score = 0



answerPressed.forEach(function(e){
    e.addEventListener('click', function(e){
        
        if (e.target.value == 1) {
            pickedAnswer = true
        }
        else if (e.target.value == 2) {
            pickedAnswer = false
        }
        
        checkAnswer()
        questionNumber++
        nextQuestion()

    })
})


function nextQuestion() {

    if(questionNumber <= 12) {
        questinoLabel.innerHTML = allQuestions.list[questionNumber].text

        updateUI()
    }
    else {
        alert("Done!")
        startOver()
    }
}

function checkAnswer() {

    let correctAnswer = allQuestions.list[questionNumber].answer

    if(correctAnswer == pickedAnswer) {
        score++
        console.log("Right answer")
        document.body.style.backgroundColor = 'green'
    }
    else {
        console.log("Wrong!")
        document.body.style.backgroundColor = 'red'
    }

}


function updateUI() {
    progressLabel.innerHTML = `Question: ${questionNumber + 1} / 13`


}


function startOver() {
    score = 0
    questionNumber = 0
    document.body.style.backgroundColor = 'white'
    nextQuestion()
}

