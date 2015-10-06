define(["require", "exports", "logger", "stater"], function (require, exports, logger, stat) {
    function writeSomeStates() {
        var la = new stat.Stat("Los Angeles", "Californien");
        logger.log(la);
    }
    exports.writeSomeStates = writeSomeStates;
});
//# sourceMappingURL=statloggare.js.map