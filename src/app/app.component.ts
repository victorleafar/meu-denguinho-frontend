import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home/home.component.html',
  styleUrl: './home/home.component.css'
})
export class AppComponent {
  title = 'meu-denguinho-frontend';
}
