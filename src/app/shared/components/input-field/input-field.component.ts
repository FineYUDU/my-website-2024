// @angular
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// @service
import { FormService } from '@services/form.service';
import { LocalStorageService } from '@services/localstorage.service';

@Component({
  selector: 'input-field',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => InputFieldComponent),
      multi:true
    }
  ]
})
export class InputFieldComponent implements ControlValueAccessor {
  // @inputs
  @Input() errorMessage?:string; 
  @Input() isRequired?:boolean; 
  @Input() iconName:string= 'icon-email';
  @Input() inputType:string = 'text';
  @Input() isDisabled:boolean = false;
  @Input() isInvalidPassword?:boolean; 
  @Input() isSubmitted!:boolean; 
  @Input() legendName:string = '';
  @Input() maxLength:number = 100;
  @Input() minLength:number = 0;
  @Input() placeholder:string = '';
  @Input() showIcon:boolean = false;
  // @injections
  private onChangeCb?: Function;
  public formService = inject( FormService );
  public localStorageService = inject( LocalStorageService );
  // @params
  fieldValue:any = '';
  onTouchCb?: () => void;

  changeText($event: any) {
    this.onChangeCb?.($event.target.value);
  }
  writeValue(value: any): void {
    this.fieldValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    fn = this.onTouchCb;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled = this.isDisabled;
  }
}
