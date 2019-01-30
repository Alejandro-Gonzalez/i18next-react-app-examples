import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';

i18next
	.use(XHR)
	.use(reactI18nextModule)
	.init(
		{
			interpolation: {
				// React already does escaping
				escapeValue: false
			},
			lng: 'es',
			fallbackLng: 'es',
			debug: false,
			// Using simple hardcoded resources for simple example
			backend: {
				loadPath: `/locales/{{lng}}/{{ns}}.json`
			}
			/* resources: {
				en: {
					translation: {
						age: 'Age',
						home: 'Home',
						name: 'Name'
					}
				},
				es: {
					translation: {
						age: 'Años',
						home: 'Casa',
						name: 'Nombre'
					}
				}
			} */
		},
		(err, t) => {
			if (err) {
				return console.error(err);
			}
		}
	);

export default i18next;
