const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/ticket",
];

const url = 'https://localhost:7088'; // Todo: Make configurable.
//const url = 'http://vt-ks-srv01.dev.dips.no:7088';
module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: url,
        secure: false
    });

    app.use(appProxy);
};
