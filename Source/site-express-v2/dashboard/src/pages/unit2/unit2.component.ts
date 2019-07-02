import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit2',
  templateUrl: './unit2.component.html',
  styleUrls: ['./unit2.component.scss']
})
export class Unit2Component implements OnInit {

  private subscription = new Subscription();
  dataSource: any;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.api.getunit2().subscribe(res => {
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
