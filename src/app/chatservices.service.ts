import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatservicesService {

  constructor() { }
  chatmsgs:any=[]

  msgpost(mymsg:any){
    this.chatmsgs.push(mymsg)
    return this.chatmsgs
  }
}
