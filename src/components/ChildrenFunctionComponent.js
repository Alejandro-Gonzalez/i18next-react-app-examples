import React from 'react';
import { I18n } from 'react-i18next';
import Sections from './Sections';

const ChildrenFunction = () => (
	<I18n>
		{t => (
			<div>
				<h4>Function Component</h4>
				<Sections t={t} />
			</div>
		)}
	</I18n>
);

export default ChildrenFunction;
