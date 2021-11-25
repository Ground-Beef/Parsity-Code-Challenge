const findSum = function(array) {
  let sum = 0;
    for(i = 0; i < array.length; i ++) {
        sum += array[i];
    }
    return sum;
  };


const findFrequency = function(array) {
    
    let obj = {most :'', least : ''};
    let baseCount = 1;
    let freqCount = 0;
    let mostFreq;
    let leastFreq;

    for (i = 0; i < array.length; i ++) {
       
        for (j = 0; j < array.length; j ++) {

            if (array[j] === array[i]) {
            
                freqCount ++;
        
                if (freqCount > baseCount) {
                  mostFreq = array[j];
                }
                 }
          
           else if (array[j] !== array[i]) {

             if (freqCount <= baseCount){
                
                leastFreq = array[j];
             }
           }
        };
  obj.most = mostFreq;
  obj.least = leastFreq;
  return obj;
  };
};

const isPalindrome = function(str) {
  
    let testArry = Array.from(str);
    let x = Math.floor((testArry.length-1) / 2);
    let z = testArry.length - 1;
      
      for(i = 0; i < x; i ++){
       if (testArry[i] === testArry[z]) {
       z--;
        return true;
        } 
        else if (testArry[i] !== testArry[z])
      {return false;}
}
};

const largestPair = function(array) {
  let highScore = 0;
  let currentScore = 0;
    for (i = 0; i < array.length; i ++) {
        currentScore = array[i] * array[i+1];
        if(currentScore > highScore){
            highScore = currentScore;
        }
    } 
return highScore;
};

const removeParenth = function(str)  {
   let indx1;
   let indx2;
   let testArry = Array.from(str);
   for( i = 0; i < testArry.length; i++){
        if (testArry[i] === '('){
            indx1 = testArry.indexOf('(');
        }
        else if (testArry[i] === ')') {
            indx2 = testArry.indexOf(')');
        }
   }
   for (j = indx1; j <= indx2; j ++){
       testArry.splice(j, 1);
   }
   return testArry.join('');
 
}

const scoreScrabble = function(str) {
  let arr = Array.from(str);
    let ss = 0;
     
      for (i = 0; i < arr.length; i++){

       if(arr[i] === 'a'|| arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o'|| arr[i] ==='u' || arr[i] ==='l' || arr[i] ==='n'|| arr[i] ==='r'|| arr[i] ==='s' || arr[i] ==='t'){
           arr[i] = 1;
       } else if (arr[i] ==='d'|| arr[i] ==='g'){
           arr[i] = 2;
       } else if (arr[i] ==='b'|| arr[i] ==='c'|| arr[i] ==='m'|| arr[i] ==='p'){
           arr[i] = 3;
       } else if (arr[i] === 'f'|| arr[i] ==='h'|| arr[i] ==='v'|| arr[i] ==='w'|| arr[i] ==='y'){
           arr[i] = 4;
       } else if (arr[i] === 'k'){
           arri[i] = 5;
       } else if (arr[i] ==='j'|| arr[i] ==='x'){
           arr[i] = 8;
       } else if (arr[i] === 'q'|| arr[i] ==='z'){
           arr[i] = 10;
       }

      ss += arr[i];
       }
   return ss;
};
