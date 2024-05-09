import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  openWhatsapp() {
  window.open('https://api.whatsapp.com/send?phone=526648223954', '_blank');
}


}
