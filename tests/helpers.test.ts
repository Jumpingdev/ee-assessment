import {evalHelper, containsHtml,stringEndsWithZero, addToScreen} from "../assets/scripts/helpers";
import {describe, expect, test} from '@jest/globals';

describe('Arithmetic tests', () => {
  test('1 + 2 to equal 3 with JS eval()', () => {
    expect(eval('1 + 2')).toBe(3);
  });
    test('1 + 2 to equal 3 with evalHelper', () => {
      expect(evalHelper('1 + 2')).toBe(3);
    });
    
    test('evalHelper returns blank string if input is empty', () => {
      expect(evalHelper('')).toBe('');
    });
    
  });
  
describe('Helper check', () => {
    test('containsHtml should return true', () => {
      expect(containsHtml('<a href="https://www.google.com">click me</a>')).toBe(true);
    });

    test('evalHelper string with html should return no value', () => {
      expect(evalHelper('<a href="https://www.google.com">click me</a>')).toBe('');
    });
    
    test('stringEndsWithZero should return true for 1234+0', () => {
      expect(stringEndsWithZero('1234+0')).toBe(true);
    });
    
    test('addToScreen should return 123+1', () => {
      expect(addToScreen('1', '123+0')).toBe('123+1');
    });
    
    test('addToScreen should return 101', () => {
      expect(addToScreen('1', '10')).toBe('101');
    });
    
    test('addToScreen should return 1', () => {
      expect(addToScreen('1', '0')).toBe('1');
    });

  });