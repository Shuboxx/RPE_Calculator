let eOneRepMax = document.querySelector("#output")
let calc = document.querySelector("#calculate")

calc.addEventListener("click", () => {
  calcMaxWeight()
  calculateOneRepWeights()
  calculateTwoRepWeights()
  calculateThreeRepWeights()
  calculateFourRepWeights()
  calculateFiveRepWeights()
  calculateSixRepWeights()
  calculateSevenRepWeights()
  calculateEightRepWeights()
  calculateNineRepWeights()
  calculateTenRepWeights()
  calculateElevenRepWeights()
  calculateTwelveRepWeights()
})

document.querySelector("[data-oneRep]").addEventListener("click", () => {
  document.querySelector("#oneRep").classList.remove("hidden")
  document.querySelector("#twoReps").classList.add("hidden")
  document.querySelector("#threeReps").classList.add("hidden")
  document.querySelector("#fourReps").classList.add("hidden")
  document.querySelector("#fiveReps").classList.add("hidden")
  document.querySelector("#sixReps").classList.add("hidden")
  document.querySelector("#sevenReps").classList.add("hidden")
  document.querySelector("#eightReps").classList.add("hidden")
  document.querySelector("#nineReps").classList.add("hidden")
  document.querySelector("#tenReps").classList.add("hidden")
  document.querySelector("#elevenReps").classList.add("hidden")
  document.querySelector("#twelveReps").classList.add("hidden")
})

document.querySelector("[data-twoRep]").addEventListener("click", () => {
  document.querySelector("#twoReps").classList.remove("hidden")
  document.querySelector("#oneRep").classList.add("hidden")
  document.querySelector("#threeReps").classList.add("hidden")
  document.querySelector("#fourReps").classList.add("hidden")
  document.querySelector("#fiveReps").classList.add("hidden")
  document.querySelector("#sixReps").classList.add("hidden")
  document.querySelector("#sevenReps").classList.add("hidden")
  document.querySelector("#eightReps").classList.add("hidden")
  document.querySelector("#nineReps").classList.add("hidden")
  document.querySelector("#tenReps").classList.add("hidden")
  document.querySelector("#elevenReps").classList.add("hidden")
  document.querySelector("#twelveReps").classList.add("hidden")
})

document.querySelector("[data-threeRep]").addEventListener("click", () => {
  document.querySelector("#threeReps").classList.remove("hidden")
  document.querySelector("#oneRep").classList.add("hidden")
  document.querySelector("#twoReps").classList.add("hidden")
  document.querySelector("#fourReps").classList.add("hidden")
  document.querySelector("#fiveReps").classList.add("hidden")
  document.querySelector("#sixReps").classList.add("hidden")
  document.querySelector("#sevenReps").classList.add("hidden")
  document.querySelector("#eightReps").classList.add("hidden")
  document.querySelector("#nineReps").classList.add("hidden")
  document.querySelector("#tenReps").classList.add("hidden")
  document.querySelector("#elevenReps").classList.add("hidden")
  document.querySelector("#twelveReps").classList.add("hidden")
})

document.querySelector("[data-fourRep]").addEventListener("click", () => {
  document.querySelector("#fourReps").classList.remove("hidden")
  document.querySelector("#oneRep").classList.add("hidden")
  document.querySelector("#twoReps").classList.add("hidden")
  document.querySelector("#threeReps").classList.add("hidden")
  document.querySelector("#fiveReps").classList.add("hidden")
  document.querySelector("#sixReps").classList.add("hidden")
  document.querySelector("#sevenReps").classList.add("hidden")
  document.querySelector("#eightReps").classList.add("hidden")
  document.querySelector("#nineReps").classList.add("hidden")
  document.querySelector("#tenReps").classList.add("hidden")
  document.querySelector("#elevenReps").classList.add("hidden")
  document.querySelector("#twelveReps").classList.add("hidden")
})

document.querySelector("[data-fiveRep]").addEventListener("click", () => {
  document.querySelector("#fiveReps").classList.remove("hidden")
  document.querySelector("#oneRep").classList.add("hidden")
  document.querySelector("#twoReps").classList.add("hidden")
  document.querySelector("#threeReps").classList.add("hidden")
  document.querySelector("#fourReps").classList.add("hidden")
  document.querySelector("#sixReps").classList.add("hidden")
  document.querySelector("#sevenReps").classList.add("hidden")
  document.querySelector("#eightReps").classList.add("hidden")
  document.querySelector("#nineReps").classList.add("hidden")
  document.querySelector("#tenReps").classList.add("hidden")
  document.querySelector("#elevenReps").classList.add("hidden")
  document.querySelector("#twelveReps").classList.add("hidden")
})

