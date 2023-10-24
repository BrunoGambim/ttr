import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  readonly LOGIN: number = 1
  readonly SIGNUP_FIRST_STEP: number = 2
  readonly SIGNUP_SECOND_STEP: number = 3
  readonly SIGNUP_THIRD_STEP: number = 4
  step: number = this.LOGIN

  bgImageName: string = ''
  bgImageFile: File | null = null

  profileImageName: string = ''
  profileImageFile: File | null = null

  bgImageURL:string = "https://templates.iqonic.design/sofbox-admin/sofbox-dashboard-laravel/public/assets/images/page-img/profile-bg.jpg"
  profileImageURL:string = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"

  signUpForm = new FormGroup({
    name: new FormControl<string>('', [ ]),
    email: new FormControl<string>('', [  ]),
    password: new FormControl<string>('', [  ]),
    confirmPassword: new FormControl<string>('', [  ]),
    biography: new FormControl<string>('', [  ]),
    bgImageFile: new FormControl<string>('', [  ]),
    profileImageFile: new FormControl<string>('', [  ]),
  });
  
  onBGImageSelected(event: Event){
    const target = event.target as HTMLInputElement;
    if(target != null){
      this.bgImageFile = (target.files as FileList)[0];
      this.bgImageName = this.bgImageFile.name
    }
    this.signUpForm.get("bgImageFile")?.setValue(this.bgImageFile ? this.bgImageName: '')
    if(this.bgImageFile != null){
      this.bgImageURL = URL.createObjectURL(this.bgImageFile)
    }
  }

  onProfileImageSelected(event: Event){
    const target = event.target as HTMLInputElement;
    if(target != null){
      this.profileImageFile = (target.files as FileList)[0];
      this.profileImageName = this.profileImageFile.name
    }
    this.signUpForm.get("profileImageFile")?.setValue(this.profileImageFile ? this.profileImageName: '')
    if(this.profileImageFile != null){
      this.profileImageURL = URL.createObjectURL(this.profileImageFile)
    }
  }

  goToSignUpFirstStep(){
    this.step = this.SIGNUP_FIRST_STEP
  }
  goToSignUpSecondStep(){
    this.step = this.SIGNUP_SECOND_STEP
  }
  goToSignUpThirdStep(){
    this.step = this.SIGNUP_THIRD_STEP
  }
  signUp(){
    console.log("sign up")
  }
}