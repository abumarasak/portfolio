const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsCommand,
} = require("@aws-sdk/client-s3");
const fs = require("fs");

const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  region: process.env.AWS_BUCKET_REGION,
});

// Upload file to AWS S3
const uploadFile = (file) => {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fileStream,
    Key: file.filename,
  };
  const command = new PutObjectCommand(uploadParams);
  return new Promise((resolve, reject) => {
    s3Client.send(command).then(
      (data) => {
        resolve({ key: file.filename, metadata: data });
      },
      (err) => {
        reject(err);
      }
    );
  });
};

// Download file from AWS S3
const getFile = async (fileKey) => {
  const downloadParams = {
    Key: fileKey,
    Bucket: process.env.AWS_BUCKET_NAME,
  };
  const command = new GetObjectCommand(downloadParams);
  const { Body } = await s3Client.send(command);
  return Body;
};

// Delete file from AWS S3
const deleteFile = (fileKey) => {
  const deleteParams = {
    Key: fileKey,
    Bucket: process.env.AWS_BUCKET_NAME,
  };
  const command = new DeleteObjectCommand(deleteParams);
  return s3Client.send(command);
};

// Get all files from AWS S3
const getAllFiles = async () => {
  const listParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
  };
  const command = new ListObjectsCommand(listParams);
  const { Contents } = await s3Client.send(command);
  return Contents;
};

// Export
module.exports = {
  uploadFile,
  getFile,
  deleteFile,
  getAllFiles,
};
