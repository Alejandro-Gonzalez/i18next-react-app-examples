import React from 'react';
import i18next from '../i18n';
import Sections from './Sections';

const Simple = () => (
	<div>
		<h4>Simple Component</h4>
		<Sections t={i18next.t.bind(i18next)} />
	</div>
);

export default Simple;
