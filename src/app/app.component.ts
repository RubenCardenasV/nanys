import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanwu';
  img: string ='./assets/BGMonterrey.jpg';
  rutaLogo: string = "./assets/logo.jpg";
  inicio: string = "Inicio"


  openWhatsapp() {
    window.open('https://api.whatsapp.com/send?phone=526648223954', '_blank');
  }
}
