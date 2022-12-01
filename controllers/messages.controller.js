const path = require('path');

function getMessages(req, res) {
  const filePath = path.join(
    __dirname,
    '..',
    'public',
    'images',
    'skimountain.jpg'
  );
  res.sendFile(filePath);
}

module.exports = {
  getMessages,
};
