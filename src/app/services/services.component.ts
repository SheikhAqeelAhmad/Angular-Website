import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetapidataService } from '../getapidata.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  mydata: any;
  constructor(private servicedata: GetapidataService) {
    this.servicedata.getApiData().subscribe((data) => {

      this.mydata = data;
    });
  }



  ngOnInit(): void {

  }

}
