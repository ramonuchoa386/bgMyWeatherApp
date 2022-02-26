import UnsplashKeys from '../config/unsplash-config';
import sampleImg from '../assets/images/ibrahim-rifath-u2ey1Y1g0dI-unsplash.jpg';

export default async function getBg(query) {
  const numberOfImgs = 10;
  const url = `${UnsplashKeys.baseUrl}?client_id=${UnsplashKeys.accessKey}&query=${query}&page=1&per_page=${numberOfImgs}`;

  let bgObj = {
    imgUrl: sampleImg,
    nome: 'Sample Info',
    link: 'https://google.com',
    profileImg: null,
  };

  try {
    const response = await fetch(url);
    const json = await response.json();

    const choosen = json.results[Math.floor(Math.random() * numberOfImgs)];

    bgObj = {
      imgUrl: choosen.urls.full,
      nome: choosen.user.name,
      link: choosen.user.links.html,
      profileImg: choosen.user.profile_image.small,
    };
  } catch (error) {
    console.error(error);
  } finally {
    return bgObj;
  }
}
