/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-onchange */

import React from 'react';

import { graphql } from 'gatsby';

import CartContext from '../context/CartContext';

import {
  Layout,
  ImageGallery,
  ProductQuantityAdder,
  Button,
  SEO,
} from 'components';

import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

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
	const { getProductById } = React.useContext(CartContext);
	const [product, setProduct] = React.useState(null);
	const [selectedVariant, setSelectedVariant] = React.useState(null);
	const { search, origin, pathname } = useLocation();
	const variantId = queryString.parse(search).variant;

	React.useEffect(() => {
		console.log('in useEffect');
		getProductById(props.data.shopifyProduct.shopifyId).then((result) => {
			console.log('result ', result);
			setProduct(result);
			setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
		});
	}, [getProductById, setProduct, props.data.shopifyProduct.shopifyId, variantId]);

	const handleVariantChange = (e) => {
		const newVariant = product?.variants.find((v) => v.id === e.target.value);
		setSelectedVariant(newVariant);
		navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
	};

	return (
		<Layout>
			<SEO
        description={props.data.shopifyProduct.description}
        title={props.data.shopifyProduct.title}
      />
			<Grid>
				<div>
					<h1>{props.data.shopifyProduct.title}</h1>
					<p>{props.data.shopifyProduct.description}</p>
					{product?.availableForSale && !!selectedVariant && (
						<>
						{product?.variants.length > 1 && (
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
						)}
							{!!selectedVariant && (
								<>
								<Price>${selectedVariant?.price}</Price>
								<ProductQuantityAdder
									available={selectedVariant.available}
									variantId={selectedVariant.id}
								/>
							</>
							)}
						</>
					)}
				</div>
				<div>
					<ImageGallery
            selectedVariantImageId={selectedVariant?.image.id}
            images={props.data.shopifyProduct.images}
          />
				</div>
			</Grid>
		</Layout>
	);
}
