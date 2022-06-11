import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  user:any;
  editForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.editForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      age:new FormControl('',[Validators.required]),
      
    })

  }

  submit(){
    console.log(this.editForm.value)
  }
   
}
