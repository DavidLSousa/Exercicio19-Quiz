const correctAnswers = [ 'B', 'B', 'B', 'B' ]

const form = document.querySelector('form')
const outputScore = document.querySelector('.outputScore')
const scoreDisplay = outputScore.parentElement.parentElement

form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0

  const userAnswers = [
    event.target.inputQuestion1.value,
    event.target.inputQuestion2.value,
    event.target.inputQuestion3.value,
    event.target.inputQuestion4.value
  ]

  correctAnswers.forEach((correctAnswer, index) => {
    if (correctAnswer === userAnswers[index]) {
      score += 25
    }
  })

  // Mostrando Score abaixo do Score
  scoreDisplay.classList.add('d-flex')
  scoreDisplay.classList.remove('d-none')

  outputScore.textContent = `Score: ${score}`
})