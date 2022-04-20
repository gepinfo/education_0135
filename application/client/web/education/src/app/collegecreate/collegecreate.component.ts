import { Component, OnInit } from '@angular/core';
import { CollegecreateService } from './collegecreate.service';

@Component({
  selector: 'app-collegecreate',
  templateUrl: './collegecreate.component.html',
  styleUrls: ['./collegecreate.component.scss'],
})

export class CollegecreateComponent implements OnInit {
    public college:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        College_Name: '',
        College_Address: '',
    }

    constructor (
        private collegecreateService: CollegecreateService,
    ) { }

    ngOnInit() {
        this.college.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.collegecreateService.GpCreate(this.college).subscribe(data => {
            this.college.College_Name = ''
 	 	this.college.College_Address = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}