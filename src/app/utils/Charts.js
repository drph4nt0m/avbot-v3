const logger = require('./Logger');

module.exports = class Chart {
  static getChart(icao) {
    return new Promise(async (resolve, reject) => {
      // eslint-disable-next-line global-require
      const charts = (await require('./Mongo').getDb()).collection('charts');
      charts.findOne({ icao }, (error, chartsRes) => {
        if (error) {
          logger.error(`[x] ${error}`);
          reject(error);
        }
        resolve(chartsRes);
      });
    });
  }
};
