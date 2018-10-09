import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-items',
  templateUrl: './chat-items.component.html',
  styleUrls: ['./chat-items.component.scss']
})
export class ChatItemsComponent implements OnInit {
  userAvatar = 'https://via.placeholder.com/35x35';
  details: Array<object> = [
    {
      username: 'tim',
      message: 'logygvcjhbzsjcb',
      time: '10:35pm',
      unreadCount: 2
    },
    {
      username: 'rfcy',
      message: 'dfnvjjnbfksjncb',
      time: '02:35pm',
      unreadCount: 2
    },
    {
      username: 'tevrf',
      message: 'logygvcjhbzsjcbfrvj',
      time: '10:35am',
      unreadCount: undefined
    },
    {
      username: 'yui',
      message: 'lbjfd cjsjcb',
      time: '7:03pm',
      unreadCount: 7
    },
    {
      username: 'mossd',
      message: 'logygvcjhbzsfv',
      time: '01:40am',
      unreadCount: 4
    }
  ];
  constructor() {}

  ngOnInit() {}
}
