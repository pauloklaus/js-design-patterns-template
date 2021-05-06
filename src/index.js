import createCore from "./core.js";

const core = createCore();

try {
    core.start();
    core.stop();
}
catch (error) {
    console.error("[index] uncaught error");
    console.error(error);
}
