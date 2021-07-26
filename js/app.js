let maxWeight = document.querySelector("#output")
let calc = document.querySelector("#calculate")

calc.addEventListener("click", calcMaxWeight)
calc.addEventListener("click", calculateRPEWeights)

// Calculates estimated 1 rep max
function calcMaxWeight(weight, reps) {
  weight = Number(document.querySelector("#weight").value)
  reps = Number(document.querySelector("#reps").value)
  if (reps === 1) {
    maxWeight.innerText = `Estimated 1rm: ${weight}`
    return weight
  } else {
    let estimatedMaxWeight = weight * (1 + reps / 30)
    let roundedMax = Math.ceil(estimatedMaxWeight / 5) * 5
    maxWeight.innerText = `Estimated 1rm: ${roundedMax}`
    return roundedMax
  }
}

// Calculates weight based on RPE
function calculateRPEWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  let rpe = Number(document.querySelector("#rpe").value)
  switch (rpe) {
    case 10:
      document.querySelector("#oneTen").innerText = maxWeight * 1
      break
    case 9:
      document.querySelector("#oneNine").innerText =
        Math.round((maxWeight * 0.955) / 5) * 5
      break
    case 8:
      document.querySelector("#oneEight").innerText =
        Math.round((maxWeight * 0.929) / 5) * 5
      break
    case 7:
      document.querySelector("#oneSeven").innerText =
        Math.round((maxWeight * 0.892) / 5) * 5
      break
    case 6:
      document.querySelector("#oneSix").innerText =
        Math.round((maxWeight * 0.863) / 5) * 5
  }
}

// Calculates weight based on RPE
