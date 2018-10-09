import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  userAvatar = 'https://via.placeholder.com/35x35';
  constructor() {}

  ngOnInit() {}
}
