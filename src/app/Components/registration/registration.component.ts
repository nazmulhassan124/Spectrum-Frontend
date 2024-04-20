import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationSService } from 'src/app/Service/registration-s.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  form!: FormGroup;

  constructor( public registrationService: RegistrationSService,
    private router: Router,){}

  ngOnInit(): void {
    this.form = new FormGroup({
      stu_id: new FormControl('', [Validators.required]),
      stu_name: new FormControl('', Validators.required),
      stu_phone: new FormControl('', Validators.required),
      stu_address: new FormControl('', Validators.required),
    
    });

  }
  submit(){
     console.log(this.form.value);
      // console.log(this.form.value);
    this.registrationService.create(this.form.value).subscribe((res:any) => {
      console.log('Res---', res)
    //  console.log('Post created successfully!');
      this.router.navigateByUrl('/home');
 })
  }

  updateStu (){
    let stuNo: any = localStorage.getItem('stuNo'); 
    if (+stuNo > 0) {  
      this.registrationService.getById(+stuNo).subscribe(
        data => {this.form.patchValue(data);}
        )  
      // this.btnvisibility = false;  
      // this.Productformlabel = 'Edit Product';  
      // this.empformbtn = 'Update';  
    }  
  }

}
