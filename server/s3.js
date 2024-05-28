import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
    endpoint: 'http://127.0.0.1:9000',
    credentials: {
        accessKeyId: 'gRk1NVbg8v9bcW5IHMny',
        secretAccessKey: '78rRnHaczSvpwCgQYRum0gBTE1bIdKSNLzFemmqk'
    },
    sslEnabled: false, 
    s3ForcePathStyle: true, 
    region: 'us-east-1'
})

const bucketName = 'teste'

export const uploadFile = async (fileBuffer, fileName, mimetype) => {
    console.log('cheguei aqui 3')

    const uploadParams = {
      Bucket: bucketName,
      Key: fileName, 
      Body: fileBuffer,
      ContentType: mimetype,
    }
  
    const command = new PutObjectCommand(uploadParams)
    try {
      // const data = await s3.send(new PutObjectCommand(uploadParams));
      const data = await s3.send(command)
      console.log('File uploaded successfully!', data);
    } catch (err) {
      console.error('Error uploading file:', err);
      throw err; // Re-throw error to be handled in the controller
    }
}
