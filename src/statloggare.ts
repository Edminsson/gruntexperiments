import logger = require("logger"); 
import stat = require("stater");

export function writeSomeStates() {
    var la = new stat.Stat("Los Angeles", "Californien");
    logger.log(la);
}