import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '50386790-558288da927f62b3f4194a21d',
  },
});

export default function getImagesByQuery(query) {
  return axios
    .get('', {
      params: {
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data.hits;
    });
}
