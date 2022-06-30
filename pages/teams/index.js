import * as React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import Layout from "/components/layout";
import utilStyles from "/styles/utils.module.css";
// import { getSortedPostsData } from "/lib/posts";
import { getTeamsData } from "/lib/teams";
// import Link from "next/link";

console.log("getTeamsData =======");
console.log(getTeamsData());

const theme = createTheme();

export async function getStaticProps() {
	// const allPostsData = getSortedPostsData();
	const allTeamsData = getTeamsData();
	return {
		props: {
			// allPostsData,
			allTeamsData,
		},
	};
}

export default function Teams({ allTeamsData }) {
	// console.log("allPostsData");
	// console.log(allPostsData);
	console.log("allTeamsData");
	console.log(allTeamsData);
	return (
		<Layout>
			<Container maxWidth="md">
				<Box className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
					<List
						sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
					>
						{allTeamsData.clubs.map(({ id, name, country, image }) => (
							<Link href={`/teams/${id}`} className={utilStyles.noDecoration}>
								<ListItem key={id}>
									<ListItemAvatar>
										<Avatar>
											<img src={image} alt={name} />
										</Avatar>
									</ListItemAvatar>
									<ListItemText primary={name} secondary={country} />
								</ListItem>
							</Link>
						))}
					</List>
				</Box>
			</Container>
		</Layout>
	);
}
