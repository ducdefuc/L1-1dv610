const nameForm = document.querySelector('#nameForm')
nameForm.addEventListener('submit', greet)

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

document.querySelector('#permissionButton').addEventListener('click', askIfPlay)

function askIfPlay(event) {
    event.preventDefault()
    
    const userResponseElement = document.querySelector('input[name="guessPermission"]:checked')

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

function startGame() {
    console.log('game started')
}