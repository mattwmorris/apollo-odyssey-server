// src/datasources/track-api.js
const { RESTDataSource } = require('apollo-datasource-rest');
const { HttpsProxyAgent } = require('https-proxy-agent');
const https = require('https');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  willSendRequest(request) {
    request.agent = new https.Agent({ rejectUnauthorized: false })
  }
  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }  
  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }
  incrementTrackViews(trackId) {
    return this.patch(`track/${trackId}/numberOfViews`);
 }
}


module.exports = TrackAPI;