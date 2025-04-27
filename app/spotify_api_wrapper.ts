const base_url = "https://api.spotify.com/v1";

export class SpotifyApiConnection {
    accessToken: string;
    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

  async fetchTopArtists(timeRange: 'short_term' | 'medium_term' | 'long_term', limit: number = 10) {

    const endpoint = `/me/top/artists?time_range=${timeRange}&limit=${limit}`;
    return this.get(endpoint);
  }


    private async get(endpoint: string) {
        const response = await fetch(`https://api.spotify.com/v1${endpoint}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
        },
        });
    }
    
}