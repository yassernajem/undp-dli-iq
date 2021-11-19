<script context="module">
	import { base } from '$app/paths';
	import { dev } from '$app/env';

	export async function load({ page, fetch }) {
		const baseUrl = dev ? page.path : base + page.path;
		const res = await fetch(`${baseUrl}/data.json`);
		const res2 = await fetch(`${baseUrl}.json`);
		const info = await res2.json();
		const dataTable = await res.json();
		return {
			props: {
				dataTable: dataTable.rows,
				info: info.data
			}
		};
	}
</script>

<script>
	import { descending, scaleOrdinal, range, format, group } from 'd3';
	import Circlepack from '$lib/circlepack/Circlepack.svelte';
	import PageIntro from '$lib/PageIntro.svelte';
	export let dataTable;
	export let info;

	const eventsLabelDict = {
		'1':
			'2018-03-25 - Civil servants protest over anti-austerity measures across the Iraq Kurdistan region',
		'2': '2018-05-12 - Parliamentary elections',
		'3':
			'2018-07-15 - Protests erupted in the south and central Iraq and protestors in Basra blocked port facilities',
		'4': '2018-08-09 - Announcement of final results of 2018 Parliamentary elections',
		'5': '2018-09-05 - Official campaign period of parliamentary elections of the Kurdistan region',
		'6':
			'2018-09-08 - Protests in Basra over unemployment, shortage of clean water and electricity, and corruption',
		'7': '2018-09-15 - Iraq’s parliament’ elects Muhammad al-Halbousi as its new Speaker',
		'8': '2018-09-27 - Social media influencer Tara Fares was killed in Baghdad',
		'9': '2018-09-30 - Elections day of Kurdistan region parliamentary elections',
		'10': '2018-10-02 - Parliament elected PUKs candidate Barham Salih as new president of Iraq',
		'11': '2018-10-25 - Adil Abdul Mahdi was sworn in as new Prime Minister',
		'12':
			'2019-01-16 - Unidentified gunmen assasinated Kurdistan Democratic Party (KDP) representative Abd al-Jabbar Aref outside Kirkuk',
		'13':
			'2019-01-20 - The Iraqi Commission on Integrity announced that the Head of the Energy Committee in Diwaniyah Province had been arrested on charges of bribery.',
		'14': '2019-01-21 - Prime Minister Adel Abd al-Mahdi visits Basra to meet protestors',
		'15':
			'2019-01-23 - The Iraqi Integrity Commission announced that it had sentenced the Secretary of Baghdad and the Director-General of the Department of Parks  to seven years imprisonment for damaging infrastructure development projects',
		'16': '2019-06-10 - Nechirvan Barzan sworn in president of the Kurdistan region',
		'17':
			'2019-09-25 - ِA peaceful gathering and sit-in of university graduates in front of the PM office in Baghdad to demand employment and dignity',
		'18': '2019-10-01 - Mass protests in Baghdad and sourhtern provinces',
		'19': '2019-10-26 - IS leader Abu Bakr al-Baghdadi killed in Idlib',
		'20':
			'2019-11-01 - Mass protests intensify with hundred protestors killed. Protestors regain control of Khilani Square and Sanak Bridge ',
		'21': '2019-11-27 - Protestors burn down the Iranian consulate in Najaf',
		'22': '2019-11-27 - Prime Minister Adel Abdul Mahdi announces his resignation',
		'23': '2019-12-01 - Parliament approves resignation of PM Mahdi',
		'24': '2019-12-24 - Parliament approves a new electoral law',
		'25': '2019-12-29 - US strikes the Kata ib Hezbolla كتائب حزب الله, positions in Iraq',
		'26':
			'2019-12-31 - Kataeb Hezbollah‎ and other units of the Popular Mobilization Forces attack the US Embassy in Baghdad',
		'27':
			'2020-01-03 - Assasination of General Qassem Soleimani and PFM leader Abu Mahdi al-Muhandis by a US drone',
		'28': '2020-01-04 - Funeral of General Qassem Soleimani and PFM leader',
		'29':
			'2020-01-05 - The Iraqi Parliament votes to end the presence of all foreign troops in the country.',
		'30':
			'2020-01-08 - Iranian forces fired missiles at Ain al-Asad air base in Anbar province and Erbil International Airport, where US/anti-ISIS coalition troops are based,',
		'31':
			'2020-01-10 - An Iraqi journalist, Ahmad Abdelsamad, of Dijlah TV and his cameraman, Safaa Ghali, were shot in their car by unidentified gunmen in Basra.',
		'32':
			'2020-01-21 - Janat Madhi, a 49-year old activist and protest figure was shot dead in Basra.',
		'33':
			'2020-01-24 - Thousands gather to protest against continued American presence in Iraq following Shi’a cleric Muqtada al-Sadr’s call for the withdrawal of American troops',
		'34':
			'2020-02-01 - Mohammed Tawfiq Allawi was named PM by President Salih and asked to form a new government. Protests erupt against Allawi’s nomination.',
		'35':
			'2020-02-08 - Al-Sadr called on his followers (among them a group called blue hats) to withdraw from the protests',
		'36': '2020-02-24 - First official case of COVID-19 reported in Najaf',
		'37':
			'2020-03-01 - Mohammed Tawfiq Allawi withdrew after failing to obtain a vote of confidence. Prime Minister Adel Abdul Mahdi continues in his role as caretaker.',
		'38': '2020-03-01 - First official case of COVID-19 reported in the Kurdistan region.',
		'39':
			'2020-03-17 - President Barham Salih named Adnan al-Zurfi‎, the Governor of Najaf, as PM-designate. His appointment was opposed by certain groups and Al-Zurfi concedes.',
		'40':
			'2020-03-21 - Protesters in Tahrir Square and other parts of Iraq suspend anti-government protests until the COVID-19 is brought under control.',
		'41': '2020-03-22 - Iraq imposes nation-wide lockdown to contain COVID-19 pandemic',
		'42': '2020-04-09 - President Salih named Mustafa Al-Kadhimi as Prime Minister-designate',
		'43': '2020-05-06 - Parliament approves Mustafa Al-Kadhimi as new prime minister',
		'44':
			'2020-07-06 - The renowned Iraqi expert on armed groups Hisham al-Hashimi, was shot dead in Baghdad.',
		'45':
			'2020-07-20 - Prime Minister al-Kadhimi meets with President Donald Trump in the White House.',
		'46': '2020-08-19 - A female activist Reham Yacoub رهام يعقوب was killed in Basra.',
		'47':
			'2020-09-30 - Iran-backed militias launched rockets targeting U.S. troops that landed near Erbil International Airport in the KRI',
		'48': '2020-10-01 - Iraq’s protest reaches one-year mark',
		'49':
			'2020-10-25 - With pandemic restrictions lifted, protests resumed at Baghdad’s Tahrir Square as the movement hit the one-year mark of Oct 2019 protests',
		'50': '2020-11-02 - Protesters blocked all roads leading to main Gulf port Umm Qasr ',
		'51': '2020-11-27 - Attack on Al-Habboubi or Haboubi Square in Nasiriyah, Thi Qar province',
		'52':
			'2020-11-27 - Militiamen of Rab Allah raided a massage parlour and liquor stores in Baghdad, which they saw as morally unacceptable and corrupting Iraqi youth.',
		'53':
			'2020-12-16 - A well-known anti-government activist Salah al-Iraqi killed in Baghdad’s al-Jadeed suburb.',
		'54': '2020-12-02 - Protests flare up in KRI’s Sulaymaniyah province.',
		'55':
			'2020-12-18 - Intense public discontent as the central bank devalues the currency by around 20%, adding inflationary pressure ',
		'56':
			'2020-12-22 - Iraq signed a preliminary deal to receive 1.5 million doses of the Pfizer–BioNTech COVID-19 vaccine in early 2021',
		'57':
			'2021-01-19 - The government approves the decision to move the elections originally scheduled for June 6, 2021 to October 10, 2021.',
		'58':
			'2021-01-21 - Twin suicide bombings in Baghdad s market of Tayaran Square, IS claimed responsibility',
		'59':
			'2021-02-01 - Anti-government protests in Nasiriyah over deteriorating public services. Demonstrators regularly gathered in Al-Habboubi Square',
		'60': '2021-02-15 - Multiple rockets fired at Erbil, the capital of the KRI',
		'61':
			'2021-02-18 - Government imposes a total curfew on Friday, Saturday and Sunday of each week from Feb 18th until Mar 8th',
		'62': '2021-03-05 - Pope Francis visits Iraq',
		'63':
			'2021-03-21 - The Ministry of Health announces the arrival of the first batch of the Pfizer-BioNTech vaccine',
		'64':
			'2021-03-31 - Council of Representatives passed the budget law with a record deficit and kept the currency devaluation.',
		'65':
			'2021-04-01 - Fuel crisis in the province of Thi Qar, as protesters week-long sit-in against unemployment shut the Nasiriyah oil refinery.',
		'66': '2021-04-22 - Iraq surpassed one million COVID-19 cases',
		'67': '2021-04-25 - Fire brok out in the coronavirus ICU of Baghdad hospital',
		'68': '2021-05-04 - Health Minister resigns over fire at covid-19 hospital in Baghdad',
		'69': '2021-07-12 - Fire in covid-19 hospital in the southern Iraqi city of Nasiriyah',
		'70': '2021-07-20 - Terrorist bombing in Baghdad in the eve of Al-Adha Holiday'
	};

	const dataMap = group(
		dataTable,
		(d) => d.lang,
		(d) => d.event
	);

	const days = range(-7, 8, 1);
	const scaleThreshold = scaleOrdinal()
		.domain(['0', '0.5', '1'])
		.range([10, 50, +Infinity]);
	let w;
	let h;
	let selectedLanguage = Array.from(dataMap.keys())[0];
	let selectedEvent = Array.from(dataMap.get(selectedLanguage), (d) => d[0])[0];
	let selectedDay = 0;
	let threshold = '0.5';

	let languages = Array.from(dataMap, (d) => d[0]);
	let events = Array.from(dataMap.get(selectedLanguage), (d) => d[0]);

	const headers = [
		'-7',
		'-6',
		'-5',
		'-4',
		'-3',
		'-2',
		'-1',
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7'
	];

	$: data = dataMap
		.get(selectedLanguage)
		.get(selectedEvent)
		.map((d) => {
			const series = headers.map((h) => {
				return { x: +h, y: d[h] };
			});
			return {
				name: d.word,
				r: Math.sqrt(d[selectedDay] / Math.PI),
				value: d[selectedDay],
				series
			};
		})
		.sort((a, b) => descending(a.r, b.r))
		.filter((d, i) => d.r && i <= scaleThreshold(threshold));

	function handleDays(day) {
		selectedDay = day;
	}
