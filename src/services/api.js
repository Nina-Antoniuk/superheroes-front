import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export async function getHeroes(skip, limit) {
  const { data } = await axios.get(`/?skip=${skip}&limit=${limit}`);
  return data;
}

export async function getHero(id) {
  const { data } = await axios.get(`/hero/${id}`);
  return data;
}

export async function addHero(info) {
  const { data } = await axios.post('/api/create', info);
  return data;
}

export async function removeHero(id) {
  const { data } = await axios.delete(`/api/delete/${id}`);
  return data;
}

export async function updateHero(id, info) {
  const { data } = await axios.patch(`/api/update/${id}`, info);
  return data;
}

// export async function updateImages(image) {
//   const { data } = await axios.post(`/api/update`, image, {
//     headers: {
//       'Content-type': 'multipart/form-data',
//     },
//   });
//   return data;
// }
