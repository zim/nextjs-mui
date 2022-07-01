import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import clubImagesHelper from "../lib/clubImagesHelper";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

console.log(clubImagesHelper["AFC Bournemouth"]);

const ControlledAccordions = (props) => {
	console.log(props);
	const [expanded, setExpanded] = React.useState(false);
	const { rounds } = props;

	const handleChange = (panel) => (event, isExpanded) => {
		console.log(panel);
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div>
			{rounds.map(({ name, matches }, i) => (
				<Accordion
					expanded={expanded === `panel${i}`}
					onChange={handleChange(`panel${i}`)}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`panel${i}bh-content`}
						id={`panel${i}bh-header`}
					>
						<Typography sx={{ width: "33%", flexShrink: 0 }}>{name}</Typography>
						<Typography sx={{ color: "text.secondary" }}>
							{matches[0].date}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<List sx={{ width: "100%", bgcolor: "none" }}>
							{matches.map(({ date, team1, team2, score }, i) => {
								console.log(clubImagesHelper[team1]);
								return (
									<ListItem>
										<Image
											src={clubImagesHelper[team1]}
											width={40}
											height={40}
											alt="logo"
										/>
										<Typography sx={{ flex: 2, textAlign: "center" }}>
											{team1}
										</Typography>
										<div className={utilStyles.flexit}>
											<Typography variant="h4" component="h2">
												{score.ft[0]}
											</Typography>
											<Typography variant="h4" component="h2">
												{score.ft[1]}
											</Typography>
										</div>

										<Typography sx={{ flex: 2, textAlign: "center" }}>
											{team2}
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
