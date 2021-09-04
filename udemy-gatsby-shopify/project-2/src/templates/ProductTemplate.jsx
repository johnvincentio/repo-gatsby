import React from 'react';

import { graphql } from 'gatsby';

import CartContext from '../context/CartContext';
import { Layout, ImageGallery } from '../components';

import { Grid, SelectWrapper, Price } from './templateStyles';

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
	console.log('getProductById ', getProductById);
	const [product, setProduct] = React.useState(null);
	const [selectedVariant, setSelectedVariant] = React.useState(null);

	React.useEffect(() => {
		console.log('in useEffect');
		getProductById(props.data.shopifyProduct.shopifyId).then((result) => {
			console.log('result ', result);
			setProduct(result);
			setSelectedVariant(result.variants[0]);
		});
	}, [getProductById, setProduct, props.data.shopifyProduct.shopifyId]);

	const handleVariantChange = (e) => {
		const newVariant = product?.variants.find((v) => v.id === e.target.value);
		setSelectedVariant(newVariant);
	};

	return (
		<Layout>
			<Grid>
				<div>
					<h1>{props.data.shopifyProduct.title}</h1>
					<p>{props.data.shopifyProduct.description}</p>
					{product?.availableForSale
					&& (
						<>
							<SelectWrapper>
								<strong>Variant</strong>
								<select
									value={selectedVariant?.id}
									onChange={handleVariantChange}
								>
									{product?.variants.map((v) => (
										<option key={v.id} value={v.id}>{v.title}</option>
									))}
								</select>
							</SelectWrapper>
							{!!selectedVariant && (
								<Price>
									$
									{selectedVariant?.price}
								</Price>
							)}
						</>
					)}
				</div>
				<div>
					<ImageGallery images={props.data.shopifyProduct.images} />
				</div>
			</Grid>
		</Layout>
	);
}

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
