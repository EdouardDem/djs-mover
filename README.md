# djs-mover

This is a javascript library to move and replace HTML DOM elements.

You can select a jQuery element to move, its destination and the position related to it.

It uses invisible placeholders to keep the initial position of the moved element. So you can easily replace the HTML element.

## Installation

```
bower install djs-mover
```

## Dependencies

This package requires [jQuery](http://jquery.com/).

If you install it with Bower, the dependencies will be included.

## Usage

### Move

To move an element use the `move` function.

```javascript
// Move #element after #destination
djs.mover.move($('#element'), $('#destination'), 'after');
```

The third argument is the position related to `#destination`. It can be `'append'`, `'prepend'`, `'after'` or `'before'`.

If the first or the second argument contain more than one DOM element, only the first DOM element will be processed.

### Replace

To replace an element previously moved, use the `replace` function.

```javascript
// Replace #element to its initial position
djs.mover.replace($('#element'));
```

## Example

If you work with a talented rather unorthodox web designer ([@ThomasLeGoff](https://www.behance.net/thomaslegoff)), you may need to move HTML elements when passing from medium to small screen.
For example, you may concatenates the menu, some sharing links and some footer links in a left side panel.
Rather than duplicating all these DOM elements and toggle visibility when changing the responsive state, you can do this (with the [djs-breakpoints library](https://github.com/EdouardDem/djs-breakpoints)):

```javascript
/**
 * Function to move menus
 */
function moveMenus() {
    djs.mover.move($('#menu'), $('#left-panel'), 'append');
    djs.mover.move($('#share-links'), $('#left-panel'), 'append');
    djs.mover.move($('#footer-links'), $('#left-panel'), 'append');
}
/**
 * Function to replace menus
 */
function replaceMenus() {
    djs.mover.replace($('#menu'));
    djs.mover.replace($('#share-links'));
    djs.mover.replace($('#footer-links'));
}

// Bind responsive events
djs.breakpoints.add('sm', 'down', moveMenus);
djs.breakpoints.add('sm', 'up', replaceMenus);
// If smaller than medium when starting, moveMenus
if (djs.breakpoints.is('xs, sm')) {
    moveMenus();
}
```