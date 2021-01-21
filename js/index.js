const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const userpoints_span = document.getElementById('userpoints')
const cpupoints_span = document.getElementById('cpupoints')
const winner_p = document.getElementById('winner')
const creator_p = document.getElementById('creator')
const won_span = document.getElementById('won')
const userchoice_span = document.getElementById('userchoice')
const cpuchoice_span = document.getElementById('cpuchoice')
//-->variables de puntaje
let userpoints = 0
let cpupoints = 0

const updatedata = (userelection, cpuelection, finalwinner) => {
  userchoice_span.textContent = userelection
  cpuchoice_span.textContent = cpuelection
  won_span.textContent = finalwinner
}


const winnershow = () => {
  creator_p.style.display = 'none'
  winner_p.style.display = 'block'
}


//---Decisiones de la cpu
const getcpuchoice = () => {
  const Choices = ['r', 'p', 's']
  let randomNumber = Math.floor(Math.random() * 3)
  let cpuChoice = Choices[randomNumber]
  return cpuChoice
}

//--Esta funcion va a ejecutar todo lo necesario para reflejar que el usuario a ganado y se va a mostrar en el html
const won = () => {
  userpoints ++
  userpoints_span.textContent = userpoints
} 

//---Esta funcion va a ejecutar cuando el usuario pierda y se va a mostar en el html 
const lost = () => {
  cpupoints ++
  cpupoints_span.textContent = cpupoints
}



//--Esta funcion se encargar para mostrar en la consola que escogio el user y la cpu y quien gano
const checkWinner = (Userchoice, cpuChoice) => {
  switch (Userchoice + cpuChoice) {
    case 'rr':
      console.log(`user is ${Userchoice} cpu is ${cpuChoice}, TIE`)
      updatedata('rock', 'rock', 'Nobody')
      break;
    case 'rp':
      console.log(`user is ${Userchoice} cpu is ${cpuChoice}, YOU LOST`)
      updatedata('rock', 'paper', 'CPU')
      lost()
      break;
    case 'rs':
      console.log(`user is ${Userchoice} cpu is ${cpuChoice}, YOU WON`)
      updatedata('rock', 'scissors', 'USER')
      won()
      break;
    case 'pr':
      console.log(`user is ${Userchoice} cpu is ${cpuChoice}, YOU WON`)
      updatedata('paper', 'rock', 'USER')
      won()
      break;
    case 'pp':
      console.log(`user is ${Userchoice} cpu is ${cpuChoice}, TIE`)
      updatedata('paper', 'paper', 'Nobody')
      break;
    case 'ps':
      console.log(`user is ${Userchoice} cpu is ${cpuChoice}, YOU LOST`)
      updatedata('paper', 'scissors', 'CPU')
      lost()
      break;
    case 'sr':
      console.log(`user is ${Userchoice} cpu is ${cpuChoice}, YOU LOST`)
      updatedata('scissors', 'rock', 'CPU')
      lost()
      break;
    case 'sp':
      console.log(`user is ${Userchoice} cpu is ${cpuChoice}, YOU WON`)
      updatedata('scissors', 'paper', 'USER')
      won()
      break;
    case 'ss':
      console.log(`user is ${Userchoice} cpu is ${cpuChoice}, TIE`)
      updatedata('scissors', 'scissors', 'Nobody')
      break;

    default:
      break;
  }
}

let Userchoice;

rock.addEventListener('click', () => {
  Userchoice = 'r'
  let cpuChoice = getcpuchoice()
  checkWinner(Userchoice, cpuChoice)
  winnershow()

})

paper.addEventListener('click', () => {
  Userchoice = 'p'
  let cpuChoice = getcpuchoice()
  checkWinner(Userchoice, cpuChoice)
  winnershow()
})

scissors.addEventListener('click', () => {
  Userchoice = 's'
  let cpuChoice = getcpuchoice()
  checkWinner(Userchoice, cpuChoice)
  winnershow()
})
