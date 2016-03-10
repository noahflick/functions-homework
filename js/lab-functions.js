//1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log("maxOfTwoNumbers:")
console.log(maxOfTwoNumbers(3, 9));

//2.
function maxOfThree(a,b,c){
  if(a > b && a > c)
    return a
  else if (b > c && b > a)
    return b
  else if (c > a && c > b)
    return c
  else return "nope"
}

console.log("maxOfThree:")
console.log(maxOfThree(3,7,4))

//3.

function isCharAVowel(char){

  return char.toUpperCase() === "A" ||
      char.toUpperCase() === "E" ||
      char.toUpperCase() === "I" ||
      char.toUpperCase() === "O" ||
      char.toUpperCase() === "U"
}

console.log("isCharAVowel:")
console.log(isCharAVowel("O"))
console.log(isCharAVowel("D"))
console.log(isCharAVowel("e"))

//4.

function sumArray(arr){
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
}

console.log("sumArray:")
console.log(sumArray([1, 3, 5, 6, 4,]))
console.log(sumArray([ 2, 4, 6, 8, 10, 12]))


//5.

function multiplyArray(arr){
  var product = arr[0]
  for (var i = 1; i < arr.length; i++) {
    product *= arr[i]
    }

  return product
}

console.log("multiplyArray:")
console.log(multiplyArray([2, 4, 5]))
console.log(multiplyArray([2, 3, 9, 6]))

//6.

function numArgs(){

  return arguments.length //not sure if this (using the arguments object) is cheating?
}

console.log("numArgs:")
console.log(numArgs(1,2,3,4))
console.log(numArgs("one", "two", [3,4], true, 6))

//7.

function reverseString(string){
  var reverse = ""
  for (var i = 0; i < string.length; i++) {
    reverse += string.charAt(string.length - 1 - i)
  }
  return reverse
}

console.log("reverseString:")
console.log(reverseString("javascript is fun!"))
console.log(reverseString("a man a plan a canal panama ): "))
console.log(reverseString("?JA ,pu s'tahW"))

//8.

function longestWordLength(stringArr){
  longest = 0
  for (var i = 0; i < stringArr.length; i++) {
    if(stringArr[i].length > longest)
      longest = stringArr[i].length
  }
  return longest
}

console.log("longestWordLength:")
console.log(longestWordLength(["o", "two", "apple", "orange", "1234"]))
console.log(longestWordLength(["1","2","3"]))

//9.

function stringsLongerThan(stringArr, num){
  var longStrings = []
  for (var i = 0; i < stringArr.length; i++){
    if(stringArr[i].length > num)
      longStrings.push(stringArr[i])
  }

  return longStrings
}

console.log("stringsLongerThan:")
console.log(stringsLongerThan(["o", "two", "apple", "orange", "1234"], 3))
console.log(stringsLongerThan(["o", "two", "apple", "orange", "1234"], 5));



