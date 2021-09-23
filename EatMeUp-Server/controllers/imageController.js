const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const aws = require("aws-sdk");
const crypto = require("crypto");
const { promisify } = require("util");
const randomBytes = promisify(crypto.randomBytes);

const s3url = async (req, res) => {
  try {
    //s3 버킷 인증키 할당
    const region = config.region;
    const bucketName = config.bucketName;
    const accessKeyId = config.bucketAccessKey;
    const secretAccessKey = config.bucketSecretKey;
    //s3 버킷 검증
    const s3 = new aws.S3({
      region,
      accessKeyId,
      secretAccessKey,
      signatureVersion: "v4",
    });
    // 유니크한 이미지 파일명을 얻기위해 암호화
    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString("hex");
    //s3url 요청을 위한 옵션, 버킷이름, 이미지 파일명, url만료기한
    const params = {
      Bucket: bucketName,
      Key: imageName,
      Expires: 60,
    };
    //s3url 요청
    const uploadURL = await s3.getSignedUrlPromise("putObject", params);
    //client에 s3url전달
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
