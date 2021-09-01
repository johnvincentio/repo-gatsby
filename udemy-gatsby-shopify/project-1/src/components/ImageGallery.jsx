//

import React from 'react';

import Image from 'gatsby-image';

import ImageThumbnail from './ImageThumbnail';

import { ImageGalleryWrapper } from './styles';

function ImageGallery({ images }) {
	return (
		<ImageGalleryWrapper>
			<div>
				<Image fluid={images[0].localFile.childImageSharp.fluid} />
			</div>
			<div>
				{images.map((image) => {
					console.log('image');
					return (
						<ImageThumbnail key={image.id} image={image.localFile.childImageSharp.fluid} />
					);
				})}
			</div>
		</ImageGalleryWrapper>
	);
}

export default ImageGallery;
