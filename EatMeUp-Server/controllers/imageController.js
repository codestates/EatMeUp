const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const aws = require("aws-sdk");
const crypto = require("crypto");
const { promisify } = require("util");
const randomBytes = promisify(crypto.randomBytes);

const s3url = async (req, res) => {
  try {
    const region = config.region;
    const bucketName = config.bucketName;
    const accessKeyId = config.bucketAccessKey;
    const secretAccessKey = config.bucketSecretKey;

    const s3 = new aws.S3({
      region,
      accessKeyId,
      secretAccessKey,
      signatureVersion: "v4",
    });

    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString("hex");

    const params = {
      Bucket: bucketName,
      Key: imageName,
      Expires: 60,
    };

    const uploadURL = await s3.getSignedUrlPromise("putObject", params);

    res.status(200).json({
      success: true,
      message: "s3url request success",
      s3url: uploadURL,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "s3url request fail",
      error: error,
    });
  }
};

module.exports = { s3url };
