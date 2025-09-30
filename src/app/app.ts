import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DemoComponent} from './shared/demo-component/demo-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'sample';
}
