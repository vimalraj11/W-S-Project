import { Component, OnInit } from '@angular/core';
import { ChatservicesService } from 'src/app/chatservices.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private chat:ChatservicesService) { }
  

  ngOnInit(): void {
  }
  msgs:any=[]
  send(mymsg:any){
    this.msgs=this.chat.msgpost(mymsg)
    mymsg = " ";
  }
}
