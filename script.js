const ratingCard = document.querySelector('#rating-card');
const resultCard = document.querySelector('#result-card');

const displayResult = document.getElementById('display-result');
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);



function handleSubmit (e) {
  e.preventDefault();

  const result = new FormData(e.target);
  if (!result.get('rating')) {
    ratingCard.classList.add('prompt');
    return
  }
  displayResult.textContent = `You selected ${result.get('rating')} out of 5`;
  ratingCard.classList.add('hidden');
  resultCard.classList.remove('hidden');
}