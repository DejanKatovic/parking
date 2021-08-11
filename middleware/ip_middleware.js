const requestIp = require('request-ip');

const ipMiddleware = (req, res, next) => {
    const clientIp = requestIp.getClientIp(req);
    const now = Date.now();
    console.log(now);

    req.clientIp = clientIp;
    console.log(clientIp);
    next();
}

module.exports = ipMiddleware;