'use strict';



/**
 * create remove transition function which will stop the function playSound if the user press any one of the nine keys during a short period 
 * @param {Event} event - triggered whenever a user press twice the same key or on of the nine keys at short period 
 */

 export function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }