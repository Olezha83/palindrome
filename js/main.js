const [inputText, checkButton, positiveAnswer, negativeAnswer] = [
  'input_text',
  'check_button',
  'positive_answer',
  'negative_answer',
].map((id) => document.getElementById(id))

function isPalindrome() {
  const removedSymbols =
    /[\u0020-\u0022\u0027-\u0029\u002C-\u002E\u003A\u003B\u003F\u00AB\u00BB\u2013\u2014\u2018\u2019\u201C\u201D]/g
  const checkResult =
    inputText.value.toLowerCase().replaceAll(removedSymbols, '') ===
    inputText.value
      .toLowerCase()
      .replaceAll(removedSymbols, '')
      .split('')
      .reverse()
      .join('')

  checkResult
    ? positiveAnswer.classList.add('answer_visible')
    : negativeAnswer.classList.add('answer_visible')
}

inputText.addEventListener('focus', (event) => {
  event.target.classList.remove('error')
  event.target.value = ''
  positiveAnswer.classList.remove('answer_visible')
  negativeAnswer.classList.remove('answer_visible')
})

checkButton.addEventListener('click', () => {
  inputText.value ? isPalindrome() : inputText.classList.add('error')
})
