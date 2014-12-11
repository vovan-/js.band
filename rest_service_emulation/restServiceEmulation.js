'use strict';

/**
 * REST service emulator that tries to read file in filesystem according http request url.
 * If file exists then service responses with file content.
 *
 * Currently REST service emulator supports only JSON format.
 *
 * File naming convention: /rest_service_emulation<Request url>_<Request method>.json
 */
module.exports = function () {

  var fs = require('fs'),
    filePrefix = './rest_service_emulation';

  function getFullFileName(resourceUrl, httpMethod, fileExtension) {
    return filePrefix + resourceUrl + '_' + httpMethod.toLowerCase() + '.' + fileExtension;
  }

  return {
    dispatchRequest: function(req, res) {
      var fullFileName = getFullFileName(req.url, req.method, 'json');

      if (fs.existsSync(fullFileName)) {
        var json = JSON.parse(fs.readFileSync(fullFileName, 'utf8'));

        res.write(JSON.stringify(json));
        res.end();

        return true;
      }

      return false;
    }
  };

}();
