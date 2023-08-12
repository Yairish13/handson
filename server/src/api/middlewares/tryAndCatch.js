const httpStatus = require('http-status');

const withTryCatch = async (req, res, next, cb) => {
    try {
        await cb(req, res);
    } catch (e) {
        if (e?.customMessage) {
            return res.status(e?.status || httpStatus.INTERNAL_SERVER_ERROR).json({ error: e.customMessage });
        }
        return res.status(500).json({ error: "error occurred" });
    } finally {
        next();
    }
};

module.exports = withTryCatch;
