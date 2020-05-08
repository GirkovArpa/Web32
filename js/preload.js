'use strict';

const preloadImages = function (...imgUrls) {
  imgUrls.forEach(url => {
    const image = new Image();
    image.onload = () => document.querySelector('#preload').style.backgroundImage = `url(${url})`;
    image.src = url;
  });
}

preloadImages(
  'img/checkbox/checkDefaultFilled.png',
  'img/checkbox/checkHoverFilled.png',
  'img/checkbox/checkClickFilled.png',
  'img/slider/thumbHover.png',
  'img/slider/thumbClick.png'
);