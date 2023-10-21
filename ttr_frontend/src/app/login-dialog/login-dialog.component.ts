import { Component } from '@angular/core';

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
