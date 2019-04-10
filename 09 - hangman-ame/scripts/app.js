/**
 * This is a simple hangman game that I made during an online course
 * on JavaScript. You can find the course over at Udemy.com. The app
 * uses a simple fetch call to an random word generator API.
 * @Marten 2019
 */

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.getElementById('reset-btn').addEventListener('click', startGame)

startGame()
