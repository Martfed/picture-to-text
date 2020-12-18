const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const uploadToS3 = async (event) => {
  const { name, image, ContentType } = event
  const decodedImage = Buffer.from(image.replace(/^data:image\/\w+;base64,/, ""),'base64')

  const params = {
    Bucket: 'image-text-recognition',
    Key: name,
    Body: decodedImage,
    ContentType
  };

  await s3.putObject(params).promise();
};

module.exports = { uploadToS3 };