import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from 'src/app/Model/registration.model';
import { RegistrationSService } from 'src/app/Service/registration-s.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  form!: FormGroup;
  registrationList : Registration[] = [];   

  constructor (private registratinService : RegistrationSService,
    private router: Router){}
  ngOnInit():void {
    this.form = new FormGroup({
      stu_no: new FormControl('', [Validators.required]),
      stu_id: new FormControl('', [Validators.required]),
      stu_name: new FormControl('', Validators.required),
      stu_phone: new FormControl('', Validators.required),
      stu_address: new FormControl('', Validators.required),
    
    });

    this.getall();
  }

  getall(){
    console.log("'get all");
    this.registratinService.getAll().subscribe((data:Registration[])=>{
      this.registrationList=data;
      
    })
  }

  delete (reg : Registration ){
    console.log ("student delete--", reg)
    this.registratinService.delete(reg.stu_no!).subscribe((res)=>{
      this.ngOnInit();
    })
  }

  editStu (reg: Registration) {
    console.log("Edit student--" , reg)
    // localStorage.removeItem('stuNo');  
    // // let proid = 0;
    // localStorage.setItem('stuNo', reg.stu_no!.toString());
    // this.router.navigateByUrl('/registration');
    this.form.patchValue(reg);

  }

  submit(){
    console.log(this.form.value);
    this.registratinService.update(this.form.value).subscribe(data => {   
      this.ngOnInit(); 
    } )
  
 }
 goReg (){
    this.router.navigateByUrl('/registration');
 }
}
