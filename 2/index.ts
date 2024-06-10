// this code has been developed by ChatGPT

const button = document.querySelector('.button')
const firstInput = document.querySelector('#first-input') as HTMLInputElement
const secondInput = document.querySelector('#second-input') as HTMLInputElement
export const screen = document.querySelector('.screen')

function addNumbers(a: number, b: number) {
    if (screen) {
        screen.innerHTML = (a + b).toString()
    } else {
        console.error('screen element not found')
    }
}

button?.addEventListener('click', () => {
    const firstValue = parseFloat(firstInput.value)
    const secondValue = parseFloat(secondInput.value)

    if (!isNaN(firstValue) && !isNaN(secondValue)) {
        addNumbers(firstValue, secondValue)
    } else {
        console.error('invalid input values')
    }
})
