import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
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

// const bucketName = process.env.S3_BUCKET_NAME

export async function uploadFile(fileBuffer, fileName, mimetype, bucketName) {
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
        throw err
    }
}

export async function getObjectSignedUrl(key, bucketName) {
    console.log(key, bucketName)
    const params = {
        Bucket: bucketName,
        Key: key
    }

    const command = new GetObjectCommand(params);
    const seconds = 3600
    const url = await getSignedUrl(s3, command, { expiresIn: seconds });

    return url
}

export function deleteFile(fileId, bucketName) {
    const deleteParams = {
        Bucket: bucketName,
        Key: fileId,
    }

    const command = new DeleteObjectCommand(deleteParams)

    try {
        s3.send(command)
    }
    catch(err) {
        console.log(err.message)
        throw err
    }
}
