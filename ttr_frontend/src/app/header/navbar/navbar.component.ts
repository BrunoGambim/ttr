import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/login-dialog/login-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog) {}

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent);
  }

  changeMenuVisibility(event:Event){
    let menu = document.getElementById('profile_menu')
    console.log(menu?.className)
    if(menu?.classList.contains('hidden')){
      menu?.classList.remove('hidden')
      console.log(menu?.classList)
      document.body.addEventListener('click', NavbarComponent.hideMenu, true); 
    }else{
      menu?.classList.add('hidden')
      document.body.removeEventListener('click', NavbarComponent.hideMenu, true)
    }
    event.stopPropagation()
  }

  static hideMenu(event:Event){
    let menu = document.getElementById('profile_menu')
    document.body.removeEventListener('click', NavbarComponent.hideMenu, true)
    if(menu == null){
      return;
    }
    if(!menu?.classList.contains('hidden')){
      menu?.classList.add('hidden')
    }
    event.stopPropagation()
  }
}