import React from 'react';

const Sections = ({ t }) => (
	<div className="sections">
		<div className="section">
			<img src="https://frinkiac.com/img/S07E18/595695.jpg" alt="image1" />
			<label>{t('text1')}</label>
		</div>
		<div className="section">
			<img src="https://frinkiac.com/img/S07E18/597863.jpg" alt="image2" />
			<label>{t('text2')}</label>
		</div>
		<div className="section">
			<img src="https://frinkiac.com/img/S07E18/598531.jpg" alt="image3" />
			<label>{t('text3')}</label>
		</div>
		<div className="section">
			<img src="https://frinkiac.com/img/S07E18/599699.jpg" alt="image4" />
			<label>{t('text4')}</label>
		</div>
	</div>
);

export default Sections;
