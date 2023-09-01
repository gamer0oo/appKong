import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private alertService:AlertController) { }

  async showAlert(mensaje:string, titulo:string) {
    let alert = await this.alertService.create({cssClass:"alertClass", message:mensaje, header:titulo, buttons:['Aceptar']})
    await alert.present();
    return alert;
  }
}
