//

import React from 'react';

import Image from 'gatsby-image';

import ImageThumbnailWrapper from './styles';

function ImageThumbnail({ isActive, onClick, image }) {
	console.log('--- ImageThumbnail');
	return (
		<ImageThumbnailWrapper
			onClick={() => {
				console.log('onClick');
			}}
		>
			<Image fluid={image} />
		</ImageThumbnailWrapper>
	);
}

export default ImageThumbnail;
