import { divide } from '../src/calculator.js';

// one positive and 4 negative test cases for divide function

describe('divide', () => {
    it('divides a positive number', () => {
        expect(divide(10,2)).toBe(5);
    });

    it('throws when trying to divide by 0', () => {
        expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    it('throws when trying to divide a string', () => {
        expect(() => divide("five", 5)).toThrow('Both arguments must be numbers');
    });

    it('throws when trying to divide a number by a string', () => {
        expect(() => divide(5, "five")).toThrow('Both arguments must be numbers');
    });

    it('throws when trying to divide a number by NaN', () => {
        expect(() => divide(5, NaN)).toThrow('Arguments cannot be NaN');
    });

    it('throws when trying to divide NaN by a number', () => {
        expect(() => divide(NaN, 5)).toThrow('Arguments cannot be NaN');
    });
    
})

