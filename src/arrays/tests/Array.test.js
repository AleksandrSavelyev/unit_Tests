const { assert, should } = require('chai');
const { sumOddIndex } = require('../Array.js');
const arrays = require('../Array.js');

describe('arrays methods', () => {

    describe('searchMinElement', () => {

        it('should is defined', () => {
            assert.isDefined(arrays.searchMinElement);
        });

        it('should return не являеться массивом',() =>{
            const arg = 1;
            const expected = 'аргумент не являеться массивом';
            const actual = arrays.searchMinElement(arg);
        });

        it('should return min element 1', () => {
            const arg = [9, 8, 5, 1, 4, 6];
            const expected = 1;
            const actual = arrays.searchMinElement(arg);
            assert.deepEqual(actual, expected);
        });

        it('should return min element -5', () => {
            const arg = [1, 2, -5];
            const expected = -5;
            const actual = arrays.searchMinElement(arg);
            assert.deepEqual(actual, expected);
        });

        it('should return min element []', () => {
            const arg = [];
            const expected = undefined;
            const actual = arrays.searchMinElement(arg);
            assert.deepEqual(actual, expected);
        });
    });

    describe('saerchMaxElement', () => {

        it('should is defined', () => {
            assert.isDefined(arrays.saerchMaxElement);
        });

        it('should return аргумент не являеться массивом', () => {
            const arg = 1;
            const expected = 'аргумент не являеться массивом';
            const actual = arrays.saerchMaxElement(arg);
            assert.deepEqual(actual, expected);
        });

        it('should return maximum element array 9', () => {
            const arg = [1, 2, 3, -5, 9];
            const expected = 9;
            const actual = arrays.saerchMaxElement(arg);
            assert.deepEqual(actual, expected)
        });

        it('should return max element array -2', () => {
            const arg = [-4, -8, -2, -5, -9];
            const expected = -2;
            const actual = arrays.saerchMaxElement(arg);
            assert.deepEqual(actual, expected)
        });

        it('should return undefinde', () => {
            const arg = [];
            const expected = undefined;
            const actual = arrays.saerchMaxElement(arg);
            assert.deepEqual(actual, expected)
        });
    })

    describe('searchMinIndex', () => {

        it('should is defined', () => {
            assert.isDefined(arrays.searchMinIndex);
        });

        it('should return аргуменят не являеться массивом', () => {
            const arg = 7;
            const expected = 'аргумент не являеться массивом';
            const actual = arrays.searchMinIndex(arg);
            assert.deepEqual(actual,expected);
        });

        it('should minimum element index 2', () => {
            const arg = [2, 1, 0, 4];
            const expected = 2;
            const actual = arrays.searchMinIndex(arg);
            assert.deepEqual(actual, expected)
        });

        it('should return minimum element index 4', () => {
            const arg = [1, 2, 3, 4, -5];
            const expected = 4;
            const actual = arrays.searchMinIndex(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return 0', () => {
            const arg = [];
            const expected = 0;
            const actual = arrays.searchMinIndex(arg);
            assert.deepEqual(expected, actual);
        });
    });

    describe('searchMaxIndex', () => {
        it('should is difined', () => {
            assert.isDefined(arrays.searchMaxIndex)
        });

        it ('should return maximum element index 3', () => {
            const arg = [1, 2, 3, 4]
            const expected = 3;
            const actual = arrays.searchMaxIndex(arg);
            assert.deepEqual(actual, expected);
        });   

        it('should maximum element index 2', () => {
            const arg = [1, -2, 4, -6, -10, 3];
            const expected = 2;
            const actual = arrays.searchMaxIndex(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return аргумент не являеться массивом', () => {
            const arg = '';
            const expected = 'аргумент не являеться массивом';
            const actual = arrays.searchMaxIndex(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return 0', () => {
            const arg = [];
            const expected = 0;
            const actual = arrays.searchMaxIndex(arg);
            assert.deepEqual(expected, actual);
        });
    });

    describe('sumOddElement', () => {
        it('should is difined', () => {
            assert.isDefined(arrays.sumOddElement)
        });

        it ('should return sum odd element 4', () => {
            const arg = [1, 2, 3, 4]
            const expected = 4;
            const actual = arrays.sumOddElement(arg);
            assert.deepEqual(actual, expected);
        });   

        it('should return sum odd element 13', () => {
            const arg = [1, 2, 9, 0, 10, 3];
            const expected = 13;
            const actual = arrays.sumOddElement(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return аргумент не являеться массивом', () => {
            const arg = '';
            const expected = 'аргумент не являеться массивом';
            const actual = arrays.sumOddElement(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return 0', () => {
            const arg = [];
            const expected = 0;
            const actual = arrays.sumOddElement(arg);
            assert.deepEqual(expected, actual);
        });
    });

    describe('reversArray', () => {
        it('should is defined', () => {
            assert.isDefined(arrays.reversArray);
        });

        it('should return reversed array 4 3 2 1', () => {
            const arg = [1, 2, 3, 4];
            const expected = '4 3 2 1 ';
            const actual = arrays.reversArray(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return аргумент не являеться массивом', () => {
            const arg = 'k';
            const expected = 'аргумент не являеться массивом';
            const actual = arrays.reversArray(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return revesed 1 2 3 4 5 6 7 8 9 ', () => {
            const arg = [9, 8, 7, 6, 5, 4, 3, 2, 1];
            const expected = '1 2 3 4 5 6 7 8 9 ';
            const actual = arrays.reversArray(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return empty line', () => {
            const arg = [];
            const expected = '';
            const actual = arrays.reversArray(arg);
            assert.deepEqual(expected, actual);
        });
    });

    describe('sumOddIndex', () => {

        it('should isdifined', () => {
            assert.isDefined(sumOddIndex);
        });

        it('should return 0', () => {
            const arg = [];
            const expected = 0;
            const actual = arrays.sumOddIndex(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return 6', () => {
            const arg = [0, 2, 3, 4];
            const expected = 6;
            const actual = arrays.sumOddIndex(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return 20', () => {
            const arg = [1, 2, 3, 4, 5, 6, 7, 8];
            const expected = 20;
            const actual = arrays.sumOddIndex(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return аргумент не являкеться массивом', () => {
            const arg = 'k';
            const expected = 'аргумент не являеться массивом';
            const actual = arrays.sumOddIndex(arg);
            assert.deepEqual(expected, actual);
        });
    });

    describe('reversHalf', () => {

        it('should is defined', () => {
            assert.isDefined(arrays.reversHalf);
        });

        it('should return аргумент не являкеться массивом', () => {
            const arg = true;
            const expected = 'аргумент не являеться массивом';
            const actual = arrays.reversHalf(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return revesed half array 4 5 3 1 2 ', () => {
            const arg = [1, 2, 3, 4, 5];
            const expected = '4 5 3 1 2 ';
            const actual = arrays.reversHalf(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return revesed half array 3 4 1 2 ', () => {
            const arg = [1, 2, 3, 4];
            const expected = '3 4 1 2 ';
            const actual = arrays.reversHalf(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return empty line', () => {
            const arg = [];
            const expected = '';
            const actual = arrays.reversHalf(arg);
            assert.deepEqual(expected, actual);
        });
    });
    describe('sortBubble', () => {

        it('should is defined', () => {
            assert.isDefined(arrays.sortBubble);
        });

        it('should return sorted array [1, 2, 3, 4]', () => {
            const arg = [4, 3, 2, 1];
            const expected = [1, 2, 3, 4];
            const actual = arrays.sortBubble(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return sorted array [-4, -2, 1, 3]', () => {
            const arg = [-4, 3, -2, 1];
            const expected = [-4, -2, 1, 3];
            const actual = arrays.sortBubble(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return аргумент не являкеться массивом', () => {
            const arg = true;
            const expected = 'аргумент не являеться массивом';
            const actual = arrays.sortBubble(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return empty line', () => {
            const arg = [];
            const expected = [];
            const actual = arrays.sortBubble(arg);
            assert.deepEqual(expected, actual);
        });
    });

    describe('sortSelect', () => {
        
        it('should is defined', () => {
            assert.isDefined(arrays.sortSelect);
        });

        it('should return sorted array [1, 2, 3, 4]', () => {
            const arg = [4, 3, 2, 1];
            const expected = [1, 2, 3, 4];
            const actual = arrays.sortSelect(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return sorted array [-4, -2, 1, 3]', () => {
            const arg = [-4, 3, -2, 1];
            const expected = [-4, -2, 1, 3];
            const actual = arrays.sortSelect(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return аргумент не являкеться массивом', () => {
            const arg = true;
            const expected = 'аргумент не являеться массивом';
            const actual = arrays.sortSelect(arg);
            assert.deepEqual(expected, actual);
        });

        it('should return empty line', () => {
            const arg = [];
            const expected = [];
            const actual = arrays.sortSelect(arg);
            assert.deepEqual(expected, actual);
        });
    });
});
