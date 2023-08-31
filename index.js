const nameForm = document.querySelector('#nameForm')
nameForm.addEventListener('submit', greet)

// Greet user upon entering name.
function greet(event) {
  event.preventDefault()

  const nameInputField = nameForm.querySelector('#yourName')
  const nameToGreet = nameInputField.value
  const result = document.querySelector('#greetOutput')

  result.textContent = `Hi there ${nameToGreet}!`
  nameInputField.value = ''

  nameForm.style.display = 'none'
  document.querySelector('#permissionQuestion').style.display = 'block'
}

document.querySelector('#permissionButton').addEventListener('click', askIfPlay) // Eventhandler for button (users answer).

// Ask if user would like to play a game.
function askIfPlay(event) {
  event.preventDefault()

  const userResponseElement = document.querySelector('input[name="guessPermission"]:checked') // Radiobuttons.

  // Check if user has selected an option
  if (userResponseElement) {
    const userResponse = userResponseElement.value

    if (userResponse === 'no') {
      alert('Alright! Maybe next time!')
      location.reload()
    } else {
      document.querySelector('#permissionQuestion').style.display = 'none'
      nameForm.style.display = 'none'
      const nameOutput = document.querySelector('#greetOutput')
      nameOutput.style.display = 'none'
      startGame()
    }
  }
}

async function startGame() {
  const data = await getCountries()
  const gameOutput = document.querySelector('#gameOutput')
  gameOutput.style.display = 'block'

  const countryGuessDiv = document.querySelector('#countryGuess')
  countryGuessDiv.textContent = `Is your name from ${data[128].name.common} ${data[128].flag}?` // index 128 is sweden.
}

// General function for fetching countries from restcountriesAPI
async function getCountries() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json()

    return data
  }
  catch (error) {
    console.log(error.message)
  }
}

document.querySelector('#guessButton').addEventListener('click', handleGuessResponse) // Event handler for button (Users answer in game)

// Check users answer.
function handleGuessResponse() {
  const userAnswerElement = document.querySelector('input[name="guess"]:checked')

  if (userAnswerElement) {
    const userResponse = userAnswerElement.value

    if (userResponse === 'yes') {
      alert('I guessed it I win!')
      location.reload()
    } else {
      // if user answers guess random country
      guessRandomCountry()
    }
  }
}

// Random country picker.
async function guessRandomCountry() {
  try {
    const data = await getCountries()

    // Generate a random index between 0 and the length of the countries data
    const randomIndex = Math.floor(Math.random() * data.length)

    // Use the index to select a country from the data
    const randomCountry = data[randomIndex]

    const countryGuessDiv = document.querySelector('#countryGuess')
    countryGuessDiv.textContent = `Is your name from ${randomCountry.name.common}? ${randomCountry.flag}`


  }
  catch (error) {
    console.log(error.message)
  }
}
