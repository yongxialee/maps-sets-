//*************************** */
//Maps and Sets Exercise
//*************************** */

//what does the following code return?

//it removes duplicate values
let n= new Set([1,1,2,2,3,4,]); // {1,2,3,4}

// what does the following code return?
[...new Set("referee")].join("")  // 'ref'

//what does the following code return?
let m = new Map();
m.set([1,2,3],true);  // when running m, it will return
m.set([1,2,3],false);
/*
{[1,2,3] => true,[1,2,3] => false}
*/

//has duplicate
// white a function called hasDuplicate which accepts an array and returns true or false if that array conatins a duplicate
const hasDuplicate = arr =>{
    return new Set(arr).size !==arr.length;
}


//vowelCount
// white a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of vowels in the string.
const vowelCount = str => {
    const vowelMap= new Map();
    for(let char of str){
        let lowerCasedLetter=char.toLowerCase();
        if('aeiou'.includes(lowerCasedLetter)){
            if(vowelMap.has(lowerCasedLetter)){
                vowelMap.set(lowerCasedLetter,vowelMap.get(lowerCasedLetter) +1); //get lowerCased value which is 1 then +1 
            }else{
                vowelMap.set(lowerCasedLetter,1);  //initial value
            }
        }
    }
    return vowelMap;
}