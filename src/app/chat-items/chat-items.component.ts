import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-items',
  templateUrl: './chat-items.component.html',
  styleUrls: ['./chat-items.component.scss']
})
export class ChatItemsComponent implements OnInit {
  userAvatar = 'https://via.placeholder.com/35x35';
  constructor() { }

  ngOnInit() {
  }

}