document.querySelector("[data-sixRep]").addEventListener("click", () => {
  document.querySelector("#sixReps").classList.remove("hidden")
  document.querySelector("#oneRep").classList.add("hidden")
  document.querySelector("#twoReps").classList.add("hidden")
  document.querySelector("#threeReps").classList.add("hidden")
  document.querySelector("#fourReps").classList.add("hidden")
  document.querySelector("#fiveReps").classList.add("hidden")
  document.querySelector("#sevenReps").classList.add("hidden")
  document.querySelector("#eightReps").classList.add("hidden")
  document.querySelector("#nineReps").classList.add("hidden")
  document.querySelector("#tenReps").classList.add("hidden")
  document.querySelector("#elevenReps").classList.add("hidden")
  document.querySelector("#twelveReps").classList.add("hidden")
})

document.querySelector("[data-sevenRep]").addEventListener("click", () => {
  document.querySelector("#sevenReps").classList.remove("hidden")
  document.querySelector("#oneRep").classList.add("hidden")
  document.querySelector("#twoReps").classList.add("hidden")
  document.querySelector("#threeReps").classList.add("hidden")
  document.querySelector("#fourReps").classList.add("hidden")
  document.querySelector("#fiveReps").classList.add("hidden")
  document.querySelector("#sixReps").classList.add("hidden")
  document.querySelector("#eightReps").classList.add("hidden")
  document.querySelector("#nineReps").classList.add("hidden")
  document.querySelector("#tenReps").classList.add("hidden")
  document.querySelector("#elevenReps").classList.add("hidden")
  document.querySelector("#twelveReps").classList.add("hidden")
})

document.querySelector("[data-eightRep]").addEventListener("click", () => {
  document.querySelector("#eightReps").classList.remove("hidden")
  document.querySelector("#oneRep").classList.add("hidden")
  document.querySelector("#twoReps").classList.add("hidden")
  document.querySelector("#threeReps").classList.add("hidden")
  document.querySelector("#fourReps").classList.add("hidden")
  document.querySelector("#fiveReps").classList.add("hidden")
  document.querySelector("#sixReps").classList.add("hidden")
  document.querySelector("#sevenReps").classList.add("hidden")
  document.querySelector("#nineReps").classList.add("hidden")
  document.querySelector("#tenReps").classList.add("hidden")
  document.querySelector("#elevenReps").classList.add("hidden")
  document.querySelector("#twelveReps").classList.add("hidden")
})

document.querySelector("[data-nineRep]").addEventListener("click", () => {
  document.querySelector("#nineReps").classList.remove("hidden")
  document.querySelector("#oneRep").classList.add("hidden")
  document.querySelector("#twoReps").classList.add("hidden")
  document.querySelector("#threeReps").classList.add("hidden")
  document.querySelector("#fourReps").classList.add("hidden")
  document.querySelector("#fiveReps").classList.add("hidden")
  document.querySelector("#sixReps").classList.add("hidden")
  document.querySelector("#sevenReps").classList.add("hidden")
  document.querySelector("#eightReps").classList.add("hidden")
  document.querySelector("#tenReps").classList.add("hidden")
  document.querySelector("#elevenReps").classList.add("hidden")
  document.querySelector("#twelveReps").classList.add("hidden")
})

document.querySelector("[data-tenRep]").addEventListener("click", () => {
  document.querySelector("#tenReps").classList.remove("hidden")
  document.querySelector("#oneRep").classList.add("hidden")
  document.querySelector("#twoReps").classList.add("hidden")
  document.querySelector("#threeReps").classList.add("hidden")
  document.querySelector("#fourReps").classList.add("hidden")
  document.querySelector("#fiveReps").classList.add("hidden")
  document.querySelector("#sixReps").classList.add("hidden")
  document.querySelector("#sevenReps").classList.add("hidden")
  document.querySelector("#eightReps").classList.add("hidden")
  document.querySelector("#nineReps").classList.add("hidden")
  document.querySelector("#elevenReps").classList.add("hidden")
  document.querySelector("#twelveReps").classList.add("hidden")
})

