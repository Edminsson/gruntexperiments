define('logger',["require", "exports"], function (require, exports) {
    function log(stat) {
        console.log(stat.stad + ' ligger i ' + stat.stat);
    }
    exports.log = log;
});
//# sourceMappingURL=logger.js.map;
define('stater',["require", "exports"], function(require, exports) {
    var Stat = (function () {
        function Stat(stad, stat) {
            this.stad = stad;
            this.stat = stat;
        }
        return Stat;
    })();
    exports.Stat = Stat;
});
//# sourceMappingURL=stater.js.map
;
define('statloggare',["require", "exports", "logger", "stater"], function (require, exports, logger, stat) {
    function writeSomeStates() {
        var la = new stat.Stat("Los Angeles", "Californien");
        logger.log(la);
    }
    exports.writeSomeStates = writeSomeStates;
});
//# sourceMappingURL=statloggare.js.map;
require.config({
    baseUrl: "Scripts/ts"
});

require(['statloggare'], function (statloggare) {
    statloggare.writeSomeStates();
});
//# sourceMappingURL=main.js.map
;
define("main", function(){});

