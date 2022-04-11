const Log = require("../models/Log");

module.exports = async function (req, res, next) {
  try {
    res.on("finish", async () => {
      const log = new Log({
        host: req.headers["host"],
        userId: req.user ? req.user.id : null,
        path: req.path,
        method: req.method,
        referer: req.headers["referer"],
        os: req.useragent.os,
        browser: req.useragent.browser,
        platform: req.useragent.platform,
        source: req.useragent.source,
      });
      await log.save();
    });
  } catch (error) {
    res.status(401).json({ error });
  }
  next();
};
