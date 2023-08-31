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