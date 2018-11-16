import { Component } from '@angular/core';
import {Login} from "./models/login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  loginInfo:Login = {
      first_name:'Kate',
      last_name:'Astafieva',
      avatar:'ka.jpeg',
      title:'Senior Developer'
  };
}