document.querySelector("[data-elevenRep]").addEventListener("click", () => {
  document.querySelector("#elevenReps").classList.remove("hidden")
  document.querySelector("#oneRep").classList.add("hidden")
  document.querySelector("#twoReps").classList.add("hidden")
  document.querySelector("#threeReps").classList.add("hidden")
  document.querySelector("#fourReps").classList.add("hidden")
  document.querySelector("#fiveReps").classList.add("hidden")
  document.querySelector("#sixReps").classList.add("hidden")
  document.querySelector("#sevenReps").classList.add("hidden")
  document.querySelector("#eightReps").classList.add("hidden")
  document.querySelector("#nineReps").classList.add("hidden")
  document.querySelector("#tenReps").classList.add("hidden")
  document.querySelector("#twelveReps").classList.add("hidden")
})

document.querySelector("[data-twelveRep]").addEventListener("click", () => {
  document.querySelector("#twelveReps").classList.remove("hidden")
  document.querySelector("#oneRep").classList.add("hidden")
  document.querySelector("#twoReps").classList.add("hidden")
  document.querySelector("#threeReps").classList.add("hidden")
  document.querySelector("#fourReps").classList.add("hidden")
  document.querySelector("#fiveReps").classList.add("hidden")
  document.querySelector("#sixReps").classList.add("hidden")
  document.querySelector("#sevenReps").classList.add("hidden")
  document.querySelector("#eightReps").classList.add("hidden")
  document.querySelector("#nineReps").classList.add("hidden")
  document.querySelector("#tenReps").classList.add("hidden")
  document.querySelector("#elevenReps").classList.add("hidden")
})

// Calculates estimated 1 rep max
function calcMaxWeight(weight, reps) {
  weight = Number(document.querySelector("#weight").value)
  reps = Number(document.querySelector("#reps").value)
  if (reps === 1) {
    eOneRepMax.innerText = `Estimated 1rm: ${weight}`
    return weight
  } else {
    let estimatedMaxWeight = weight * (1 + reps / 30)
    let roundedMax = Math.ceil(estimatedMaxWeight / 5) * 5
    eOneRepMax.innerText = `Estimated 1rm: ${roundedMax}`
    return roundedMax
  }
}

// Calculates weight based on RPE
function calculateOneRepWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  document.querySelector("#oneTen").innerText = maxWeight * 1
  document.querySelector("#oneNine").innerText =
    Math.round((maxWeight * 0.955) / 5) * 5
  document.querySelector("#oneEight").innerText =
    Math.round((maxWeight * 0.929) / 5) * 5
  document.querySelector("#oneSeven").innerText =
    Math.round((maxWeight * 0.892) / 5) * 5
  document.querySelector("#oneSix").innerText =
    Math.round((maxWeight * 0.863) / 5) * 5
}

function calculateTwoRepWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  document.querySelector("#twoTen").innerText =
    Math.round((maxWeight * 0.955) / 5) * 5
  document.querySelector("#twoNine").innerText =
    Math.round((maxWeight * 0.922) / 5) * 5
  document.querySelector("#twoEight").innerText =
    Math.round((maxWeight * 0.892) / 5) * 5
  document.querySelector("#twoSeven").innerText =
    Math.round((maxWeight * 0.863) / 5) * 5
  document.querySelector("#twoSix").innerText =
    Math.round((maxWeight * 0.837) / 5) * 5
}

function calculateThreeRepWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  document.querySelector("#threeTen").innerText =
    Math.round((maxWeight * 0.922) / 5) * 5
  document.querySelector("#threeNine").innerText =
    Math.round((maxWeight * 0.892) / 5) * 5
  document.querySelector("#threeEight").innerText =
    Math.round((maxWeight * 0.863) / 5) * 5
  document.querySelector("#threeSeven").innerText =
    Math.round((maxWeight * 0.837) / 5) * 5
  document.querySelector("#threeSix").innerText =
    Math.round((maxWeight * 0.811) / 5) * 5
}

function calculateFourRepWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  document.querySelector("#fourTen").innerText =
    Math.round((maxWeight * 0.892) / 5) * 5
  document.querySelector("#fourNine").innerText =
    Math.round((maxWeight * 0.863) / 5) * 5
  document.querySelector("#fourEight").innerText =
    Math.round((maxWeight * 0.837) / 5) * 5
  document.querySelector("#fourSeven").innerText =
    Math.round((maxWeight * 0.811) / 5) * 5
  document.querySelector("#fourSix").innerText =
    Math.round((maxWeight * 0.786) / 5) * 5
}

function calculateFiveRepWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  document.querySelector("#fiveTen").innerText =
    Math.round((maxWeight * 0.863) / 5) * 5
  document.querySelector("#fiveNine").innerText =
    Math.round((maxWeight * 0.837) / 5) * 5
  document.querySelector("#fiveEight").innerText =
    Math.round((maxWeight * 0.811) / 5) * 5
  document.querySelector("#fiveSeven").innerText =
    Math.round((maxWeight * 0.786) / 5) * 5
  document.querySelector("#fiveSix").innerText =
    Math.round((maxWeight * 0.762) / 5) * 5
}

function calculateSixRepWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  document.querySelector("#sixTen").innerText =
    Math.round((maxWeight * 0.837) / 5) * 5
  document.querySelector("#sixNine").innerText =
    Math.round((maxWeight * 0.811) / 5) * 5
  document.querySelector("#sixEight").innerText =
    Math.round((maxWeight * 0.786) / 5) * 5
  document.querySelector("#sixSeven").innerText =
    Math.round((maxWeight * 0.762) / 5) * 5
  document.querySelector("#sixSix").innerText =
    Math.round((maxWeight * 0.739) / 5) * 5
}

function calculateSevenRepWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  document.querySelector("#sevenTen").innerText =
    Math.round((maxWeight * 0.811) / 5) * 5
  document.querySelector("#sevenNine").innerText =
    Math.round((maxWeight * 0.786) / 5) * 5
  document.querySelector("#sevenEight").innerText =
    Math.round((maxWeight * 0.762) / 5) * 5
  document.querySelector("#sevenSeven").innerText =
    Math.round((maxWeight * 0.739) / 5) * 5
  document.querySelector("#sevenSix").innerText =
    Math.round((maxWeight * 0.707) / 5) * 5
}

function calculateEightRepWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  document.querySelector("#eightTen").innerText =
    Math.round((maxWeight * 0.786) / 5) * 5
  document.querySelector("#eightNine").innerText =
    Math.round((maxWeight * 0.762) / 5) * 5
  document.querySelector("#eightEight").innerText =
    Math.round((maxWeight * 0.739) / 5) * 5
  document.querySelector("#eightSeven").innerText =
    Math.round((maxWeight * 0.707) / 5) * 5
  document.querySelector("#eightSix").innerText =
    Math.round((maxWeight * 0.68) / 5) * 5
}

function calculateNineRepWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  document.querySelector("#nineTen").innerText =
    Math.round((maxWeight * 0.762) / 5) * 5
  document.querySelector("#nineNine").innerText =
    Math.round((maxWeight * 0.739) / 5) * 5
  document.querySelector("#nineEight").innerText =
    Math.round((maxWeight * 0.707) / 5) * 5
  document.querySelector("#nineSeven").innerText =
    Math.round((maxWeight * 0.68) / 5) * 5
  document.querySelector("#nineSix").innerText =
    Math.round((maxWeight * 0.653) / 5) * 5
}

function calculateTenRepWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  document.querySelector("#tenTen").innerText =
    Math.round((maxWeight * 0.739) / 5) * 5
  document.querySelector("#tenNine").innerText =
    Math.round((maxWeight * 0.707) / 5) * 5
  document.querySelector("#tenEight").innerText =
    Math.round((maxWeight * 0.68) / 5) * 5
  document.querySelector("#tenSeven").innerText =
    Math.round((maxWeight * 0.653) / 5) * 5
  document.querySelector("#tenSix").innerText =
    Math.round((maxWeight * 0.626) / 5) * 5
}

function calculateElevenRepWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  document.querySelector("#elevenTen").innerText =
    Math.round((maxWeight * 0.707) / 5) * 5
  document.querySelector("#elevenNine").innerText =
    Math.round((maxWeight * 0.68) / 5) * 5
  document.querySelector("#elevenEight").innerText =
    Math.round((maxWeight * 0.653) / 5) * 5
  document.querySelector("#elevenSeven").innerText =
    Math.round((maxWeight * 0.626) / 5) * 5
  document.querySelector("#elevenSix").innerText =
    Math.round((maxWeight * 0.599) / 5) * 5
}

function calculateTwelveRepWeights(maxWeight) {
  maxWeight = calcMaxWeight()
  document.querySelector("#twelveTen").innerText =
    Math.round((maxWeight * 0.68) / 5) * 5
  document.querySelector("#twelveNine").innerText =
    Math.round((maxWeight * 0.653) / 5) * 5
  document.querySelector("#twelveEight").innerText =
    Math.round((maxWeight * 0.626) / 5) * 5
  document.querySelector("#twelveSeven").innerText =
    Math.round((maxWeight * 0.599) / 5) * 5
  document.querySelector("#twelveSix").innerText =
    Math.round((maxWeight * 0.574) / 5) * 5
}
