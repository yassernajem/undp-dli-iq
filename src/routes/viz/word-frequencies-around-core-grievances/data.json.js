import { tsvParse } from 'd3-dsv';
import data from './_circlepack.tsv?raw';

const fieldsToExclude = ['lang', 'event', 'word'];
const parsedData = tsvParse(data, (d) => {
	const elm = {};
	for (const property in d) {
		if (fieldsToExclude.includes(property)) {
			elm[property] = d[property];
		} else {
			elm[property] = +d[property];
		}
	}
	return elm;
});

export async function get() {
	return {
		body: {
			rows: parsedData
		}
	};
}
