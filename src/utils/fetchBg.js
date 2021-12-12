import UnsplashKeys from '../config/unsplash-config';
import sampleImg from '../assets/images/ibrahim-rifath-u2ey1Y1g0dI-unsplash.jpg';

export default async function getBg(query) {
  const url = `${UnsplashKeys.baseUrl}?client_id=${UnsplashKeys.accessKey}&query=${query}&page=1&per_page=1`;

  let bgObj = {
    imgUrl: sampleImg,
    nome: 'Sample Info',
    link: 'https://google.com',
    profileImg: null
  };
  
  try {
    const response = await fetch(url);
    const json = await response.json();

    bgObj = {
      imgUrl: json.results[0].urls.full,
      nome: json.results[0].user.name,
      link: json.results[0].user.links.html,
      profileImg: json.results[0].user.profile_image.small
    };
  } catch (error) {
    console.error(error);
  } finally {
    return bgObj;
  }
};