import { Injectable } from '@angular/core';
import { SpotifyConfig } from '../../environments/environment.development';
import Spotify from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  getLoginUrl() {
    const authEndpoint = `${SpotifyConfig.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfig.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfig.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfig.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  getTokenUrl() {
    console.log(window.location.hash);
    if (!window.location.hash) return '';
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  defineAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}
