// 1.
// given a list of words and a list of words to remove from the list,
// remove all the words from the list. Do this without creating a new array.

// hint: you can use the Array splice method

const list = ['ZERO', 2, 'THREE', 4, 'FIVE', 6];
let wordsToRemove = ['ZERO', 'THREE', 'FIVE'];

//Method 1:
function removeFromList(list, wordsToRemove) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < wordsToRemove.length; j++) {
      if (list[i] === wordsToRemove[j]) {
        list.splice(i, 1);
      }
      console.log(list);
    }
  }
}

removeFromList(list, wordsToRemove);

/* Steps I Took to Solve this Problem
  1) Created two sample lists - one that has a bunch of words and numbers and the other tells you what needs to be removed from the first list.
  2) Declared a function called removeFromList that takes two arguments/parameters: the two lists
  3) Implemented a for loop that iterates through the list array.
  4) Inside of the for loop, there's another for loop that iterates through the wordsToRemove array.
  5) Used an if contional that checks each index of both arrays and sees if the contents of either array exactly matches (thus the "===", which also checks the type of the items in a certain index).
    If the check is true, as in there is an exact match, then the content will be removed (spliced) from the list array using the array.splice() method.
  6) console.log(list) shows you the list array after the function runs and this shows if the list array has been modified or not. */


//2.
// Write a class that has the methods setName and getName. The class should have a name property
// and 'setName' should update the name class property with a given name and 'getName'
// should return the class property 'name'.

class Cats {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this.name = value;

  }
}

const cheshire = new Cats('Cheshire');

/* Steps I took to solve this problem:
  1) Using class declaration, I defined a class called Cats (ln 39). Classes encapsulate data and functionality of an object. In this case, Cats is an object. The sound class provides a template of what the Class object is like but doesn't create the object itself (that's where the contructor comes in).
  2) Contructor(name) basically constructs an object instance inside of the class. The constructor method enables you to provide any custom initialization that needs to take place before any other methods can be called on the object that is being created.
    The object in this case is the Cats object, which takes a parameter called name.
  3) The "this" keyword being used in this.name basically binds whatever data is inside of the Cats object to the current instance of the Cats object.
  4) Getter methods are used when you want to access a property of an object. In this case, by using get, we are binding a function to an object instance (so every time you call an object, this function will run).
  5) Setter methods are used when you want to mutate a property of an object. In this case, by using set, we are allowing users to be able to set a name of the cat object from outside of the class (see line 52 - we created a new cat object with the name "Cheshire"*/

// 3.
// create an object that has the following properties: a: 12, b: 'foo', and c: false

const obj = {
  a: 12,
  b: 'foo',
  c: false
}

// Note: "a,b,c" are keys of an object that have values 12, 'foo' and false respectively.

// write an arrow function that takes two numbers, adds them, and returns the result

const addSum = (number1, number2) => {
  const sum = number1 + number2;
  console.log(sum)
}

/*
5.
A naive way of implementing a sequencer is by using an array
to store the sounds that happen at a certain time. For example,
all the sounds that should be played at time "i" will be stored in
the "ith" index

Lets assume that we have a play method that, when passed a sound,
we can play it. You don't need to care about how it is implemented

Also you don't need to worry how the Sound class is implemented.
*/
class Sound {
  constructor(midi) {
    this.midi = midi;
  }
}

/* Steps I took to solve this problem:
  1) Using class declaration, I defined a class called Sound (ln 71). Classes encapsulate data and functionality of an object. In this case, sound is an object. The sound class provides a template of what the sound object is like.
  2) Contructor(midi) basically constructs an object instance inside of the class. The constructor method enables you to provide any custom initialization that needs to take place before any other methods can be called on the object that is being created.
    The object in this case is the sound object, which takes a parameter called MIDI.
  3) The "this" keyword being used in this.midi basically binds whatever data is inside of the sound object to the current instance of the sound object. */

class Sequencer {
  constructor() {
    this.sequence = [];
  }

  // The `sound` paramater is an instance of `Sound` class
  addSound(time, sound) {
    this.time = time;
    this.sound = sound;
  }

  // The `sound` paramater is an instance of `Sound` class
  removeSound(time, sound) {
    this.time = time;
    this.sound = sound;
  }

  playAllSoundsAtTimeI(i) {
    this.time = i;
  }

  // The `sound` paramater is an instance of `Sound` class
  // Pretend this method is impelmented for you
  play(sound) {}
}

//6.
const expect = require('expect');

// don't use any built in functions
// add all the keys of an object to an array
// add all the values of an object to another array
// return both arrays

function addKeysAndValuesToArrays(givenObj) {
  let keys = [];
  let values = [];
  for (const key in givenObj) {
    keys.push(key);
    values.push(givenObj[key])
  }
  return [keys, values]
}

expect(addKeysAndValuesToArrays({
  foo: 1,
  bar: 4
})).toEqual([
  ['foo', 'bar'],
  [1, 4]
]);

// Write a function that returns if a number is even or not
function isEven(num) {
  if (num % 2 == 0) {
    return true
  } else {
    return false
  }
}

isEven(4)

// Write a function that takes an array of numbers and return an array
// with only the even numbers

let nums = [ 1,2,3,4,5,6]

function evenNums (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

//Test
evenNums(nums);

//Alt solution: const filterEven = (arr) => arr.filter(isEven)

// Write a function that checks if a string is a palindrome
// ex. 'racecar'

function isPalindrome (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length-1-[i]]) {
      return false
    }
  }
  return true
}
