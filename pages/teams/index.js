import * as React from "react";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ProTip from "/src/ProTip";
import Link from "/src/Link";
import Copyright from "/src/Copyright";
import ResponsiveAppBar from "/components/navbar";
import ControlledAccordions from "../../components/controlledAccordians";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Head from "next/head";
import Layout from "/components/layout";
import utilStyles from "/styles/utils.module.css";
import removeFCFromName from "../../lib/utils/removeFCFromName";
// import { getSortedPostsData } from "/lib/posts";
import { getTeamsData } from "/lib/teams";
import { getSeasonData } from "/lib/football";
// import Link from "next/link";

// console.log("getTeamsData =======");
// console.log(getTeamsData());
console.log("getSeasonData =======");
console.log(getSeasonData());

const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	color: theme.palette.text.secondary,

	lineHeight: "60px",
}));

export async function getStaticProps() {
	// const allPostsData = getSortedPostsData();
	const allTeamsData = getTeamsData();
	const allSeasonData = getSeasonData();

	const { name, rounds } = allSeasonData;
	console.log(rounds);
	return {
		props: {
			// allPostsData,
			allTeamsData,
			name,
			rounds,
		},
	};
}

export default function Teams({ allTeamsData, name, rounds }) {
	// // console.log("allPostsData");
	// // console.log(allPostsData);
	// console.log("allTeamsData");
	// console.log(allTeamsData);
	// console.log("name");
	// console.log(name);
	// console.log("rounds");
	// console.log(rounds);
	return (
		<Layout>
			<Container maxWidth="md">
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<Item>
								<Box
									className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
								>
									<Typography variant="h4" component="h2" gutterBottom>
										Teams
									</Typography>
									<List sx={{ width: "100%", maxWidth: 360, bgcolor: "none" }}>
										{allTeamsData.clubs.map(({ id, name, country, image }) => (
											<Link
												href={`/teams/${id}`}
												className={utilStyles.noDecoration}
												key={id}
											>
												<ListItem>
													<ListItemAvatar>
														<Avatar>
															<img
																src={image}
																alt={name}
																className={utilStyles.width100}
															/>
														</Avatar>
													</ListItemAvatar>
													<ListItemText primary={removeFCFromName(name)} />
												</ListItem>
											</Link>
										))}
									</List>
								</Box>
							</Item>
						</Grid>
						<Grid item xs={12} md={8}>
							<Item>
								<Box
									className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
								>
									<Typography variant="h4" component="h2" gutterBottom>
										{name}
									</Typography>
									<Typography variant="h4" component="h2" gutterBottom>
										Rounds
									</Typography>

									<ControlledAccordions rounds={rounds} />
								</Box>
							</Item>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Layout>
	);
}
