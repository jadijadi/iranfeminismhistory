/*!
 * Rétro Compatibilité entre l'ancien plugin jQuery Cookie
 * et le nouveau JS Cookie.
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	$.cookie = function (key, value, options) {
		if (value !== undefined && !$.isFunction(value)) {
			console.warn("Deprecated jQuery.cookie(). Please use Cookies.set()");
			console.trace();
			return Cookies.set(key, value, options);
		} else {
			console.warn("Deprecated jQuery.cookie(). Please use Cookies.get()");
			console.trace();
			return Cookies.get(key, value);
		}
	};

	$.removeCookie = function (key, options) {
		console.warn("Deprecated jQuery.removeCookie(). Please use Cookies.remove()");
		console.trace();
		Cookies.remove(key, options);
		return true;
	};

}));
