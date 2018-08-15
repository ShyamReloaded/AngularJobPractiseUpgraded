import { Customer, Address } from './../Customer.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hideAddress = false;
  hidden = 'blah';
  /*customer:Customer = new Customer();*/
  customer: Customer = {
    id: 1,
    name : 'Shyam',
   address : {
    street : 'Bakers Street',
    city : 'London',
    region : 'East',
    state : 'Telangana'

   }

  }

  }


 /*addressClick() {
    this.hideAddress = !this.hideAddress;
  }
  regionChange(region: string) {

    this.region = region;
  }*/
}
