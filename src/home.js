function getHomeContent() {
  const listItems = [[`• Since 1902. Cluckin' Bell has been leading the way in providing billions of chickens with a very
happy resting place your stomach! Using our uniquely humane way of factory farming them
we can provide you with the cheapest, most satisfying fried chicken around!`, 
`• Using our patented herby feed, the chickens are effectively being marinated from the day they are bom. All to bring the taste all the way to your plate. Cock A Doodle Do`, 
`• Our chickens don't die in vain. Guaranteed`], 
[`• No Cluckin' Bell chicken ever saw the light of day, so they don't know what they are missing!`,
  `• Unlike other chains, our chickens WANT to be deep fried at a young age!`, 
  `• Our deep fried chicken is healthy, especially for girls hating puberty`]];
  const listHeadings = ["COCK A DOODLE DO'S", "COCK A DOODLE DON'TS"]
  
  const card = document.createElement('div');
  const cardHeading = document.createElement('h2');
  cardHeading.textContent = 'Our Promise to You.';
  card.appendChild(cardHeading);
  card.classList.add('card');
  for(let i = 0; i < 2; i++) {
    const ulElement = document.createElement('ul');
    ulElement.textContent = listHeadings[i];
    for(let j = 0; j < 3; j++) {
      const liElement = document.createElement('li');
      liElement.textContent = listItems[i][j];
      liElement.classList.add('text-secondary')
      ulElement.appendChild(liElement);
    }
    card.appendChild(ulElement);
  }
  return card;
}

export {getHomeContent};

