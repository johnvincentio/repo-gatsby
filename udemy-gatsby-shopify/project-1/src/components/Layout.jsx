//

import React from 'react';
import { LayoutWrapper } from './styles';

const Layout = ({ children }) => (
	<>
		<LayoutWrapper>
			<main>{children}</main>
		</LayoutWrapper>
	</>
);

export default Layout;
