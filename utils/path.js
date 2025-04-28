const path = require('path');
function getFileFromAbsolutePath(relativePath) {
  return path.join(__dirname, relativePath);
}

module.exports = { getFileFromAbsolutePath };

