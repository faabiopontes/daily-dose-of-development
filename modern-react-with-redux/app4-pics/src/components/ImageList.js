import React from 'react';

import './ImageList.css';

const ImageList = props => {
  console.log(props.images);
  const images = props.images.map(({ id, urls, description }) => <img key={id} src={urls.regular} alt={description} />);

  return <div class="image-list">{images}</div>;
}

export default ImageList;