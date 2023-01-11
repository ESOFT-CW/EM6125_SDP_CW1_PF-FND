import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./core/services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EM6125_SDP_CW1-FND_PF';

  constructor(private authenticationService:LoginService,
              private router:Router) {
    if (this.authenticationService.verifyLogin()) {
      this.router.navigate(['/dashboard']);
    }else {
      this.router.navigate(['/login']);
    }
  }
}
