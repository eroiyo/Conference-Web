function Speaker(object) {
  if (object.img !== undefined) {
    this.image = object.img;
  } else {
    this.image = 'assest/placeholder.png';
  }
  if (object.name !== undefined) {
    this.name = object.name;
  } else {
    this.image = 'Jhon Doe';
  }
  if (object.title !== undefined) {
    this.title = object.title;
  } else {
    this.image = 'Chocolate Lover';
  }
  if (object.information !== undefined) {
    this.information = object.information;
  } else {
    this.image = 'they like chocolate';
  }
  if (object.id !== undefined) {
    this.id = object.id;
  } else {
    this.image = 'assest/placeholder.png';
  }
  this.appear = function () {
    const objetive = document.querySelector('.speakers-container');
    const li = document.createElement('li');
    const speaker = document.createElement('div');
    speaker.classList.add('speaker');
    const photo = document.createElement('div');
    photo.classList.add('photo');
    const face = document.createElement('img');
    face.classList.add('face');
    face.src = this.image;
    const portrait = document.createElement('img');
    portrait.classList.add('portrait');
    portrait.src = 'assest/portrait.png';
    photo.appendChild(face);
    photo.appendChild(portrait);
    speaker.appendChild(photo);
    const bigDiv = document.createElement('div');
    const sName = document.createElement('h3');
    sName.classList.add('speaker-name');
    sName.textContent = this.name;
    const sTitle = document.createElement('h4');
    sTitle.classList.add('speaker-title');
    sTitle.textContent = this.title;
    const bar = document.createElement('div');
    bar.classList.add('speaker-bar');
    const sInformation = document.createElement('p');
    sInformation.classList.add('speaker-info');
    sInformation.textContent = this.information;
    bigDiv.appendChild(sName);
    bigDiv.appendChild(sTitle);
    bigDiv.appendChild(bar);
    bigDiv.appendChild(sInformation);
    speaker.appendChild(bigDiv);
    li.appendChild(speaker);
    objetive.appendChild(li);
    return (li);
  };
}
export default Speaker;