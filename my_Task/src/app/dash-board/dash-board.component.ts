import { Component, TemplateRef } from '@angular/core';
import myJson from '../../assets/data/my_videoList.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent {
  modalRef?: BsModalRef;

  youtubeData: {
    id: number;
    url: string;
    desc: string;
    Director: string;
    Music: string;
    Singer: string;
  }[] = myJson;
  streamingVideo = {
    id: this.youtubeData[0].id,
    desc: this.youtubeData[0].desc,
    url: this.youtubeData[0].url,
    Director: this.youtubeData[0].Director,
    Music: this.youtubeData[0].Music,
    Singer: this.youtubeData[0].Singer,
  };
  constructor(private modalService: BsModalService) {}
 public playingVideo(index: number) {
    this.streamingVideo = this.youtubeData[index];
  }
  public videoDetails(detatilsOfVideo:object) {
    // below I use ngx-bootstrap modal to pass popup details from this component to PopupComponet.
    // Inside of initialState we pass Object which is passing here to POpup COmponent
    this.modalRef = this.modalService.show(PopupComponent, {initialState:{
      streamingVideo:detatilsOfVideo
    }});


  }

}
