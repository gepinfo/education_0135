import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
    public student:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        Name: '',
        Email: '',
    }

    constructor (
        private createService: CreateService,
    ) { }

    ngOnInit() {
        this.student.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createService.GpCreate(this.student).subscribe(data => {
            this.student.Name = ''
 	 	this.student.Email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}