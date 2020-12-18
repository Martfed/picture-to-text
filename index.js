const { uploadToS3 } = require('./src/processor/uploadToS3')
const { getdocumentText } = require('./src/processor/getDocumentText')
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

exports.handler = async (event) => {
  let getText = '';
  const payload = JSON.parse(event.body);
  const name = payload.key;
  const ContentType = payload.type;
  const image = payload.image;

  try {
    await uploadToS3({ name, image, ContentType })
    getText = await getdocumentText({ name })
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify(error),
    };
  }

  const response = {
    statusCode: 200,
    headers,
    body: JSON.stringify(getText)
  };
  return response;
};
