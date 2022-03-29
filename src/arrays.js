const getNthElement = (index, array) => {
  if( index < array.length && index > -2){
    return array[index]; 
}
    
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return array = string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);

}
const removeNthElement = (index, array) => {
  array.splice (index, 1);
};

const numbersToStrings = numbers => {
  
};

const uppercaseWordsInArray = strings => {
  strings2 = strings.map (y=>y.toUpperCase ()) ;
  return strings2;
};

const reverseWordsInArray = strings => {
  return strings.map(item => item.split("").reverse().join(""));
};
const onlyEven = numbers => {
  return numbers.filter(elem => elem%2 == 0)

};

const removeNthElement2 = (index, array) => {
  
};

const elementsStartingWithAVowel = strings => {
return strings.filter (strings => /^[aeiou]/i.test(strings));
};

const removeSpaces = string => {
  return string.replace(/\s+/g, '')
};

const sumNumbers = numbers => {
  var total = 0;
  for (i = 0; i < numbers.length; ++i) {
       total += numbers[i]; 
  }
  return total; 
};

const sortByLastLetter = strings => {
  
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
