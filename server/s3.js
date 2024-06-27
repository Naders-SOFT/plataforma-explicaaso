import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import dotenv from 'dotenv/config';

// criando o cliente s3 que vai mandar e receber aquivos
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

export async function uploadFile(fileBuffer, fileName, mimetype, bucketName) {
    const uploadParams = {
        Bucket: bucketName,
        Key: fileName, 
        Body: fileBuffer,
        ContentType: mimetype,
    }
  
    // criando objeto para ser enviado ao minio
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
    const params = {
        Bucket: bucketName,
        Key: key
    }

    // gerando o link com assinatura do pdf
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

    // criando objeto que vai ser deletado
    const command = new DeleteObjectCommand(deleteParams)
    try {
        s3.send(command)
    }
    catch(err) {
        console.log(err.message)
        throw err
    }
}
