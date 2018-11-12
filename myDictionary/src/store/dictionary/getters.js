export const getAllLanguages = (state) => {
  return state.languages;
}
export const getWordsListByLanguage = (state) => (language) => {
  return state.words.filter(function (
    wordList
  ) {
    return wordList.language == language;
  })[0].wordsList;
}
export const getWordByIndex = (state) => (index, language) => {
  return state.words.filter(function (
    wordList
  ) {
    return wordList.language == language;
  })[0].wordsList.filter(function(word, i){
    return i == index;
  })[0];
}
