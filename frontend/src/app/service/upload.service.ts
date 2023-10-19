import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private _image: any;

  constructor( private httpClient: HttpClient ) { }

  setImage(image: any) {
    this._image = image;
  }

  uploadImage() {
    const formData = new FormData();
    formData.append('image', this._image);
    return this.httpClient.post('http://localhost:8080/api/upload', formData)
      .subscribe(res => {
        console.log(res);
      });
  }
}
