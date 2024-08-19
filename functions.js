const inputScreen = document.getElementById('input-screen');
const resultScreen = document.getElementById('result-screen');
const inputField = document.getElementById('input-field');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
  const name = inputField.value.trim();
  if (name) {
    inputScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
  }
});
