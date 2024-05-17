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

//textos 
  mission: string = 'Brindar servicios profesionales confiables a padres de familia para el cuidado de sus hijos con una estructura pedagógica con base en el principio que cada niño es un ser único ñ, irrepetible y valioso.';
  vission: string = 'Ser la empresa de referencia en servicio de niñeras que genere confianza a los padres de familia para el cuidado y desarrollo de sus hijos.';
}
