import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '50386790-558288da927f62b3f4194a21d',
  },
});

export default async function getImagesByQuery(query, page, per_page = 15) {
  const res = await axios.get('', {
    params: {
      q: query,
      page: page,
      per_page: per_page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return {
    hits: res.data.hits,
    total: res.data.totalHits,
  };
}
