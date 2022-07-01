import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
							I am an accordion
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<List sx={{ width: "100%", bgcolor: "none" }}>
							{matches.map(({ date, team1, team2, score }, i) => (
								<ListItem>
									<Typography>{date}</Typography>
									<Typography>{team1}</Typography>
									<Typography>{score.ft[0]}</Typography>
									<Typography>{score.ft[1]}</Typography>
									<Typography>{team1}</Typography>
								</ListItem>
							))}
						</List>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
};

export default ControlledAccordions;
