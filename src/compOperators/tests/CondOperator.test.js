const { assert, should } = require('chai');
const condOperators = require('../condOperator.js');

describe('conditional statements methods', () => {
    describe('calc', () => {
        it('should is definde', () => {
            assert.isDefined(condOperators.calc);
        });

        it('shoul return не указаны все аргументы', () => {
            const arg = 1;
            const expected = 'не указаны все аргументы';
            const actual = condOperators.calc(arg);
            assert.deepEqual(actual, expected);
        });

        it('should return один из аргументов не являеться числом', () => {
            const arg = 1, arg2 = 'k';
            const expected = 'один из аргументов не являеться числом';
            const actual = condOperators.calc(arg, arg2);
            assert.deepEqual(actual, expected);
        });
        
        it('should return addition ', () => {
            const arg = 3, arg2 = 2;
            const expected = 5;
            const actual = condOperators.calc(arg, arg2);
            assert.deepEqual(actual, expected);
        });

        it('should return multiplication', () => {
            const arg = 2, arg2 = 3;
            const expected = 6;
            const actual = condOperators.calc(arg, arg2);
            assert.deepEqual(actual, expected);
        });
    });
    describe('pointSearch', () => {
        
        it('should is drfined', () => {
            assert.isDefined(condOperators.pointSearch);
        });

        it('should return не указаны все аргументы', () => {
            const arg = 1;
            const expected = 'не указаны все аргументы';
            const actual = condOperators.pointSearch(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return один из аргументов не являеться числом', () => {
            const arg = 2, arg2 = 'k';
            const expected = 'один из аргументов не являеться числом';
            const actual = condOperators.pointSearch(arg, arg2);
            assert.deepEqual(actual, expected);
        });

        it('should return I', () => {
            const arg = 2, arg2 = 3;
            const expected = 'I';
            const actual = condOperators.pointSearch(arg, arg2);
            assert.deepEqual(expected, actual);
        });

        it('should return III', () => {
            const arg = -2, arg2 = -3;
            const expected = 'III';
            const actual = condOperators.pointSearch(arg, arg2);
            assert.deepEqual(expected, actual);
        });
    });

    describe('sumPositivNum', () => {

        it('should is defined', () => {
            assert.isDefined(condOperators.sumPositivNum)
        });

        it('should return не указаны все аргументы', () => {
            const arg = 2;
            const expected = 'не указаны все аргументы';
            const actual = condOperators.sumPositivNum(arg);
            assert.deepEqual(actual, expected);
        });

        it('should return один из аргументов не являеться числом', () => {
            const arg = 2, arg2 = 'k', arg3 = 3; 
            const expected = 'один из аргументов не являеться числом';
            const actual = condOperators.sumPositivNum(arg, arg2, arg3);
            assert.deepEqual(actual, expected);
        });

        it('should return sum positiv numbers 5', () => {
            const arg = 2, arg2 = -5, arg3 = 3; 
            const expected = 5;
            const actual = condOperators.sumPositivNum(arg, arg2, arg3);
            assert.deepEqual(actual, expected);
        });

        it('should return положительных чисел нету', () => {
            const arg = -2, arg2 = -5, arg3 = -3; 
            const expected = 'положительных чисел нету';
            const actual = condOperators.sumPositivNum(arg, arg2, arg3);
            assert.deepEqual(actual, expected);
        });
    });

    describe('countMax', () => {

        it('should is defined', () => {
            assert.isDefined(condOperators.countMax);
        });

        it('should return не указаны все аргументы', () => {
            const arg = 1;
            const expected = 'не указаны все аргументы';
            const actual = condOperators.countMax(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return один из аргументов не являеться числом', () => {
            const arg = 1, arg2 = true, arg3 = 4;
            const expected = 'один из аргументов не являеться числом';
            const actual = condOperators.countMax(arg, arg2, arg3)
            assert.deepEqual(expected, actual); 
        });

        it('should return addition', () => {
            const arg = 1, arg2 = 1, arg3 = 2;
            const expected = 7;
            const actual = condOperators.countMax(arg, arg2, arg3);
            assert.deepEqual(expected, actual);
        });

        it('should return multiplication', () => {
            const arg = 1, arg2 = 2, arg3 = 4;
            const expected = 11;
            const actual = condOperators.countMax(arg, arg2, arg3);
            assert.deepEqual(expected, actual);
        });
    });

    describe('definitionGrade', () => {

        it('should is defined', () => {
            assert.isDefined(condOperators.definitionGrade);
        });

        it('should return не указан аргумент', () => {
            const expected = 'не указан аргумент';
            const actual = condOperators.definitionGrade();
            assert.deepEqual(actual, expected);
        });

        it('should return аргумен не являеться числом ', () => {
            const arg = 'k';
            const expected = 'аргумен не являеться числом';
            const actual = condOperators.definitionGrade(arg);
            assert.deepEqual(actual, expected);
        });

        it('should return F', () => {
            const arg = 70;
            const expected = 'C';
            const actual = condOperators.definitionGrade(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return такой оценки не существует', () => {
            const arg = 101;
            const expected = 'такой оценки не существует';
            const actual = condOperators.definitionGrade(arg);
            assert.deepEqual(expected, actual);
        });
    });
});