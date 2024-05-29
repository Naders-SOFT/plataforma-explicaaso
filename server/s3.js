import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv/config';


const s3 = new S3Client({
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
    },
    sslEnabled: false, 
    s3ForcePathStyle: true, 
    region: 'us-east-1'
})

const bucketName = process.env.S3_BUCKET_NAME

export const uploadFile = async (fileBuffer, fileName, mimetype) => {
    const uploadParams = {
      Bucket: bucketName,
      Key: fileName, 
      Body: fileBuffer,
      ContentType: mimetype,
    }
  
    const command = new PutObjectCommand(uploadParams)
    try {
      const data = await s3.send(command)
      console.log('File uploaded successfully!', data);
    } catch (err) {
      console.error('Error uploading file:', err);
      throw err; // Re-throw error to be handled in the controller
    }
}
