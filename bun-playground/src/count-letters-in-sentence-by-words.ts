export const countLettersInSentenceByWords = (sentence: string) => {
  if(!sentence) {
    throw new Error('Invalid sentence.');
  }

  return sentence.split(' ').reduce((result, currentWord) => ({...result, [currentWord]:currentWord.length}), {});
}
