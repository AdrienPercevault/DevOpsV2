import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit3',
  templateUrl: './unit3.component.html',
  styleUrls: ['./unit3.component.scss']
})
export class Unit3Component implements OnInit {

  private subscription = new Subscription();
  dataSource: any;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.api.getunit3().subscribe(res => {
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
