import { NextResponse } from 'next/server';
import spotify_api from 'spotify-web-api-node';

const spotifyApi = new spotify_api({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI
})

export async function GET() {
    const scopes = [
        'user-read-private',
        'user-read-email',
        'user-top-read',
        'playlist-modify-public',
        'playlist-modify-private',
        'playlist-read-private',
        'playlist-read-collaborative',
        'user-library-read',
        'user-library-modify',
    ];
    
    const authUrl = spotify_api.createAuthorizeURL(scopes, null, true);
    return NextResponse.json({url: authUrl});
}

