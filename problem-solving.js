// Anti-pattern inheritance
class Rectangle {
  constructor(w,h){
    this.w = w
    this.h = h
  }
}

Rectangle.prototype.area = function () {
  return this.w * this.h
}

class Square extends Rectangle {
  constructor(a){
    super(a,a)
  }
}


// if odd * 2  if even * 3
const findArr = (arr) => {
  let modArr = arr.map((v) => {
    if(v % 2 === 0){
      return v * 2
    }else{
      return v * 3
    }
  })
  return modArr
}

// range for odd numbers left to right
const range = (l,r) => {
  let arr = []
  for(let ctr = l; l <= r; l++){
    if(l % 2 !== 0) {
      arr.push(l)
    }
  }
  let modArr = arr.map(v => {
    return v
  })

  return modArr.join('')
}

// Find the number
const findArrInput = (arr,input) => {
  let modArr
  if(arr.includes(input)){
    modArr = 'YES'
  }else{
    modArr = 'NO'
  }
  return modArr
}

// join shuffle
function join(str1, str2){
    let str3="";
    if(str1.length>=str2.length){
        for(let i=0;i<str1.length;i++){
            str3 += str1.charAt(i);
            str3 += str2.charAt(i);
        }
    }
    else if(str2.length>=str1.length){
        for(let i=0;i<str2.length;i++){
            str3 += str1.charAt(i);
            str3 += str2.charAt(i);
        }
    }
    return str3;
}

// Array return
function fibonacci(n){
   const tempArr = [0, 1].slice(0, n);
   for(let ctr = 2; ctr < n; ctr++)
     tempArr[ctr] = tempArr[ctr - 1] + tempArr[ctr - 2];
   return tempArr;
 }

// Output return
 function fibonacciSingle(n) {
     let x = 1
     let y = 0
     let tempVar

     let arr = []

     while(n>=0){
         tempVar = x
         x += y
         y = tempVar
         n--
     }

     return y

 }

 // regex vowels and consonants starts and ends
 const regexVar = () => {
   let re = /^[aeiou]$|^([aeiou]|[aeiou]).*\1$/

   return re
 }
 //  bcd  -- false
 // abcd -- false
 // abcda -- true
 // abcdo -- false


 // vowels and consonants printing vowels first
 const readLine = s => {
   let vow = Array.from(s).filter(letter => {
     return 'aeiou'.includes(letter)
   }).join('\n')

   let cons = Array.from(s).filter(letter => {
     return'bcdfghjklmnpqrstvwxyz'.includes(letter)
   }).join('\n')

   console.log(`${vow}\n${cons}`)
 }

 // Closures deleting parent

 let allButtons = document.querySelectorAll('button');
 // Solution 1: simple for loop
 // for(let ctr = 0; ctr < allButtons.length; ctr++ ){
 //   allButtons[ctr].addEventListener('click', () => {
 //     alert(ctr);
 //   })
 // }
 // Solution 2: forEach function built in for arrays
 allButtons.forEach((button,arrIndex) => {
   button.addEventListener('click', () => {
     console.log(arrIndex);
   })
 });

 let delBtns = document.getElementsByClassName('del'); // fetching HTML Collections
 let delBtnArr = [].slice.call(delBtns);
 let b = document.getElementsByClassName('photos')[0].getElementsByTagName('button');
 let c = Array.prototype.slice.call(b);
 c.forEach(function(btn,index){
   btn.addEventListener('click',function(){
     btn.parentNode.remove(btn.parentNode);
     console.log('deleted: ',btn.parentNode)
   })
 })
