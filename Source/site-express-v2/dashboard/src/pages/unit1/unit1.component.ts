import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit1',
  templateUrl: './unit1.component.html',
  styleUrls: ['./unit1.component.scss']
})
export class Unit1Component implements OnInit {

  private subscription = new Subscription();
  dataSource: any;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.api.getunit1().subscribe(res => {
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