</script>

<div class="container">
	<PageIntro title={info.title} />
</div>
<div class="bg-light w-100 containerViz">
	<div class="container h-100 d-flex flex-column">
		<div class="row border-bottom py-2">
			<div class="col-md-3">
				<div class="mb-3">
					<label for="language" class="form-label">Language</label>
					<select
						bind:value={selectedLanguage}
						class="form-select"
						id="language"
						aria-label="Language"
					>
						{#each languages as language}
							<option value={language}>
								{language}
							</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="col-md-4">
				<div class="mb-3">
					<label for="event" class="form-label">Event</label>
					<select bind:value={selectedEvent} class="form-select" id="event" aria-label="Event">
						{#each events as event}
							<option value={event}>
								{eventsLabelDict[event]}
							</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="col-md-2 offset-md-3">
				<div class="mb-0">
					<label for="rangeWords" class="form-label">Threshold</label>
					<input
						bind:value={threshold}
						type="range"
						class="form-range"
						min="0"
						max="1"
						step="0.5"
						id="rangeWords"
					/>
					<div class="d-flex justify-content-between w-100">
						<div class="col-3">top 10</div>
						<div class="col-3 text-center">top 50</div>
						<div class="col-3 text-end">All</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row flex-grow-1 flex-shrink-1 overflow-hidden" bind:clientHeight={h}>
			<div class="col-12">
				<div bind:clientWidth={w} class="w-100 h-100">
					<Circlepack width={w} height={h} {data} day={selectedDay} />
				</div>
			</div>
		</div>
		<div class="row py-2 gx-0">
			{#each days as day}
				<div class="col">
					<button
						on:click={() => handleDays(day)}
						type="button"
						class={`btn btn-sm rounded-0 w-100 ${
							day === selectedDay ? 'btn-secondary' : 'btn-outline-secondary'
						}`}
					>
						{day ? format('+')(day) : day}
						<span class="d-none d-md-inline">{`day${Math.abs(day) > 1 ? 's' : ''}`}</span>
					</button>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.containerViz {
		height: calc(100vh - 76px);
	}
</style>
