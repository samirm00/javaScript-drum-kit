<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [playSound.js](#srchandlerplaySoundjs)
  - [removeTransition.js](#srchandlersremoveTransitionjs)
- [listeners](#listeners)
  - [keydown.js](#srclistenerskeydownjs)
  - [transitioned.js.js](#srclistenerstransitionedjs)


<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# Handlers

Handler function define user interactions. They will:

- read user input from events and from the DOM
- read and modify program data variables
- process user data with logic functions
- update the DOM to show changes to the user
- log any important information for developers

---

### [./src/handlers/playSound.js](./src/handlers/playSound.js?study)

<a name="playSoundHandler"></a>

## playSound.js

creates a different sound when the user press the nine different keys 

| Param | Type               | Description                                                |
| ----- | ------------------ | ---------------------------------------------------------- |
| event | <code>Event</code> | triggered whenever a user press one of the nine keys |

---

### [./src/handlers/removeTransition.js](./src/handlers/removeTransition.js?study)

<a name="removeTransitionHandler"></a>

## removeTransitionHandler

remove the transition form a key when it pressed again 

| Param | Type               | Description                                                 |
| ----- | ------------------ | ----------------------------------------------------------- |
| event | <code>Event</code> | triggered whenever a user press the same key 

[TOP](#DOCS)

---

---

# Listeners

Event listeners are used to connect handler functions to user interactions with the DOM.

You can use the same handler in many different listeners, or add more than one listeners to the same DOM element.

---

### [./src/listeners/keyDown.js](./src/listeners/keyDown.js?study)

<a name="keydown 
calls handler that changes the mirror-arts separator"></a>

##  call the palySound function when a user press any of the nine keys 

calls handler that changes that paly the sound 

---

### [./src/listeners/transitioned.js](./src/listeners/transitioned?study)

<a name="transitioned
calls the reverseHandler when a user types in the input field"></a>

## call the removeTransition function when a user press the same key at very short period to stop the first sound allowing the playSound function to be called again

calls the reverseHandler when a user types the same key at short period 

[TOP](#DOCS)

---

---


## [./src/init.js](./src/init.js?study)

<!-- END DOCS -->
