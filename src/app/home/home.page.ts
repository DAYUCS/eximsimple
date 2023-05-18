import { Component, OnInit, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  private data = inject(DataService);
  public getmsgs$!: Observable<Message[]>;
  constructor() {}

  ngOnInit() {
      this.getmsgs$ = this.data.getMessages();
  }
  //refresh(ev: any) {
  //  setTimeout(() => {
  //    (ev as RefresherCustomEvent).detail.complete();
  //  }, 30000);
  //}

  //getMessages(): Observable<Message[]> {
  //  return this.data.getMessages();
  //}
}
