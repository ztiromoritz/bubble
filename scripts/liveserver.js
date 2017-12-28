var liveServer = require("live-server");

var params = {
    port: 8282,
    open: "/docs/index.html",
    watch : ["./docs/","./src/", "README.md"],
    wait: 1000
};
liveServer.start(params);