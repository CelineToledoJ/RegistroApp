import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'; 


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public router: Router,
    private menu: MenuController,) 
    { }

  correoUsuario = localStorage.getItem('correoUsuario');

  ngOnInit() {



  }
  async startScan() {
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();
  } 

  cerrarSesion(){
    localStorage.removeItem('autenticado');
    this.router.navigate(["/login"]);
    this.menu.close();
  }

}

