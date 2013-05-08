(function($) {
	$.fn.swipe = function(callback) {
		var pos = {
			start: { x: 0, y: 0 },
			end:   { x: 0, y: 0 }
			};

		$(this).bind('touchstart', function(e) {
			var touch = e.originalEvent.touches[0];

			e.preventDefault();

			pos.start.x = touch.pageX;
			pos.start.y = touch.pageY;
			pos.end  .x = touch.pageX;
			pos.end  .y = touch.pageY;
		});

		$(this).bind('touchmove', function(e) {
			var touch = e.originalEvent.touches[0];

			e.preventDefault();

			pos.end.x = touch.pageX;
			pos.end.y = touch.pageY;
		});

		$(this).bind('touchend', function(e) {
			e.preventDefault();

			var
				x       = pos.start.x - pos.end  .x,
				y       = pos.end  .y - pos.start.y,
				radians = Math.atan2(y, x),
				swipe   = {
					direction: 'up',
					distance:  Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))),
					angle:     Math.round(radians * 180 / Math.PI)
					}
				;

			if ( swipe.angle < 0 ) {
				swipe.angle = 360 - Math.abs(swipe.angle);
			}

			switch ( true ) {
				case swipe.angle <= 45 && swipe.angle >= 0:
				case swipe.angle <= 360 && swipe.angle >= 315:
					swipe.direction = 'left';

					break;
				case swipe.angle >= 135 && swipe.angle <= 225:
					swipe.direction = 'right';

					break;
				case swipe.angle > 45 && swipe.angle < 135:
					swipe.direction = 'down';
			}

			callback(swipe);
		});
	};
})(jQuery);
