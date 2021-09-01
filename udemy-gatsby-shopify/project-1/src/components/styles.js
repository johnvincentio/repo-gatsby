//

import styled from 'styled-components';

const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 0 20px 40px 20px;
`;

const ImageThumbnailWrapper = styled.section`
	cursor: pointer;
	border 4px solid #ecc;
`;

const ImageGalleryWrapper = styled.section`
	> div:first-child {
		border 5px solid #ccc;
	}
	> div:last-child {
		margin-top: 5px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5px;

		@media(min-width: 768px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
		@media(min-width: 1024px) {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
`;

export { LayoutWrapper, ImageThumbnailWrapper, ImageGalleryWrapper };
