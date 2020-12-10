<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [playSound.js](#srchandlersplaySoundjs)
  - [removeTransition.js](#srchandlersremoveTransitionjs)
- [listeners](#listeners)
  - [keydown.js](#srclistenerskeydownjs)
  - [transitioned.js](#srclistenerstransitionedjs)
- [init.js](#srcinitjs)

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

<a name="playSound"></a>

## playSound(event)

play a music when the user press the nine keys , which are connected to audio files

| Param | Type               | Description                                          |
| ----- | ------------------ | ---------------------------------------------------- |
| event | <code>Event</code> | triggered whenever a user press one of the nine keys |

---

### [./src/handlers/removeTransition.js](./src/handlers/removeTransition.js?study)

<a name="removeTransition"></a>

## removeTransition(event)

create remove transition function which will stop the function playSound if the user press any one of the nine keys during a short period

| Param | Type               | Description                                                                               |
| ----- | ------------------ | ----------------------------------------------------------------------------------------- |
| event | <code>Event</code> | triggered whenever a user press twice the same key or on of the nine keys at short period |

[TOP](#DOCS)

---

---

# Listeners

Event listeners are used to connect handler functions to user interactions with the DOM.

You can use the same handler in many different listeners, or add more than one listeners to the same DOM element.

---

### [./src/listeners/keydown.js](./src/listeners/keydown.js?study)

<a name="user input
calls the reverseHandler when a user pressed at a short period"></a>

## user input

calls the reverseHandler when a user pressed at a short period

---

### [./src/listeners/transitioned.js](./src/listeners/transitioned.js?study)

<a name="stop the transition 
calls handler that stop the transition"></a>

## stop the transition

calls handler that stop the transition

[TOP](#DOCS)

---

---

## [./src/init.js](./src/init.js?study)

<!-- END DOCS -->
