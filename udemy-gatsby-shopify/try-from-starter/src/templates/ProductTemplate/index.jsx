import React from 'react';

import { graphql } from 'gatsby';

import CartContext from 'context/CartContext';
import { Layout, ImageGallery } from 'components';

import { Grid } from './styles';

export const query = graphql`
	query ProductQuery($shopifyId: String) {
		shopifyProduct(shopifyId: {eq: $shopifyId}) {
			shopifyId
			title
			description
			images {
				id
				localFile {
					childImageSharp {
						fluid(maxWidth: 300) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	}
`;

export default function ProductTemplate(props) {
	console.log(props);
	console.log('CartContext ', CartContext);
	const { getProductById } = React.useContext(CartContext);

	// React.useEffect(() => {
	// 	getProductById(props.data.shopifyProduct.storefrontId).then((result) => {
	// 		setProduct(result);
	// 		setSelectedVariant(
	// 			result.variants.find(({ id }) => id === variantID) || result.variants[0],
	// 		);
	// 	});
	// }, [
	// 	getProductById,
	// 	setProduct,
	// 	props.data.shopifyProduct.shopifyId,
	// 	variantID,
	// ]);

	React.useEffect(() => {
		console.log('in useEffect');
		getProductById(props.data.shopifyProduct.shopifyId).then((result) => {
			console.log('result ', result);
		});
	}, [getProductById, props.data.shopifyProduct.shopifyId]);

	return (
		<Layout>
			<Grid>
				<div>
					<h1>{props.data.shopifyProduct.title}</h1>
					<p>{props.data.shopifyProduct.description}</p>
				</div>
				<div>
					<ImageGallery images={props.data.shopifyProduct.images} />
				</div>
			</Grid>
		</Layout>
	);
}
