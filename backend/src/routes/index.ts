import { Router } from 'express';
import { FileUploadRoutes } from '../file-upload/file-upload.route';

export class AppRoutes {

  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/api/upload', FileUploadRoutes.routes );

    return router;
  }


}

