import {formatTime} from './formatTime';
import {promoPrice} from './promoPrice';

describe('utils', () => {
  describe('formatTime', () => {

    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });

    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });
 
    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });
  });

  describe('promoPrice', () => {

    it('should return null if there are no arg', () => {
      expect(promoPrice('')).toBe(null);
    });
    it('should return null if args are below zero', () => {
      expect(promoPrice(-1, 20)).toBe(null);
      expect(promoPrice(42738,-2)).toBe(null);
    });
    it('should return null if args are not a number', () => {
      expect(promoPrice('abc', 'def')).toBe(null);
    });
  });
});