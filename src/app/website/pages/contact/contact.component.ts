// @angular
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
// @services
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
// @components
import { InputFieldComponent } from '@shared/components/input-field/input-field.component';
import { TextareaFieldComponent } from '@shared/components/textarea-field/textarea-field.component';
import { FormService } from '@services/form.service';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [
    InputFieldComponent,
    NgOptimizedImage,
    ReactiveFormsModule,
    TextareaFieldComponent,
    TranslatePipe,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {
  // @injections
  public fb = inject( FormBuilder );
  public formService = inject( FormService );
  public localStorageService = inject( LocalStorageService );
  public router = inject( Router );
  public translateService = inject( TranslateService );
  // @params
  isCompleted:boolean = false;
  isDisabled:boolean = false;
  isSubmitted:boolean = false;
  loading:boolean = false;

  public myForm:FormGroup = this.fb.group({
    fullname    : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],      
    email       : ['', [Validators.required, Validators.pattern(this.formService.emailPattern)] ],  
    subject     : ['', [Validators.required, Validators.minLength(3)]],    
  });

  onSubmit(){

    console.log(this.myForm.value);
    this.isSubmitted = true;
    
    if( this.myForm.valid ) {
      console.log(this.myForm.valid);
      this.loading = true;
      setTimeout(()=>{
        this.loading = false;
        this.isSubmitted = false;
        this.isCompleted = true;
        setTimeout(()=>{
          this.myForm.reset();
          this.isCompleted = false;
          this.router.navigateByUrl('contact-submit');
        },1500)
      },2500)
      // TODO: implement page thanks
    } else {
      console.log('Form Invalidated');
    }

  };

}
