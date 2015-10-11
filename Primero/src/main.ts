/// <reference path="../typings/requirejs/require.d.ts" />
require.config({
    baseUrl: "Scripts/ts"
});

require(['statloggare'], (statloggare) => {
    statloggare.writeSomeStates();
}); 