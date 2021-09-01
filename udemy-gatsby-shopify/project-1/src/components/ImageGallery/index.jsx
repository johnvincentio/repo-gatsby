import React from 'react';

import Image from 'gatsby-image';

import { ImageGalleryWrapper } from './styles';

function ImageGallery({ images }) {
	return (
		<ImageGalleryWrapper>
			<div>
				<Image fluid={images[0].localFile.childImageSharp.fluid} />
			</div>
		</ImageGalleryWrapper>
	);
}

export default ImageGallery;
