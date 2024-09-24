import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(private _spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getTokenFromUrl();
  }

  getLoginUrl() {
    console.log(this._spotifyService.getLoginUrl());
  }

  getTokenFromUrl() {
    const token = this._spotifyService.getTokenUrl();
    if (!!token) {
      this._spotifyService.defineAccessToken(token);
    }
  }
}
