const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'porque le das aqui',
  'angie dale a que si dale',
  'ok yo se que te equivocaste ahora dale a si',
  'AJA DALE A SI PQ LE DAS Q NO',
  'EL OTRO BOTON ES MAS BONITO DALE'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})