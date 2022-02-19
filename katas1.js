function oneThroughTwenty() {
  let num = [];
  for (let i = 1; i <= 20; i++){
      num.push(i);
  }
  return num; 
}
console.log(oneThroughTwenty());



function evensToTwenty() {
   let numPar = [];
   for (let i = 1; i <= 20; i++){
       if(i % 2 === 0){
           numPar.push(i);
       }
   }
   return numPar;
}
console.log(evensToTwenty())




function oddsToTwenty() {
  let numImpar = [];
  for (let i = 1; i <= 20; i++){
      if(i % 2 !== 0){
          numImpar.push(i);
      }
  }
  return numImpar;
}
console.log(oddsToTwenty())




function multiplesOfFive() {
   let mulFive = [];
   for (let i = 1; i <= 100; i++){
       if(i % 5 === 0) {
           mulFive.push(i);
       }
   }
   return mulFive;
}
console.log(multiplesOfFive()) 






function squareNumbers() {
   let squareNum = [];
   for(let i = 1; i <= 10; i++){
           squareNum.push(i * i);
   }
   return squareNum;      
}
console.log(squareNumbers())






function countingBackwards() {
   let countingBackNum = [];
   for(let i = 20; i > 0; i--){
       countingBackNum.push(i);
   }
   return countingBackNum;
}
console.log(countingBackwards());








function evenNumbersBackwards() {
   let evenNumBack = [];
   for(let i = 20; i > 0; i--){
       if(i % 2 === 0){
           evenNumBack.push(i);
       }
   }
   return evenNumBack;
}
console.log(evenNumbersBackwards())





function oddNumbersBackwards() {
   let oddNumBack = [];
   for(let i = 20; i > 0; i--){
       if(i % 2 !== 0){
           oddNumBack.push(i);
       }
   }
   return oddNumBack;
}
console.log(oddNumbersBackwards());






function multiplesOfFiveBackwards() {
   let multFiveBack = [];
   for(let i = 100; i > 0; i--){
       if(i % 5 === 0){
           multFiveBack.push(i);
       }
   }
   return multFiveBack;
}
console.log(multiplesOfFiveBackwards())



function squareNumbersBackwards() {
   let squareNumBack = [];
   for(let i = 10; i > 0; i--){
           squareNumBack.push(i * i);
   }
   return squareNumBack;
}
console.log(squareNumbersBackwards());
