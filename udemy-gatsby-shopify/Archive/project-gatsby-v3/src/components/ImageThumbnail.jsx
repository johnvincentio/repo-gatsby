//

import React from 'react';

import Image from 'gatsby-image';

import { ImageThumbnailWrapper } from './styles';

function ImageThumbnail({ isActive, onClick, image }) {
	console.log('--- ImageThumbnail');
	const handleClick = () => {
		console.log('handleClick');
		onClick(image);
	};
	return (
		<ImageThumbnailWrapper
			onClick={() => { handleClick(); }}
			isActive={isActive}
		>
			<Image fluid={image.localFile.childImageSharp.fluid} />
		</ImageThumbnailWrapper>
	);
}

export default ImageThumbnail;
