'use strict';
/**
 * 
 * @param {number} x-основание степени
 * @param {number} n-показатель степени
 * @returns возводит в степень x^n
 */
function pow(x,n){
  return x**n;  
}
/**
 * 
 * @param {number} n - количество чисел
 * @returns возвращает сумму от 1 до N
 */
function sumTo(n){
  let sum=0;
  for(let i=1;i<=n;i++){
    sum+=i;
  }
  return sum;
}
/**
 * 
 * @param {number} n - основание факториала 
 * @returns возвращает n-ый факториал
 */
function factorial(n){
 if(n>0)
   return (n*factorial(n-1));
   else 
     return 1;
  }
/**
 * 
 * @param {number} n - ое число число Фибоначчи
 * @returns возвращает n-oe число Фибоначчи
 */
 function fib(n) {
  let a = 1n;
  let b = 1n;
 if (n==0) return 0;
 if (n==1) return 1;
 if (n==2) return 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
/**
 * 
 * @param {number} x - одно из ставниваемых чисел
 * @returns функцию
 */
 function compare(x)
 {
     let res= function(y){
     if(x>y){ return true;}
     if(x<y){return false;}
     if(x==y){return null;}
     
     }
     return res;
 }	
/**
 * 
 * @param {number} num - число
 * @param {number} cols - к-во столбцов 
 * @returns {string} - на вывод
 * 
 */
 function printNumbers(num, cols) {
  let str1 = ""
  let rows = Math.ceil(num / cols);
  for (let row = 0; row < rows; ++row) {
      let str = '';
      for (let col = 0; col < cols; ++col) {
          if ((row + rows * col) < num)
              str += (row + rows * col) + ' ';
      }
      str1+=str+"\n";       
  }
  return str1;
}
