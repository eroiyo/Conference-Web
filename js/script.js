const nav2 = document.querySelector('.secondary-nav');
const phoneHeader = document.getElementById('phone-header');
const screenSize = window.matchMedia('(min-width: 768px)');
const logo = document.querySelector('.footer-img');

function clickFunction() {
  const para = document.getElementById('toggle-icon');
  para.classList.toggle('rotate-icon');
  if (nav2.style.display !== 'flex') {
    nav2.style.display = 'flex';
    phoneHeader.style.backgroundColor = '#EC5242';
  } else {
    nav2.style.display = 'none';
    phoneHeader.style.backgroundColor = 'white';
  }
}

function phone(screenSize) {
  if (screenSize.matches) {
    if (nav2.style.display === 'flex') {
      clickFunction();
    }
    logo.src ="assest/WWCB.png"
  }else{
    logo.src ="assest/WWC.jpg"
  }
}

phone(screenSize);
screenSize.addListener(phone);