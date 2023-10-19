import { ListObjectsCommand, PutObjectCommand, S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { envs } from "../config/envs";
import fs from 'fs';

const region = envs.AWS_REGION;
const bucketName = envs.AWS_BUCKET_NAME;
const accessKeyId = envs.AWS_ACCESS_KEY_ID;
const secretAccessKey = envs.AWS_SECRET_ACCESS_KEY;


export class FileUploadService {

    private s3: S3Client;

    constructor() {
        this.s3 = new S3Client({
            region,
            credentials: {
                accessKeyId,
                secretAccessKey
            }
        });
    }

    getOne = async (key: string) => {
        try {
            const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
            const result = await this.s3.send(command);
            console.log(result);
            
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    getAll = async () => {
        try {
            const command = new ListObjectsCommand({ Bucket: bucketName });
            const result = await this.s3.send(command);

            return result.Contents;
        } catch (error) {
            console.log(error);
        }
    }

    upload = async (fileObj: Express.Multer.File) => {
        const fileStream = fs.createReadStream(fileObj.path);

        const uploadParams = {
            Bucket: bucketName,
            Body: fileStream,
            Key: fileObj.filename
        }

        const command = new PutObjectCommand(uploadParams);
        const result = await this.s3.send(command);
        console.log(result);

        return { imagePath: `/images/${result.Expiration}` };
    }

    download() {

    }

}
