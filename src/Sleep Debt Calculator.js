const getSleepHours = day => {
 if (day ==='Monday') {
   return 8;
 } else if (day === 'Tuesday') {
   return 5;
 } else if (day === 'Wednesday') {
   return 6;
 } else if (day === 'Thursday') {
   return 10;
 } else if (day === 'Friday') {
   return 7;
 } else if (day === 'Saturday') {
   return 9;
 } else if (day === 'Sunday') {
   return 2;
 }
} 

console.log(getSleepHours('Sunday'));

const getActualSleepHours = () => {
 return getSleepHours('Monday') +
  getSleepHours('Tuesday') + 
  getSleepHours('Wednesday') + 
  getSleepHours('Thursday') + 
  getSleepHours('Friday') + 
  getSleepHours('Saturday') + 
  getSleepHours('Sunday');   
}

console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 7
  return idealHours * 7
}

console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
	let actualSleepHours = getActualSleepHours();
	let idealSleepHours = getIdealSleepHours();
	if (actualSleepHours === idealSleepHours) {
  console.log('You got the perfect amount of sleep!')
	} else if (actualSleepHours > idealSleepHours) {
  console.log(`You got ${actualSleepHours - idealSleepHours} more sleep than needed!`)
	} else if (actualSleepHours < idealSleepHours) {
  console.log(`You got ${idealSleepHours - actualSleepHours} less then you need. Get some rest!`)
	}
}

calculateSleepDebt();