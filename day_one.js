1. isString

function isString(string){
    if(typeof string === 'string'){
      return true;
    } else{
      return false;
    }
}

console.log(isString(5))

/////////////////////////////////////////////////

2. check for array

function checkForArray(array){
  if(Array.isArray(array)){
        return true;
  } else{
    return false;
  }
}

console.log(checkForArray({ a: 2 }))

/////////////////////////////////////////////////

3. Check for Types in Array, solved this googling, still do not understand it!!!

function checkType(array){
  return array.every(function(i)
  { return typeof i === "string" 
});
}

console.log(checkType(['hello', 'rilind']))

4. Sort and Remove Duplicated Characters, do not know this
let a = 'aabbccdd';
let b = 'ccddeeff';
let c = '';

5. Convert Number to Reversed Array of Digits , needed a hand !!!

function reverseArray(array){
  let arr = (""+array).split('');
  let reversedArray = [];
  for(let i = arr.length; i>=0; i--){
    reversedArray[i] = arr.shift();
  }
  return reversedArray;
}

console.log(reverseArray(34521));

6. Count Repetitions

function count(){
  let authors = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];
  for
}

