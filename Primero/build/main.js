/// <reference path="../typings/requirejs/require.d.ts" />
require.config({
    baseUrl: "Scripts/ts"
});
require(['statloggare'], function (statloggare) {
    statloggare.writeSomeStates();
});
//# sourceMappingURL=main.js.map