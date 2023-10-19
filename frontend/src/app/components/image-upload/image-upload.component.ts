import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {

  file: any
  imageSrc: string;
  @Output() imageSelect = new EventEmitter();

  constructor() {
    this.imageSrc = '';
  }

  emitImage(){
    this.imageSelect.emit(this.file);
  }

  setFile(event: any){
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.file = file;
      this.displayImage(file);
    }
    this.emitImage()
  }

  displayImage(file: File) {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageSrc = e.target?.result as string;
        const imageElement = document.getElementById('file-image');
        if (imageElement) {
          imageElement.classList.remove('hidden');
        }
      };

      reader.readAsDataURL(file);
    } else {
      console.log('Please select an image.');
      this.imageSrc = '';
    }
  }

}
