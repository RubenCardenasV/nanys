import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kanwu';
  img: string = './assets/BGMonterrey.jpg';
  rutaLogo: string = './assets/logo.jpg';
  inicio: string = 'Inicio';

  urlInstagram: string = 'https://www.instagram.com/kanwucol/';

  openWhatsapp() {
    window.open('https://api.whatsapp.com/send?phone=526648223954', '_blank');
  }

  // scrollTo(sectionId: string) {
  //   var section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
}
