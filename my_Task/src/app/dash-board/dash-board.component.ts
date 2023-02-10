import { Component,  TemplateRef } from '@angular/core';
import myJson from "../../assets/data/my_videoList.json"
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  youtubeData: { id: number, url: string, desc: string, Director: string, Music: string, Singer: string }[] = myJson
  streamingVideo = {
    id: this.youtubeData[0].id,
    desc: this.youtubeData[0].desc,
    url: this.youtubeData[0].url,
    Director: this.youtubeData[0].Director,
    Music: this.youtubeData[0].Music,
    Singer: this.youtubeData[0].Singer
  }
  constructor(private modalPopup: NgbModal) { }
  playingVideo(index: number) {
    this.streamingVideo = this.youtubeData[index]
  }
  moreDetails(data: TemplateRef<string>) {
    this.modalPopup.open(data)
  }
  closePopup() {
    this.modalPopup.dismissAll()
  }

}
