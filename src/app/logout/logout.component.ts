import { BasicauthService } from './../service/basicauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private basic:BasicauthService) { }

  ngOnInit(): void {
    this.basic.logout();
  }

}
