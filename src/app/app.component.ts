import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarotreader';



  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
