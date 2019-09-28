import { Component } from '@angular/core';
import { CameraService } from '../camera.service';
import QRCode from 'qrcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  base64Image = '';


  // ionic cordova run android -l

  constructor(private cameraHandler: CameraService, private barcode: BarcodeScanner, private geolocation: Geolocation) {

    this.generateQrCode();

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(`Current location ${resp}`);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  generateQrCode() {
    QRCode.toDataURL('')
      .then(url => {
        console.log(url);
      })
      .catch(err => {
        console.error(err);
      })
  }

  async openCamera() {
    try {
      const barcodeData = await this.barcode.scan();
      console.log(barcodeData);
    } catch (error) {
      console.log(error);
    }
  }

}
