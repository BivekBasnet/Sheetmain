import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Des1Component } from "./des1/des1.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Des1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sheet';
}
