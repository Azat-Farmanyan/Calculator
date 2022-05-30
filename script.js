const calcBody = document.body.querySelector('.calc-body')
const buttons = calcBody.querySelector('.buttons')
const result = calcBody.querySelector('.result')


const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '.']
const operationArray = ['/', 'X', '-', '+']
let operatorClicked = false
let currentOperator = ''
let a = ''
let b = ''
buttons.addEventListener('click', e => {
   const btnValue = e.target.innerText
   if (numbersArray.includes(btnValue)) {
      if (operatorClicked === false) {
         if (btnValue === '.') {
            if (a !== '' & !String(a).includes('.')) {
               if (checkInputLength(a)) {
                  a += btnValue
               }
            }
         } else {
            if (checkInputLength(a)) {
               a += btnValue
            }
         }
         setSize(a)

         result.innerText = a
         // console.log('a: ', a);
      } else {
         if (btnValue === '.') {
            if (!b.includes('.')) {
               if (checkInputLength(b)) {
                  b += btnValue
               }
            }
         } else {
            if (checkInputLength(b)) {
               b += btnValue
            }
         }
         setSize(b)
         result.innerText = b

         // console.log('b: ', b);
      }
   }
   if (operationArray.includes(btnValue)) {
      operatorClicked = true
      currentOperator = btnValue
      // console.log(btnValue);
   }

   if (btnValue === '+/-') {
      console.log('+/-');
      if (a != '' & b === '') {
         a *= -1
         result.innerText = a
      }
      if (a & b != '') {
         b *= -1
         result.innerText = b
      }
   }

   if (btnValue === '=') {
      operatorClicked = false
      let currentResult = getResult(a, b, currentOperator)
      setSize(currentResult)

      result.innerText = currentResult
      a = +currentResult
      b = ''
   }
   if (btnValue === '%') {
      const percent = a / 100
      result.innerText = percent
      a = String(percent)
   }

   if (btnValue === 'C') {
      result.style.fontSize = '96px'
      a = ''
      b = ''
      result.innerText = 0
   }
   if (btnValue === '') {
      if (a != '' & b == '') {
         a = a.slice(0, -1)
         setSize(a)
         result.innerText = a
      } else {
         b = b.slice(0, -1)
         setSize(b)
         result.innerText = b
      }
   }
})


function setSize(str) {
   if (String(str).length < 7) {
      result.style.fontSize = '96px'
   }
   if (String(str).length > 6) {
      result.style.fontSize = '50px'
   }
   if (String(str).length > 10) {
      result.style.fontSize = '35px'
   }
   if (String(str).length > 16) {
      result.style.fontSize = '27px'
   }
}
function checkInputLength(params) {
   // console.log('inut length: ', params.length);
   return params.length > 9 ? false : true
}
function getResult(x, y, getOperator) {
   switch (getOperator) {
      case '+': return +x + +y; break;
      case '-': return +x - +y; break;
      case 'X': return +x * +y; break;
      case '/': return +x / (y === '0' ? 0 : +y); break;
   }
}