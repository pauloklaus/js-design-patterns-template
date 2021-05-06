function createDatabaseConnection() {
    function start() {
        console.log("[database] starting...");
        console.log("[database] connecting to database...");
        console.log("[database] started!");
    }

    function stop() {
        console.log("[database] stopping...");
        console.log("[database] closing database connections...");
        console.log("[database] stopped!");
    }

    return {
        start,
        stop
    }
}

export default createDatabaseConnection;
