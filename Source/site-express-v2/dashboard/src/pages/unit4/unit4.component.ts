import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit4',
  templateUrl: './unit4.component.html',
  styleUrls: ['./unit4.component.scss']
})
export class Unit4Component implements OnInit {

  private subscription = new Subscription();
  dataSource: any;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.api.getunit4().subscribe(res => {
      this.dataSource = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  goToDetail(idAutomate: any, unit: any){
    console.log("UNIT :" + unit)
    this.router.navigate([`/${unit}/${idAutomate}`]);
  }

}
