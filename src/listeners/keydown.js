'use strict';

import { playSound } from '../handlers/playSound.js';

/**
 * @name user input
 * calls the reverseHandler when a user pressed at a short period 
 * */

window.addEventListener('keydown', playSound);