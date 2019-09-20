const getExtensionFromFile = file => {
  splittedFilename = file.name.split('.');
  fileFormat = splittedFilename[splittedFilename.length-1];
  return fileFormat;
};

module.exports = {
  getExtensionFromFile,
};
