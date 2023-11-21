// ARRAY
const messages = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
]

// VARIABLES
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let messageLucky = document.querySelector('.messageLucky p')
let randomMessage = messages [Math.round(Math.random() * messages.length)]

// EVENTS
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', toggleEnter)

// FUNCTIONS
function handleTryClick() {
    toggleScreen()
    messageLucky.innerText = `${randomMessage}`

}

function handleResetClick() {
    toggleScreen()
    randomMessage = messages[Math.round(Math.random() * messages.length)];
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function toggleEnter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}




