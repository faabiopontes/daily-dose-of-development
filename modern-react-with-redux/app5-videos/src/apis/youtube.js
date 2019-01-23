import axios from 'axios';

const KEY = 'AIzaSyCqoOd9oVS_afMA0z2drDgeoyUhzuSwrOE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  },
});