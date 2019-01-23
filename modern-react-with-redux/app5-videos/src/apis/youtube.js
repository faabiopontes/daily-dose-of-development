import axios from 'axios';

const KEY = 'AIzaSyCzdSi91eQVb2EkPfLcHqHI6_MdXnaD-jk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  },
});