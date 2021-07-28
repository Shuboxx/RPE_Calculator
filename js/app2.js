let output = document.querySelector("#output")

document.querySelector("#calculate").addEventListener("click", calcMaxWeight)

let rpe_values = {
  one: [1, 0.955, 0.929, 0.892, 0.863],
  two: [0.955, 0.922, 0.892, 0.863, 0.837],
  three: [0.922, 0.892, 0.863, 0.837, 0.811],
  four: [0.892, 0.863, 0.837, 0.811, 0.786],
  five: [0.863, 0.837, 0.811, 0.786, 0.762],
  six: [0.837, 0.811, 0.786, 0.762, 0.739],
  seven: [0.811, 0.786, 0.762, 0.739, 0.707],
  eight: [0.786, 0.762, 0.739, 0.707, 0.68],
  nine: [0.762, 0.739, 0.707, 0.68, 0.653],
  ten: [0.739, 0.707, 0.68, 0.653, 0.626],
  eleven: [0.707, 0.68, 0.653, 0.626, 0.599],
  twelve: [0.68, 0.653, 0.626, 0.599, 0.574],
}

function calcMaxWeight(weight, reps) {
  weight = Number(document.querySelector("#weight").value)
  reps = Number(document.querySelector("#reps").value)
  let estimatedMaxWeight = weight * (1 + reps / 30)
  let roundedWeight = Math.floor(estimatedMaxWeight / 5) * 5
  output.innerText = `Estimated 1RM: ${roundedWeight}`
  return roundedWeight
}

function calcWeight(percent) {
  let maxWeight = calcMaxWeight()
  for (let i = 0; i < percent.length; i++) {
    let div = document.createElement("div")
    div.innerText = Math.round((maxWeight * percent[i]) / 5) * 5
    document.querySelector("#oneRep").append(div)
  }
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}
let chosenReps = document.querySelectorAll("[data-reps]").innerText
let reps = document.querySelectorAll("[data-reps]")
reps.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText === "1") {
      removeChildNodes(oneRep)
      calcWeight(rpe_values.one)
    } else if (button.innerText === "2") {
      removeChildNodes(oneRep)
      calcWeight(rpe_values.two)
    } else if (button.innerText === "3") {
      removeChildNodes(oneRep)
      calcWeight(rpe_values.three)
    } else if (button.innerText === "4") {
      removeChildNodes(oneRep)
      calcWeight(rpe_values.four)
    } else if (button.innerText === "5") {
      removeChildNodes(oneRep)
      calcWeight(rpe_values.five)
    } else if (button.innerText === "6") {
      removeChildNodes(oneRep)
      calcWeight(rpe_values.six)
    } else if (button.innerText === "7") {
      removeChildNodes(oneRep)
      calcWeight(rpe_values.seven)
    } else if (button.innerText === "8") {
      removeChildNodes(oneRep)
      calcWeight(rpe_values.eight)
    } else if (button.innerText === "9") {
      removeChildNodes(oneRep)
      calcWeight(rpe_values.nine)
    } else if (button.innerText === "10") {
      removeChildNodes(oneRep)
      calcWeight(rpe_values.ten)
    } else if (button.innerText === "11") {
      removeChildNodes(oneRep)
      calcWeight(rpe_values.eleven)
    } else {
      removeChildNodes(oneRep)
      calcWeight(rpe_values.twelve)
    }
  })
})
