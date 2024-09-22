export const environment = {
  production: true,
};

export const SpotifyConfig = {
  clientId: 'c6d47b8864374aada2dcaa21bf9c7d90',
  authEndpiont: 'https://accounts.spotify.com/authorize',
  redirectUri: 'http://localhost:4200/login/',
  scopes: [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'user-library-read',
    'playlist-read-private',
    'playlist-read-collaborative',
  ],
};
