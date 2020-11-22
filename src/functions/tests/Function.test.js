const { assert } = require('chai');
const functions = require('../Functions.js');

describe('functions methods', () => {
    describe('getDayName', () => {  
        it('should return В неделе 7 дней. Введите число в диапазоне 1-7.', () => {
           const arg = 8;
           const expected = "В неделе 7 дней. Введите число в диапазоне 1-7.";
           const actual = functions.getDayName(arg);
           assert.strictEqual(actual, expected);
        });

        it('should return Данные не были введены либо был введен ноль', () => {
            const arg = 0;
            const expected = "Данные не были введены либо был введен ноль";
            const actual = functions.getDayName(arg);
            assert.strictEqual(actual, expected);
         });

         it('should return Данные не соответствуют условию задачи', () => {
            const arg = "hi";
            const expected = "Данные не соответствуют условию задачи";
            const actual = functions.getDayName(arg);
            assert.strictEqual(actual, expected);
         });

         it('should return Пятница', () => {
            const arg = 5;
            const expected = "Пятница";
            const actual = functions.getDayName(arg);
            assert.strictEqual(actual, expected);
         });
    });
    describe('getNumberName', () => {  
      it('should return Ноль', () => {
         const arg = 0;
         const expected = "Ноль";
         const actual = functions.getNumberName(arg);
         assert.strictEqual(actual, expected);
      });

      it('should return Двести Пятьдесят Шест', () => {
          const arg = 256;
          const expected = "Двести Пятьдесят Шесть";
          const actual = functions.getNumberName(arg);
          assert.strictEqual(actual, expected);
       });

       it('should return Данные не соответствуют условию задачи', () => {
          const arg = "hi";
          const expected = "Данные не соответствуют условию задачи";
          const actual = functions.getNumberName(arg);
          assert.strictEqual(actual, expected);
       });

       it('should return Введенное число не входит в диапазон 0-999', () => {
          const arg = 10001;
          const expected = "Введенное число не входит в диапазон 0-999";
          const actual = functions.getNumberName(arg);
          assert.strictEqual(actual, expected);
       });
  });

  describe('getNumber', () => {  
   it('should return 0', () => {
      const arg = "Ноль";
      const expected = 0;
      const actual = functions.getNumber(arg);
      assert.strictEqual(actual, expected);
   });

   it('should return Двести Пятьдесят Шест', () => {
       const arg = "двести пятьдесят шесть";
       const expected = 256;
       const actual = functions.getNumber(arg);
       assert.strictEqual(actual, expected);
    });

    it('should return введено некорректное число', () => {
       const arg = "ноль один";
       const expected = "введено некорректное число";
       const actual = functions.getNumber(arg);
       assert.strictEqual(actual, expected);
    });

    it('should return Данные не были введены либо был введен ноль', () => {
       const arg = "";
       const expected = "Данные не были введены либо был введен ноль";
       const actual = functions.getNumber(arg);
       assert.strictEqual(actual, expected);
    });
});

   describe('findDistance', () => {  
      it('should return 2', () => {
         const arg1 = 8;
         const arg2 = 7;
         const arg3 = -2;
         const arg4 = 0;
         const expected = 2;
         const actual = functions.findDistance(arg1, arg2, arg3, arg4);
         assert.strictEqual(actual, expected);
      });

      it('should return 0', () => {
         const arg1 = 0;
         const arg2 = 0;
         const arg3 = 0;
         const arg4 = 0;
         const expected = 0;
         const actual = functions.findDistance(arg1, arg2, arg3, arg4);
         assert.strictEqual(actual, expected);
      });

      it('should return Данные не были введены корректно', () => {
         const arg1 = 8;
         const arg2 = "";
         const arg3 = "";
         const arg4 = 0;
         const expected = "Данные не были введены корректно";
         const actual = functions.findDistance(arg1, arg2, arg3, arg4);
         assert.strictEqual(actual, expected);
      });

      it('should return Данные не соответствуют условию задачи', () => {
         const arg1 = "hi";
         const arg2 = 7;
         const arg3 = -2;
         const arg4 = 0;
         const expected = "Данные не соответствуют условию задачи";
         const actual = functions.findDistance(arg1, arg2, arg3, arg4);
         assert.strictEqual(actual, expected);
      });
   });
});