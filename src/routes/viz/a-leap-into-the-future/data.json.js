import { tsvParse, autoType } from 'd3-dsv';
import { group } from 'd3-array';
import data from './_data.tsv?raw';
import events from './_events.tsv?raw';
import tweets from './_valid_tweets.tsv?raw';

const dataParsed = tsvParse(data, autoType);
const eventsParsed = tsvParse(events, autoType);
const tweetsParsed = tsvParse(tweets, autoType);

const grouped = Object.fromEntries(group(dataParsed, (d) => d.gender));

export async function get() {
	return {
		body: {
			emo: grouped,
			tweets: tweetsParsed,
			events: eventsParsed
		}
	};
}
