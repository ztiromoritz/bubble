var liveServer = require("live-server");

var params = {
    port: 8282,
    open: "/example/index.html",
    watch : ["./example/","./src/"],
    wait: 1000
};
liveServer.start(params);