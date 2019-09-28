import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Injectable({
  providedIn: 'root'
})
export class CameraService {

  options: CameraOptions = {};

  constructor(private camera: Camera) {


    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

  }


  getCamera() {
    return this.camera.getPicture(this.options).then(image => {

      const imageData = `data:image/jpeg;base64, ${image}`;

      console.log(imageData);
    }).catch(e => {
      console.error(e);
    })
  }
}
