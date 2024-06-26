import { Component, HostListener  } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  rutaLogo: string = './assets/logo.jpg';
  isNavbarVisible: boolean = true;
  lastScrollPosition: number = 0;

  scrollTo(sectionId: string) {
    const navbarCollapse = document.getElementById('Menu') as HTMLElement;
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    navbarCollapse.classList.remove('show');
  

  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > this.lastScrollPosition) {
      // Desplazamiento hacia abajo, ocultar la barra de navegación
      this.isNavbarVisible = false;
    } else {
      // Desplazamiento hacia arriba, mostrar la barra de navegación
      this.isNavbarVisible = true;
    }

    this.lastScrollPosition = currentScrollPosition;
  }
  
}
