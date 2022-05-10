import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: String = '';

  constructor() {}

  ngOnInit(): void {}
}
