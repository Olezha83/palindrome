const [inputText, checkButton, positiveAnswer, negativeAnswer] = [
  'input_text',
  'check_button',
  'positive_answer',
  'negative_answer',
].map((id) => document.getElementById(id))

function isPalindrome() {
  const checkResult =
    inputText.value.toLowerCase().replaceAll(' ', '') ===
    inputText.value
      .toLowerCase()
      .replaceAll(' ', '')
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
