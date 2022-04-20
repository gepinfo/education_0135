import { Component, OnInit } from '@angular/core';
import { CollegegetallService } from './collegegetall.service';

@Component({
  selector: 'app-collegegetall',
  templateUrl: './collegegetall.component.html',
  styleUrls: ['./collegegetall.component.scss'],
})

export class CollegegetallComponent implements OnInit {
    columnDefs: any = [{ headerName: 'CollegeName', field: 'College_Address'  },];
    public college:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        College_Name: '',
        College_Address: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private collegegetallService: CollegegetallService,
    ) { }

    ngOnInit() {
        this.college.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.collegegetallService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}