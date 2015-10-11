define('one',['exports'], function(exports) {
	function primero() {
		console.log('primero');
	}
	exports.primero = primero;
});
define('two',[], function() {
	function segundo() {
	}
	
	return {
		segundo: segundo
	}
	//exports.segundo = segundo;
});
define('three',['exports'], function(exports) {
	function tercero() {
	}
	exports.tercero = tercero;
});
require(["one", "two", "three"], function (one, two, three) {
	one.primero();
});
define("main", function(){});


require(["main"]);
