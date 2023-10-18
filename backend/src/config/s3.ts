import AWS from 'aws-sdk';
import { envs } from './envs';

const region = envs.AWS_REGION;
const bucketName = envs.AWS_BUCKET_NAME;
const accessKeyId = envs.AWS_ACCESS_KEY_ID;
const secretAccessKey = envs.AWS_SECRET_ACCESS_KEY;

export class S3 {
    private s3: AWS.S3;

    constructor() {
        this.s3 = new AWS.S3({
            region,
            accessKeyId,
            secretAccessKey,
            signatureVersion: 'v4',
        });
    }



}