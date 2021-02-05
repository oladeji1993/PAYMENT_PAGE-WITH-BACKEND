import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  requestAmount: number;
  salary: number;
  selectedValue: string

  title = 'StartupPage';
  constructor(private http: HttpClient) {

  }

  selectedValueChange(e) {
    console.log(e)
    this.selectedValue = e;
  }

  radioChange(e) {
    console.log(e.target.value)
  }
  
  sendPost() {
    console.log("i am working")
    let headers = new Headers()
      return this.http.post("http://localhost:5000/api/v1/payments/", {
      request_amount: this.requestAmount,
      salary: this.salary,
      payment_plan: this.selectedValue,
      status:'publish'},{
      headers:new HttpHeaders ({
      'content-Type': 'application/json',
      'Accept': 'application/json',
    })
  }).subscribe(result =>{
    console.log(result)
  })
  
}
}





