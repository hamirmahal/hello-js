let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = true
let runnerAge = 56

if (runnerAge > 18 && regEarly) {
  raceNumber += 1000
}

if (runnerAge > 18 && regEarly) {
  console.log(`Your race time is at 9:30 am and your race number is ${raceNumber}.`)
} else if (runnerAge > 18 && regEarly != true) {
  console.log(`Late adults run at 11:00 am and your race number is ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`Your race is at 12:30 pm and your race number is ${raceNumber}.`)
} else if (runnerAge = 18) {
  console.log('Please see registration desk for assistance.')
}


