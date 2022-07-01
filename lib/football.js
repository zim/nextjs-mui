import seasonData from "../data/en.1.json";
console.log(seasonData);

export function getSeasonData() {
	// Get file names under /posts
	const { name, rounds } = seasonData;
	const { matches } = rounds;

	console.log(rounds);
	console.log(matches);

	// const allSeasonData = rounds.map((round) => {
	// 	const id = round.name;
	// 	console.log("id ======");
	// 	console.log(id);

	// 	// Combine the data with the id
	// 	return {
	// 		id,
	// 		...round,
	// 	};
	// });
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
		rounds: rounds,
	};
}
