import { Component, OnInit } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  sampleData: any[] = [];
  activePage:number = 0;  
  
  
  constructor(
    public paginationService: PaginationService,
  ) {
  }

  ngOnInit() {
    this.getSampleData(this.activePage);
  }

  displayActivePage(activePageNumber:number){  
    this.activePage = activePageNumber
    this.getSampleData(this.activePage);  
  }  


  getSampleData(id) {
    this.paginationService.getSampleData(id)
    .subscribe(res => {
      console.log(res);
      this.sampleData = res;
    });
  }

}  
