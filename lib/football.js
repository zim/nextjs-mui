import seasonData from "../data/en.1.json";
// console.log(seasonData);

export function getSeasonData() {
	// Get file names under /posts
	const { name, rounds } = seasonData;
	const { matches } = rounds;

	// console.log(rounds);
	// console.log(matches);

	const allSeasonData = rounds.map((round) => {
		const id = round.name;
		// console.log("id ======");
		// console.log(id);
		// // console.log(object)

		const matchesNew = round.matches.map((match) => {
			const score = match.score;
			console.log("score ======");
			console.log(score);

			let result = "";

			if (score.ft[0] > score.ft[1]) {
				result = "H";
			} else if (score.ft[0] < score.ft[1]) {
				result = "A";
			} else {
				result = "D";
			}

			// const result = () => {
			// 	return
			// }

			// Combine the data with the id
			return {
				result: result,
				...match,
			};
		});

		// console.log(matches);

		const roundNew = {
			matchesNew,
			...round,
		};

		// console.log(roundNew);

		// Combine the data with the id
		return {
			id,
			...roundNew,
		};
	});
	// console.log(allSeasonData);
	// Sort posts by date
	// return allTeamsData.sort(({ date: a }, { date: b }) => {
	// 	if (a < b) {
	// 		return 1;
	// 	} else if (a > b) {
	// 		return -1;
	// 	} else {
	// 		return 0;
	// 	}
	// });
	// return allTeamsData;

	return {
		name,
		rounds: allSeasonData,
	};
}
