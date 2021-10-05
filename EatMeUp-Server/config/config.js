require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "pgadmin",
    database: "eatmeup",
    host: "127.0.0.1",
    dialect: "postgres",
    accessSecret: "devtest",
    refreshSecret: "devtest",
    region: process.env.EATMEUP_AWS_BUCKET_REGION,
    bucketName: process.env.EATMEUP_AWS_BUCKET_NAME,
    bucketAccessKey: process.env.EATMEUP_AWS_ACCESS_KEY,
    bucketSecretKey: process.env.EATMEUP_AWS_SECRET_KEY,
  },
  production: {
    username: process.env.EATMEUP_DATABASE_USERNAME,
    password: process.env.EATMEUP_DATABASE_PASSWORD,
    database: process.env.EATMEUP_DATABASE_DATABASE,
    port: process.env.EATMEUP_DATABASE_PORT,
    host: process.env.EATMEUP_DATABASE_HOST,
    dialect: process.env.EATMEUP_DATABASE_DIALECT,
    accessSecret: process.env.EATMEUP_ACCESS_SECRET,
    refreshSecret: process.env.EATMEUP_REFRESH_SECRET,
    region: process.env.EATMEUP_AWS_BUCKET_REGION,
    bucketName: process.env.EATMEUP_AWS_BUCKET_NAME,
    bucketAccessKey: process.env.EATMEUP_AWS_ACCESS_KEY,
    bucketSecretKey: process.env.EATMEUP_AWS_SECRET_KEY,
  },
};
