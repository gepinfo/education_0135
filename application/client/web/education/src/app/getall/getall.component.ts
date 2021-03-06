import { Component, OnInit } from '@angular/core';
import { GetallService } from './getall.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.scss'],
})

export class GetallComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'Name'  },{ headerName: 'Email', field: 'Email'  },];
    public student:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        Name: '',
        Email: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallService: GetallService,
    ) { }

    ngOnInit() {
        this.student.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}