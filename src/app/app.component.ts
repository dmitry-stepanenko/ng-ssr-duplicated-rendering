import { Component, inject, REQUEST } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng20ssr';

  constructor() {
    console.log('inject(REQUEST)', inject(REQUEST));
  }
}
