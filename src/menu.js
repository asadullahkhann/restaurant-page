import chickenImage1 from './images/chicken-small.svg';
import chickenImage2 from './images/chicken-big.svg';
import chickenImage3 from './images/chicken-meal.svg';
import saladImage from './images/salad.svg';
const mealImages = [chickenImage1, chickenImage2, chickenImage3, saladImage];
function getMenuContent() {
  const cardHeading = document.createElement('h2');
  cardHeading.textContent = 'Nutritious Menu';
  const card = document.createElement('div');
  card.classList.add('card');
  card.appendChild(cardHeading);
  const mealNames = [
    "CLUCKIN' LITTLE MEAL", 
    "CLUCKIN' BIG MEAL",
    "CLUCKIN' HUGE MEAL",
    "CLUCKIN' SALAD MEAL",
  ]
  const mealDescriptions = [
    `The Little Clucker Kids Meal for your little clucker. Or for the little clucker in YOU!
This month, comes with Free Bobby Broiler Toy!
For those who like to stay real small.`,
    `Enjoy a delicious Cluckin Bell Fillet Burger, Foel Wrap or Large Wing Pieces, with Fries and a delicious Sprunk!
For those who like to stay in good shape and full of energy.`,
    `For those of you who like it huge, and can't get enough Cluckin'.
Get a large bucket, a double fillet, a bulging folvirap and a xtra large blast of Sprunk to wash it all down. For those who like a lot of meat on their boner.`,
    `We are pleased to be obliged to serve you this wonderful freell-uursuivus allemalise meal For those who like to stay real small`,
  ]
  for(let i = 0; i < 4; i++) {
    const innerCard = document.createElement('div');
    const imgEl = document.createElement('img');
    const textWrapper = document.createElement('div');
    const heading = document.createElement('h3');
    const para = document.createElement('p');
    imgEl.src = mealImages[i];
    heading.textContent = mealNames[i];
    para.textContent = mealDescriptions[i];
    para.classList.add('text-secondary');
    textWrapper.appendChild(heading);
    textWrapper.appendChild(para);
    innerCard.appendChild(imgEl);
    innerCard.appendChild(textWrapper);
    card.appendChild(innerCard);
  };
  return card;
}

export {getMenuContent};