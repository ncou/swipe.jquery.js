swipe.jquery.js
===============

A jQuery plugin to get swipe direction, distance, angle and speed on devices with or without touch support.

Usage
-----

```javascript
$(document).swipe()
	.on('swipeStart', (e) => {
		console.log('Swipe start', e.swipe);
	})
	.on('swipeMove', (e) => {
		console.log('Swipe move', e.swipe);

		// Log mouse position
		console.log(e.originalEvent.pageX, e.originalEvent.pageY);
	})
	.on('swipeEnd', (e) => {
		console.log('Swipe end', e.swipe);
	});
