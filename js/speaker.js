function Speaker(object){
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
    this.appear= function ()
    {
        const objetive = document.getElementById('speakers-container');
        const il= document.createElement('il');
        const speaker = document.createElement('div');
        speaker.classList.add('speaker');
        const phto = document.createElement('div');
        speaker.classList.add('photo');
        const face=document.createElement('img');
        face.classList.add('face');
        face.src=this.image;
        const portrait=document.createElement('img');
        face.classList.add('portrait');
        face.src=this.image;

    }
}

export default Project;