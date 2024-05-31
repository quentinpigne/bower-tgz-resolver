const tmp = require("tmp");
const decompress = require("decompress");
const decompressTarGz = require("decompress-targz");

const fs = require("node:fs");

module.exports = function resolver(bower) {
  return {
    match: function (source) {
      return fs.existsSync(source);
    },

    fetch: async function (endpoint, cached) {
      var tempDir = tmp.dirSync().name;

      await decompress(endpoint.source, tempDir, {
        plugins: [decompressTarGz()],
      });

      return {
        tempPath: tempDir,
        removeIgnores: true,
      };
    },
  };
};
