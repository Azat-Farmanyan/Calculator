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
               a += btnValue
            }
         } else a += btnValue
         result.innerText = a
         console.log('a: ', a);
      } else {
         if (btnValue === '.') {
            if (!b.includes('.')) {
               b += btnValue
            }
         } else b += btnValue
         result.innerText = b

         console.log('b: ', b);
      }
   }
   if (operationArray.includes(btnValue)) {
      operatorClicked = true
      currentOperator = btnValue
      console.log(btnValue);
   }
   if (btnValue === '=') {
      operatorClicked = false
      let currentResult = getResult(a, b, currentOperator)
      result.innerText = currentResult
      a = +currentResult
      b = ''
   }
   if (btnValue === 'C') {
      a = ''
      b = ''
      result.innerText = 0
   }
   if (btnValue === '') {
      if (a != '' & b == '') {
         a = a.slice(0, -1)
         result.innerText = a
      } else {
         b = b.slice(0, -1)
         result.innerText = b
      }
   }
})



function getResult(x, y, getOperator) {
   switch (getOperator) {
      case '+': return +x + +y; break;
      case '-': return +x - +y; break;
      case 'X': return +x * +y; break;
      case '/':
         if (y === '0') return 'Error'
         return +x / +y; break;
   }
}