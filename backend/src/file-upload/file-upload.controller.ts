import { Response, Request } from 'express';
import { FileUploadService } from './file-upload.service';

export class FileUploadController {

    constructor(
        private readonly fileUploadService: FileUploadService
    ) { }

    getOne = async (req: Request, res: Response) => {
        const { key } = req.params;
        const file = await this.fileUploadService.getOne(key);
        return res.json(file?.$metadata);
    }

    getAll = async (req: Request, res: Response) => {
        const files = await this.fileUploadService.getAll();
        return res.json(files);
    }

    uploadFile = async (req: Request, res: Response) => {
        const file = req.file;
        if(!file) return res.status(400).json({message: 'No file provided'});
        
        console.log(file);
        const image = await this.fileUploadService.upload(file);

        return res.json({
            message: 'File uploaded successfully',
            image
        })
    }
}