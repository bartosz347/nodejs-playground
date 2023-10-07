import { describe, expect, it } from 'bun:test';
import { countLettersInSentenceByWords } from './count-letters-in-sentence-by-words';

/*
describe('when sentence is null', () => {
  it('should trigger an type error', () => {
      countLettersInSentenceByWords(null);
  });
});
*/

describe('when sentence is empty', () => {
  it('should throw an error', () => {
    expect(() =>
      countLettersInSentenceByWords(''),
    ).toThrow('Invalid sentence.');
  });
});

describe('when sentence is not empty', () => {
  it('should return words length', () => {
    expect(countLettersInSentenceByWords('aaa bb c')).toEqual({
      aaa: 3,
      bb: 2,
      c: 1
    });
  });
});

