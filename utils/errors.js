'use strict'

const httpError = (message, status) => {
    const err = new Error(message);
    err.status = status;
    return error;
};

module.exports = {
    httpError,
};