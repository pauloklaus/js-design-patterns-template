function createWebserver() {
    function start() {
        console.log("[webserver] starting...");
        console.log("[webserver] started!");
    }

    function stop() {
        console.log("[webserver] stopping...");
        console.log("[webserver] stopped!");
    }

    return {
        start,
        stop
    }
}

export default createWebserver;
