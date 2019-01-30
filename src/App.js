import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './App.css';

import SimpleComponent from './components/SimpleComponent';
import ChildrenFunctionComponent from './components/ChildrenFunctionComponent';
import HocComponent from './components/HocComponent';
import Buttons from './components/Buttons';

window.i18n = i18n;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			active: 1
		};
	}

	changeLang = () => {
		const lang = i18n.language === 'es' ? 'en' : 'es';
		i18n.changeLanguage(lang);
	};

	changeType = idx => {
		this.setState({ active: idx });
	};

	render() {
		const { active } = this.state;
		return (
			<div>
				<button onClick={this.changeLang}>Change Lang</button>
				<Buttons active={active} onClick={this.changeType} />
				<div className="App">
					{active === 1 && <SimpleComponent />}

					{active === 2 && <ChildrenFunctionComponent />}

					{active === 3 && (
						<I18nextProvider i18n={i18n}>
							<HocComponent />
						</I18nextProvider>
					)}
				</div>
			</div>
		);
	}
}

export default App;
