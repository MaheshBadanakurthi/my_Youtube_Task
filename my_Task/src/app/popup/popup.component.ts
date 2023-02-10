import { Component , OnInit} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{
  public streamingVideo:any
  constructor(public  modelRef:BsModalRef){}
  ngOnInit(){
    console.log(this.streamingVideo);

  }
  closePopup(){

  }
}
