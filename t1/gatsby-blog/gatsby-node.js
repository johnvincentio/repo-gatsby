
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({node, getNode, actions}) => {
	const { createNodeField } = actions;
	// console.log(node.internal.type);
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({node, getNode });

		createNodeField({
			node,
			name: `slug`,
			value: slug
		});
	}
}