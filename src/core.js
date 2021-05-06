import createDatabaseConnection from "./database.js";
import createWebserver from "./webserver.js";

function createCore(configurations = {}) {
    const database = configurations.database || createDatabaseConnection();
    const webserver = configurations.webserver || createWebserver();

    function start() {
        console.log("[core] starting...");
        database.start();
        webserver.start();
        console.log("[core] started!");
    }

    function stop() {
        console.log("[core] stopping...");
        database.stop();
        webserver.stop();
        console.log("[core] stopped!");
    }

    return {
        start,
        stop
    }
}

export default createCore;
