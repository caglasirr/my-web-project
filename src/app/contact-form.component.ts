import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, FormControlName } from '@angular/forms'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  path = "http://localhost:3000/userinfos";
  constructor() { }

  ngOnInit(): void {}

  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    phone: new FormControl("", [Validators.required,Validators.maxLength(10)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    subject: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required, Validators.maxLength(300)])
  })

  // getFormValidationErrors(form:FormGroup){
  //     let messages: string[] = [];

  //     Object.keys(form.controls).forEach(k=>{
  //       console.log(k)
  //       console.log(form.controls[k])
  //     }

  //     )
        
      
  // }


  // userInfo: UserInfo[] = [{name:"Çağla", phone:5467272734, email:"fff@gmail.com", subject:"Demo Talebi", message:"Hello"}];

  // getUserInfo(u: UserInfo) {
  //   return JSON.stringify(this.userInfo)
  // }

  // sendMessage(u: UserInfo) {
  //   console.log(this.getUserInfo(u))
  // }


  formSubmitted:boolean=false;

  onSubmit(){

    this.formSubmitted=true;
    
    if(this.contactForm.valid){
      console.log(this.contactForm.value)
      this.contactForm.reset();
      this.formSubmitted=false;
      }
  }


    // errors(x:FormControlName){
    //   const val =this.contactForm.get('name')
    //   if(val?.hasError('required'))
    //   console.log("İsim alanı boş olamaz")
    // }

    
  }




