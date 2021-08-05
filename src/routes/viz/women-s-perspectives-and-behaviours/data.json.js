import emotions_fr from './_emotions_fr.json';
import emotions_ar from './_emotions_ar.json';
import valid_emotions_fr from './_valid_emotions_fr.json';
import valid_emotions_ar from './_valid_emotions_ar.json';
import { tsvParse, autoType } from 'd3-dsv';
import { groups, group } from 'd3-array';
import data from './_data.tsv?raw';
import events from './_events.tsv?raw';
import tweets from './_valid_tweets.tsv?raw';

const dataParsed = tsvParse(data, autoType);
const eventsParsed = tsvParse(events, autoType);
const tweetsParsed = tsvParse(tweets, autoType);

const grouped = Object.fromEntries(group(dataParsed, (d) => d.language));

export async function get() {
	return {
		body: {
			emotions: {
				ar: { evolution: emotions_ar.rows, valid: valid_emotions_ar.rows },
				fr: { evolution: emotions_fr.rows, valid: valid_emotions_fr.rows }
			},
			emo: grouped,
			tweets: tweetsParsed,
			events: eventsParsed
		}
	};
}
