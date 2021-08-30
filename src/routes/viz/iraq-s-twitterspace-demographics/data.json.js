import { tsvParse, autoType } from 'd3-dsv';
import { group } from 'd3-array';
import data from './_data.tsv?raw';
import events from './_events.tsv?raw';
import tweets from './_total_tweets.tsv?raw';
import users from './_total_users.tsv?raw';

const dataParsed = tsvParse(data, autoType);
const eventsParsed = tsvParse(events, autoType);
const tweetsParsed = tsvParse(tweets, autoType);
const usersParsed = tsvParse(users, autoType);

const grouped = Object.fromEntries(group(dataParsed, (d) => d.macro));

export async function get() {
	return {
		body: {
			data: grouped,
			tweets: tweetsParsed,
			events: eventsParsed,
			users: usersParsed
		}
	};
}
