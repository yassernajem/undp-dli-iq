import { html } from './_text.md';

export async function get() {
	return {
		body: {
			html: html
		}
	};
}
