import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent {
  registrationForm: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      userId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      alert('Please fill all required fields with valid data.');
      return;
    }else{
      console.log(this.registrationForm);
      alert('submitted successfully');
    }
    // form submission logic
  }
}
// Here, we have initialized the registrationForm property to an empty FormGroup object. This ensures that the property will have a value at runtime, and the TypeScript compiler will no longer throw the error.





