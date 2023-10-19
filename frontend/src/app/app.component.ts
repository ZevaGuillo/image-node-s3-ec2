import { Component } from '@angular/core';
import { UploadService } from './service/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor( private uploadService: UploadService ) { }

  setImage(image: any) {
    this.uploadService.setImage(image);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.uploadService.uploadImage();
  }
}
