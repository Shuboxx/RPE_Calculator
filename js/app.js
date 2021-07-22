// let weightLifted = Number(document.querySelector('#weight').value)
// let repsLifted = Number(document.querySelector('#reps').value)
let maxWeight = document.querySelector('#output')
let calc = document.querySelector('#calculate')

calc.addEventListener('click', calcMaxWeight)

function calcMaxWeight(weight, reps) {
  weight = Number(document.querySelector('#weight').value)
  reps = Number(document.querySelector('#reps').value)
  if(reps === 1) {
    maxWeight.innerText = weight
  } else {
    let estimatedMaxWeight = weight * (1 + (reps / 30))
    let roundedMax = (Math.floor(estimatedMaxWeight / 5) * 5)
    maxWeight.innerText = roundedMax
  }
}
// weight(1 + reps / 30)