import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit5',
  templateUrl: './unit5.component.html',
  styleUrls: ['./unit5.component.scss']
})
export class Unit5Component implements OnInit {

  private subscription = new Subscription();
  dataSource: any;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.api.getunit5().subscribe(res => {
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
