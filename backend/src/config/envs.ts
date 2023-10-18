import 'dotenv/config';
import { get } from 'env-var';


export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  AWS_REGION: get('AWS_REGION').required().asString(),
  AWS_BUCKET_NAME: get('AWS_BUCKET_NAME').required().asString(),
  AWS_ACCESS_KEY_ID: get('AWS_ACCESS_KEY_ID').required().asString(),
  AWS_SECRET_ACCESS_KEY: get('AWS_SECRET_ACCESS_KEY').required().asString(),
}



