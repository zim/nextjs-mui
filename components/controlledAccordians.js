import * as React from "react";
import clsx from "clsx";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import clubImagesHelper from "../lib/clubImagesHelper";
import removeFCFromName from "../lib/utils/removeFCFromName";
import dateFormat from "../lib/utils/dateFormat";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import styles from "./controlledAccordian.module.scss";
import { Button } from "@mui/material";

// console.log(clubImagesHelper["AFC Bournemouth"]);

const ControlledAccordions = (props) => {
	console.log(props);
	const [expanded, setExpanded] = React.useState(false);
	const [showResults, setShowResults] = React.useState(false);
	const { rounds } = props;

	const handleChange = (panel) => (event, isExpanded) => {
		// console.log(panel);
		setExpanded(isExpanded ? panel : false);
	};
	const handleShowResults = (e) => () => {
		console.log("const handleShowResults ====");
		console.log(e);
		// setShowResults(true);
		setShowResults(showResults ? false : true);
	};

	return (
		<div>
			{rounds.map(({ name, matches, matchesNew }, i) => (
				<Accordion
					expanded={expanded === `panel${i}`}
					onChange={handleChange(`panel${i}`)}
					key={i}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`panel${i}bh-content`}
						id={`panel${i}bh-header`}
					>
						<Typography sx={{ width: "33%", flexShrink: 0 }}>{name}</Typography>
						<Typography sx={{ color: "text.secondary" }}>
							{dateFormat(matches[0].date)}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<List sx={{ width: "100%", bgcolor: "none" }}>
							<Button
								onClick={(e) => {
									setShowResults(showResults ? false : true);
									{
										/* setShowResults(showResults); */
									}
									console.log("clickkked", e.target);
								}}
							>
								Show Results
							</Button>

							{matchesNew.map(({ date, team1, team2, score, result }, i) => {
								{
									/* console.log(result); */
								}
								return showResults ? (
									<ListItem
										key={i}
										className={clsx(
											styles.result,
											result === "H" && styles.home,
											result === "A" && styles.away
										)}
									>
										<Image
											src={clubImagesHelper[team1]}
											width={40}
											height={40}
											alt="logo"
										/>
										<Typography
											sx={{ flex: 2, textAlign: "center", fontSize: ".8rem" }}
										>
											{removeFCFromName(team1)}
										</Typography>
										<div className={utilStyles.flexit}>
											<Typography variant="h5" component="h2">
												{score.ft[0]}
											</Typography>
											<Typography variant="h5" component="h2">
												{score.ft[1]}
											</Typography>
										</div>

										<Typography
											sx={{ flex: 2, textAlign: "center", fontSize: ".8rem" }}
										>
											{removeFCFromName(team2)}
										</Typography>
										<Image
											src={clubImagesHelper[team2]}
											width={40}
											height={40}
											alt="logo"
										/>
									</ListItem>
								) : (
									<ListItem key={i} className={clsx(styles.result)}>
										<Image
											src={clubImagesHelper[team1]}
											width={40}
											height={40}
											alt="logo"
										/>
										<Typography
											sx={{ flex: 2, textAlign: "center", fontSize: ".8rem" }}
										>
											{removeFCFromName(team1)}
										</Typography>
										<div className={utilStyles.flexit}>
											<Typography variant="h5" component="h2">
												?
											</Typography>
											<Typography variant="h5" component="h2">
												?
											</Typography>
										</div>

										<Typography
											sx={{ flex: 2, textAlign: "center", fontSize: ".8rem" }}
										>
											{removeFCFromName(team2)}
										</Typography>
										<Image
											src={clubImagesHelper[team2]}
											width={40}
											height={40}
											alt="logo"
										/>
									</ListItem>
								);
							})}
						</List>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
};

export default ControlledAccordions;
