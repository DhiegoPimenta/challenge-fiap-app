import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class IonLoaderService {

    constructor(public loadingController: LoadingController) { }
    simpleLoader() {
        this.loadingController.create({
        }).then((response) => {
            response.present();
        });
    }

    dismissLoader() {
        setTimeout(() => {
            this.loadingController.dismiss().then((response) => {
            }).catch((err) => {
                console.log(err);
            });
        }, 3000);
    }

    autoLoader() {
        this.loadingController.create({
            message: 'Loader hides after 4 seconds',
            duration: 4000
        }).then((response) => {
            response.present();
            response.onDidDismiss().then((response) => {
            });
        });
    }

    customLoader() {
        this.loadingController.create({
            message: 'Loader with custom style',
            duration: 4000,
            cssClass: 'loader-css-class',
            backdropDismiss: true
        }).then((res) => {
            res.present();
        });
    }

}