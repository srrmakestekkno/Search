const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/ticket",
];

const url = 'https://localhost:7088';

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: url,
        secure: false
    });

    app.use(appProxy);
};
