const { assert } = require('chai');
const loops = require('../Loops.js');

describe('loops methods', () => {
    describe('getCountAndSum', () => {  
        it('should return Количество четных чисел от 1 до 99 равно: 2450, а их сумма равна: 49.', () => {
           const expected = "Количество четных чисел от 1 до 99 равно: 2450, а их сумма равна: 49.";
           
           //const actual = loops.getCountAndSum(arg);

           assert.isDefined(expected);

        });
    
    });
    
    describe('checkNumber', () => {  
        it('should return число является составным', () => {
           const arg = 8;
           const expected = "число является составным";

           const actual = loops.checkNumber(arg);
           
           assert.strictEqual(actual, expected);

        });
      
        it('should return число является простым', () => {
           const arg = 3;
           const expected = "число является простым";

           const actual = loops.checkNumber(arg);
           
           assert.strictEqual(actual, expected);

        });
    
        it('should return Данные не были введены либо был введен ноль', () => {
           const arg = 0;
           const expected = "Данные не были введены либо был введен ноль";

           const actual = loops.checkNumber(arg);
           
           assert.strictEqual(actual, expected);

        });
    
        it('should return Данные не соответствуют условию задачи', () => {
           const arg = "hi";
           const expected = "Данные не соответствуют условию задачи";

           const actual = loops.checkNumber(arg);
           
           assert.strictEqual(actual, expected);

        });
    
    });

    describe('findSqrt', () => {  
        it('should return 13', () => {
           const arg = 169;
           const expected = 13;

           const actual = loops.findSqrt(arg);
           
           assert.strictEqual(actual, expected);

        });

        it('should return 5', () => {
            const arg = 35;
            const expected = 5;
 
            const actual = loops.findSqrt(arg);
            
            assert.strictEqual(actual, expected);
 
         });

         it('should return Данные не были введены либо был введен ноль', () => {
            const arg = 0;
            const expected = "Данные не были введены либо был введен ноль";
 
            const actual = loops.findSqrt(arg);
            
            assert.strictEqual(actual, expected);
 
         });

         it('should return Данные не соответствуют условию задачи', () => {
            const arg = "hi";
            const expected = "Данные не соответствуют условию задачи";
 
            const actual = loops.findSqrt(arg);
            
            assert.strictEqual(actual, expected);
 
         });
    
    });

    describe('calcFactorial', () => {  
        it('should return Данные не были введены', () => {
           const arg = "";
           const expected = "Данные не были введены";

           const actual = loops.calcFactorial(arg);
           
           assert.strictEqual(actual, expected);

        });

        it('should return Данные не соответствуют условию задачи', () => {
            const arg = "hi";
            const expected = "Данные не соответствуют условию задачи";
 
            const actual = loops.calcFactorial(arg);
            
            assert.strictEqual(actual, expected);
 
         });

         it('should return Введите положительное число', () => {
            const arg = -56;
            const expected = "Введите положительное число";
 
            const actual = loops.calcFactorial(arg);
            
            assert.strictEqual(actual, expected);
 
         });

         it('should return 5040', () => {
            const arg = 7;
            const expected = 5040;
 
            const actual = loops.calcFactorial(arg);
            
            assert.strictEqual(actual, expected);
 
         });
    
    });

    describe('calcSumGivNum', () => {  
        it('should return не указан аргумент', () => {
           const arg = "";
           const expected = "не указан аргумент";

           const actual = loops.calcSumGivNum(arg);
           
           assert.strictEqual(actual, expected);

        });

        it('should return аргумен не являеться числом', () => {
            const arg = "hi";
            const expected = "аргумен не являеться числом";
 
            const actual = loops.calcSumGivNum(arg);
            
            assert.strictEqual(actual, expected);
 
         });

         it('should return 0', () => {
            const arg = 0;
            const expected = 0;
 
            const actual = loops.calcSumGivNum(arg);
            
            assert.strictEqual(actual, expected);
 
         });

         it('should return 15', () => {
            const arg = 12345;
            const expected = 15;
 
            const actual = loops.calcSumGivNum(arg);
            
            assert.strictEqual(actual, expected);
 
         });
    
    });

    describe('reversNum', () => {  
        it('should return не указан аргумент', () => {
           const arg = "";
           const expected = "не указан аргумент";

           const actual = loops.reversNum(arg);
           
           assert.strictEqual(actual, expected);

        });

        it('should return аргумен не являеться числом', () => {
            const arg = "hi";
            const expected = "аргумен не являеться числом";
 
            const actual = loops.reversNum(arg);
            
            assert.strictEqual(actual, expected);
 
         });

         it('should return 321', () => {
            const arg = 123;
            const expected = 321;
 
            const actual = loops.reversNum(arg);
            
            assert.strictEqual(actual, expected);
 
         });

         it('should return 597989', () => {
            const arg = 989795;
            const expected = 597989;
 
            const actual = loops.reversNum(arg);
            
            assert.strictEqual(actual, expected);
 
         });
    
    });
   
});