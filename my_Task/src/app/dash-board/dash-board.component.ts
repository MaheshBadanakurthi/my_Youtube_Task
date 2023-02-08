import { Component,ElementRef,OnInit, TemplateRef, ViewChild } from '@angular/core';
import myJson from "../../assets/data/my_videoList.json"
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
   youtubeData:{id:number,url:string,desc:string}[]=myJson
  //  streamingVideo:{id:number,desc:string,url:string}
  streamingVideo:any={}
  @ViewChild('shortVideo') shortVideo:ElementRef | undefined

  constructor( private modalPopup:NgbModal){ }
ngOnInit(): void {
  // console.log(this.youtubeData);
}

playingVideo(index:number){
  this.streamingVideo=this.youtubeData[index]
  console.log(this.streamingVideo);

}
moreDetails(data:TemplateRef<string>){
  this.modalPopup.open(data)
}
closePopup(){
  this.modalPopup.dismissAll()
}

}
