import data from './data.js';
import Speaker from './speaker.js';

const show = document.querySelector('.more');
const list = [];

const mySpeakers = data;
for (let i = 0; i < mySpeakers.length; i += 1) {
  const b = mySpeakers[i];
  const p = new Speaker(b);
  const button = p.appear();
  if (i > 1) {
    list.push(button);
  }
}
for (let i =0; i < list.length; i+= 1) {
  const a = list[i];
  a.classList.add('desktop-only');
}

function more() {
  while (list.length > 0) {
    const a = list.pop();
    console.log(a);
    a.classList.remove('desktop-only');
  }
  show.classList.add('none');
}

show.addEventListener('click', more);