const [form, inputText, positiveAnswer, negativeAnswer] = [
  'form',
  'input_text',
  'positive_answer',
  'negative_answer',
].map((id) => document.getElementById(id))

function isPalindrome() {
  const removedSymbols = /[@#$^&№%(){}[\]<>|/\\~\-—,.;:`'"!?+–*=_…\s]/g

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

form.addEventListener('submit', (event) => {
  event.preventDefault()
  inputText.blur()
  inputText.value ? isPalindrome() : inputText.classList.add('error')
})
