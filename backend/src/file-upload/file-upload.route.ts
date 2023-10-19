import { Router } from "express";
import { FileUploadController } from "./file-upload.controller";
import { FileUploadService } from "./file-upload.service";

// multer sirve para subir archivos al servidor 
import multer from 'multer'
const upload = multer({ dest: 'uploads/' })

export class FileUploadRoutes {
    static get routes(): Router {
        const router = Router();
        const service = new FileUploadService()
        const controller = new FileUploadController(service);

        // Este middleware se ejecuta antes de llegar al controlador
        // con el objetivo de subir el archivo al servidor
        router.get('/:key', controller.getOne);
        router.get('/', controller.getAll);
        router.post('/', upload.single('image') ,controller.uploadFile);

        return router;
    }
}