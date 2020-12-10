'use strict';


/**
 * play a music when the user press the nine keys , which are connected to audio files 
 * @param {Event} event - triggered whenever a user press one of the nine keys 
 */

 export function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }