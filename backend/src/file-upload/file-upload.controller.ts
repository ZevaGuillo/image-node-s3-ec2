import { Response, Request } from 'express';
import { FileUploadService } from './file-upload.service';

export class FileUploadController {

    constructor(
        private readonly fileUploadService: FileUploadService
    ) { }

    uploadFile = async (req: Request, res: Response) => {
        const url = await this.fileUploadService.upload();

        return res.json({
            message: 'File uploaded successfully',
            url
        })
    }
}