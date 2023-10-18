import { Router } from "express";
import { FileUploadController } from "./file-upload.controller";
import { FileUploadService } from "./file-upload.service";

import multer from 'multer'
const upload = multer({ dest: 'uploads/' })

export class FileUploadRoutes {
    static get routes(): Router {
        const router = Router();
        const service = new FileUploadService()
        const controller = new FileUploadController(service);

        // add middleware to handle file upload
        router.post('/', upload.single('image') ,controller.uploadFile);

        return router;
    }
}