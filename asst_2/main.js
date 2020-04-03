const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

/*
The concept behind this function was taken from the MDN project Image
gallery. Mainly, the use of the target property. Link:
https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/gallery
*/

function mainImage(thumb) {
  var main_src = thumb.target.getAttribute('src');
  displayedImage.setAttribute('src', main_src);
};

for(var i = 1; i < 6; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i.toString() + '.png');
  thumbBar.appendChild(newImage);
  newImage.onclick = mainImage;
};

/* Wiring up the Darken/Lighten button */

/*
The basis of this function was taken from the MDN project Image
gallery. Link:
https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/gallery
*/

function dark() {
  const className = btn.getAttribute('class');
  if(className == 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  };
};

btn.onclick = dark
