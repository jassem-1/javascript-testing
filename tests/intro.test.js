
import {describe, it ,test,expect} from "vitest";
import { calculateAverage, fizzBuzz, max } from "../src/intro";

describe('max',()=>{
    it('should return the first argument if its greater',()=>{
        expect(max(2,1)).toBe(2);
    });
    it('should return the second argument if its greater',()=>{
        expect(max(2,1)).toBe(2);
    });
    it('should return the firstargument if equal',()=>{
        expect(max(1,1)).toBe(1);
    });
})
describe('FizzBuzz',()=>{
    it('should return FIZZ',()=>{
        expect(fizzBuzz(3)).toBe("Fizz");
    });
    it('should return Buzz',()=>{
        expect(fizzBuzz(5)).toBe("Buzz");
    });
    it('should return fuzzbuzz',()=>{
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    it('should return N TO STRING',()=>{
        expect(fizzBuzz(4)).toBe("4");
    });
})

describe('calculateAverage',()=>{
    it('should return Nan if array is empty',()=>{
        expect(calculateAverage([])).toBe(NaN);
    })
    it('should return the average of the numbers',()=>{
        expect(calculateAverage([1,2,3,4,5])).toBe(3);
    });
    it('should return the average of the numbers',()=>{
        expect(calculateAverage([1,2,3,4,5,6])).toBe(3.5);
    });
    it('should return the average of the numbers',()=>{
        expect(calculateAverage([1,2,3,4,5,6,7])).toBe(4);
    });
    it('should return the average of the numbers',()=>{
        expect(calculateAverage([1,2,3,4,5,6,7,8])).toBe(4.5);
    });
    it('should return the average of the numbers',()=>{
        expect(calculateAverage([1,2,3,4,5,6,7,8,9])).toBe(5);
    });
    it('should return the average of the numbers',()=>{
        expect(calculateAverage([1,2,3,4,5,6,7,8,9,10])).toBe(5.5);
    });
    it('should return the average of the numbers',()=>{
        expect(calculateAverage([1,2,3,4,5,6,7,8,9,10,11])).toBe(6);
    });
    it('should return the average of the numbers',()=>{
        expect(calculateAverage([1,2,3,4,5,6,7,8,9,10,11,12])).toBe(6.5);
    });
    it('should return the average of the numbers',()=>{
        expect(calculateAverage([1,2,3,4,5,6,7,8,9,10,11,12,13])).toBe(7);
    });
    it('should return the average of the numbers',()=>{
        expect(calculateAverage([1,2,3,4,5,6,7,8,9,10,11,12,13,14])).toBe(7.5);
    });
    it('should return the average of the numbers',()=>{
        expect(calculateAverage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).toBe(8);
    });
})