import React from 'react';
import { withNamespaces } from 'react-i18next';
import Sections from './Sections';

const Simple = ({ t }) => (
	<div>
		<h4>HOC Component</h4>
		<Sections t={t} />
	</div>
);

export default withNamespaces()(Simple);
