import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  changeMenuVisibility(event:Event){
    let menu = document.getElementById('who_can_reply_menu')
    console.log(menu?.className)
    if(menu?.classList.contains('hidden')){
      menu?.classList.remove('hidden')
      console.log(menu?.classList)
      document.body.addEventListener('click', HomeComponent.hideMenu, true); 
    }else{
      menu?.classList.add('hidden')
      document.body.removeEventListener('click', HomeComponent.hideMenu, true)
    }
    event.stopPropagation()
  }

  static hideMenu(event:Event){
    let menu = document.getElementById('who_can_reply_menu')
    document.body.removeEventListener('click', HomeComponent.hideMenu, true)
    if(menu == null){
      return;
    }
    if(!menu?.classList.contains('hidden')){
      menu?.classList.add('hidden')
    }
    event.stopPropagation()
  }
}
