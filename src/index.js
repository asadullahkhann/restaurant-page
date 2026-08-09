import './styles.css'
import { getHomeContent } from './home.js';
import { getMenuContent } from './menu.js';
import { getLegalAndDislaimerContent } from './disclaimer.js';

const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const disclaimerBtn = document.querySelector('.disclaimer-btn');

window.addEventListener('load', () => {
  contentDiv.appendChild(getHomeContent());
});

homeBtn.addEventListener('click', () => {
  contentDiv.textContent = '';
  contentDiv.appendChild(getHomeContent());
});

menuBtn.addEventListener('click', () => {
  contentDiv.textContent = '';
  contentDiv.appendChild(getMenuContent());
});

disclaimerBtn.addEventListener('click', () => {
  contentDiv.textContent = '';
  contentDiv.appendChild(getLegalAndDislaimerContent());
});