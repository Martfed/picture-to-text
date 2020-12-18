const AWS = require('aws-sdk');
const textract = new AWS.Textract();

const getdocumentText = async (event) => {
  const { name } = event
  const params = {
    Document: {
      "S3Object": {
        "Bucket":"image-text-recognition",
        "Name": name
      }
    }
  };

  return await textract.detectDocumentText(params).promise();
};

module.exports = { getdocumentText };