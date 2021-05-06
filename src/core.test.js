import createCore from "./core.js";

function createMock() {
    function start() {
        console.log("[mock] started.");
    }

    function stop() {
        console.log("[mock] stopped.");
    }

    return {
        start,
        stop
    }
}

describe("when the core is imported", () => {
    test("must have the start and stop methods", () => {
        const core = createCore();

        expect(core).toHaveProperty("start");
        expect(core).toHaveProperty("stop");
    });
});

describe("when the core runs", () => {
    test("should not return errors", () => {
        const databaseMock = createMock();
        const webserverMock = createMock();

        const core = createCore({
            database: databaseMock,
            webserver: webserverMock
        });

        expect(() => {
            core.start()
        }).not.toThrow();
    });
});
