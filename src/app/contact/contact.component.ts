import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myReactiveForm = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(13), Validators.pattern('[+0-9 ]*')])
  });

  get email() { return this.myReactiveForm.get('email') }

  myformsubmit() {
    return console.warn(this.myReactiveForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
