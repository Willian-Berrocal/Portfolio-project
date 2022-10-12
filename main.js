// Show menu

const burgerMenu = document.querySelector('.burger-menu');

function showMenu() {
  document.querySelector('.app-menu').classList.replace('section-hide', 'section-show');
}

burgerMenu.addEventListener('click', showMenu);

// Hide Menu

const closeMenu = document.querySelectorAll('.close-menu');

function hideMenu() {
  document.querySelector('.app-menu').classList.replace('section-show', 'section-hide');
}

closeMenu.forEach((btn) => btn.addEventListener('click', hideMenu));

// Project Data

const projectData = [
  {
    name: 'Tonic',
    short: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desc: '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgSrc: 'images/snapshots/Snapshoot-Portfolio.svg',
    techUsed: ['html', 'css', 'javascript', 'ruby'],
    liveLink: 'https://www.javascripttutorial.net/javascript-dom/javascript-createelement/',
    sourceLink: 'https://github.com/microverseinc/curriculum-html-css/blob/main/portfolio/8_popup.md',
  },
  {
    name: 'Multi-Post Stories',
    short: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desc: '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgSrc: 'images/snapshots/Snapshoot-Portfolio-1.svg',
    techUsed: ['html', 'css', 'javascript', 'github'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Tonic',
    short: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desc: '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgSrc: 'images/snapshots/Snapshoot-Portfolio-2.svg',
    techUsed: ['html', 'bootstrap'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Multi-Post Stories',
    short: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desc: '4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgSrc: 'images/snapshots/Snapshoot-Portfolio-3.svg',
    techUsed: ['html', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
];

// Filling data in cards

document.querySelector('.card-name-1').textContent = projectData[0].name;
document.querySelector('.card-short-1').textContent = projectData[0].short;
document.querySelector('.card-img-1').src = projectData[0].imgSrc;
for (let i = 0; i < projectData[0].techUsed.length; i += 1) {
  const newLi = document.createElement('li');
  newLi.textContent = projectData[0].techUsed[i];
  document.querySelector('.card-tech-1').appendChild(newLi);
}

document.querySelector('.card-name-2').textContent = projectData[1].name;
document.querySelector('.card-short-2').textContent = projectData[1].short;
document.querySelector('.card-img-2').src = projectData[1].imgSrc;
for (let i = 0; i < projectData[1].techUsed.length; i += 1) {
  const newLi = document.createElement('li');
  newLi.textContent = projectData[1].techUsed[i];
  document.querySelector('.card-tech-2').appendChild(newLi);
}

document.querySelector('.card-name-3').textContent = projectData[2].name;
document.querySelector('.card-short-3').textContent = projectData[2].short;
document.querySelector('.card-img-3').src = projectData[2].imgSrc;
for (let i = 0; i < projectData[2].techUsed.length; i += 1) {
  const newLi = document.createElement('li');
  newLi.textContent = projectData[2].techUsed[i];
  document.querySelector('.card-tech-3').appendChild(newLi);
}

document.querySelector('.card-name-4').textContent = projectData[3].name;
document.querySelector('.card-short-4').textContent = projectData[3].short;
document.querySelector('.card-img-4').src = projectData[3].imgSrc;
for (let i = 0; i < projectData[3].techUsed.length; i += 1) {
  const newLi = document.createElement('li');
  newLi.textContent = projectData[3].techUsed[i];
  document.querySelector('.card-tech-4').appendChild(newLi);
}

// Show details

const detailsButton1 = document.querySelector('.details-button-1');
const detailsButton2 = document.querySelector('.details-button-2');
const detailsButton3 = document.querySelector('.details-button-3');
const detailsButton4 = document.querySelector('.details-button-4');

function showDetails(e) {
  document.querySelector('.app-details').classList.replace('section-hide', 'section-show');
  document.querySelector('.details-title').textContent = projectData[e.currentTarget.numpro].name;
  document.querySelector('.details-desc').textContent = projectData[e.currentTarget.numpro].desc;
  document.querySelector('.details-img').src = projectData[e.currentTarget.numpro].imgSrc;
  const techList = document.querySelector('.details-tech');
  const numLi = techList.children.length;
  if (numLi > 0) {
    for (let i = 0; i < numLi; i += 1) {
      techList.firstElementChild.remove();
    }
  }
  for (let i = 0; i < projectData[e.currentTarget.numpro].techUsed.length; i += 1) {
    const newLi = document.createElement('li');
    newLi.textContent = projectData[e.currentTarget.numpro].techUsed[i];
    techList.appendChild(newLi);
  }
  document.querySelector('.details-liveLink').href = projectData[e.currentTarget.numpro].liveLink;
  document.querySelector('.details-sourceLink').href = projectData[e.currentTarget.numpro].sourceLink;
}

detailsButton1.addEventListener('click', showDetails);
detailsButton1.numpro = 0;

detailsButton2.addEventListener('click', showDetails);
detailsButton2.numpro = 1;

detailsButton3.addEventListener('click', showDetails);
detailsButton3.numpro = 2;

detailsButton4.addEventListener('click', showDetails);
detailsButton4.numpro = 3;

// Hide details

const closeDetails = document.querySelector('.close-details');

function hideDetails() {
  document.querySelector('.app-details').classList.replace('section-show', 'section-hide');
}

closeDetails.addEventListener('click', hideDetails);