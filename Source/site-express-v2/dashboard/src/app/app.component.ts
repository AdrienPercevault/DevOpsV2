import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  constructor(private router: Router) { }

  goToUnit1(){
    this.router.navigate(['/unit1']);
  }
  goToUnit2(){
    this.router.navigate(['/unit2']);
  }
  goToUnit3(){
    this.router.navigate(['/unit3']);
  }
  goToUnit4(){
    this.router.navigate(['/unit4']);
  }
  goToUnit5(){
    this.router.navigate(['/unit5']);
  }
}
