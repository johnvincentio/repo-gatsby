//

import React from 'react';

import Image from 'gatsby-image';

import ImageThumbnail from './ImageThumbnail';

import { ImageGalleryWrapper } from './styles';

function ImageGallery({ images }) {
	const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(images[0]);

	const handleClick = (image) => {
		console.log('ImageGallery::handleClick');
		setActiveImageThumbnail(image);
	};
	console.log('ImageGallery; images ', images);
	console.log('activeImageThumbnail ', activeImageThumbnail);
	// if (activeImageThumbnail === undefined) return '';
	return (
		<ImageGalleryWrapper>
			<div>
				<Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
			</div>
			<div>
				{images.map((image) => {
					console.log('image');
					return (
						<ImageThumbnail
							key={image.id}
							isActive={activeImageThumbnail.id === image.id}
							image={image}
							onClick={handleClick}
						/>
					);
				})}
			</div>
		</ImageGalleryWrapper>
	);
}

export default ImageGallery;
